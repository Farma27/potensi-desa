'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix untuk ikon marker Leaflet di Next.js
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  center: [number, number];
  zoom: number;
  height?: string;
  className?: string;
  markers?: Array<{
    position: [number, number];
    popup?: string;
    title?: string;
  }>;
  enableScrollWheelZoom?: boolean;
  style?: 'osm' | 'satellite' | 'hybrid' | 'terrain';
  showLayerControl?: boolean;
}

export default function Map({ 
  center, 
  zoom, 
  height = '400px', 
  className = '',
  markers = [],
  enableScrollWheelZoom = true,
  style = 'osm',
  showLayerControl = true
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    // Inisialisasi peta hanya sekali
    if (!mapInstanceRef.current) {
      const map = L.map(mapRef.current, {
        scrollWheelZoom: enableScrollWheelZoom,
      }).setView(center, zoom);

      // Base tile layers
      const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 5,
      });

      // Satellite imagery
      const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community',
        maxZoom: 18,
      });

      // Hybrid (satellite + labels)
      const hybridLayer = L.layerGroup([
        satelliteLayer,
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
          attribution: '',
          maxZoom: 18,
        })
      ]);

      // Terrain layer
      const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        maxZoom: 17,
      });

      // Set default layer based on style prop
      let defaultLayer;
      switch (style) {
        case 'satellite':
          defaultLayer = satelliteLayer;
          break;
        case 'hybrid':
          defaultLayer = hybridLayer;
          break;
        case 'terrain':
          defaultLayer = terrainLayer;
          break;
        default:
          defaultLayer = osmLayer;
      }

      defaultLayer.addTo(map);

      // Add layer control if enabled
      if (showLayerControl) {
        const baseMaps = {
          "🗺️ Street Map": osmLayer,
          "🛰️ Satellite": satelliteLayer,
          "🌍 Hybrid": hybridLayer,
          "⛰️ Terrain": terrainLayer
        };

        L.control.layers(baseMaps, {}, {
          position: 'topright',
          collapsed: true
        }).addTo(map);
      }

      // Tambahkan kontrol zoom dengan posisi custom
      map.zoomControl.setPosition('bottomright');

      // Add scale control
      L.control.scale({
        position: 'bottomleft',
        imperial: false
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Bersihkan marker sebelumnya
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Tambahkan marker dengan ikon custom yang lebih mirip Google Maps
    markers.forEach((markerData, index) => {
      const customIcon = L.divIcon({
        className: 'custom-marker-google-style',
        html: `
          <div class="marker-pin">
            <div class="marker-icon">📍</div>
          </div>
          <div class="marker-shadow"></div>
        `,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
      });

      const marker = L.marker(markerData.position, { icon: customIcon });
      
      if (markerData.popup) {
        marker.bindPopup(markerData.popup, {
          maxWidth: 300,
          className: 'custom-popup-google-style',
          closeButton: true,
          autoPan: true
        });
      }
      
      if (markerData.title) {
        marker.bindTooltip(markerData.title, {
          permanent: false,
          direction: 'top',
          offset: [0, -45],
          className: 'custom-tooltip'
        });
      }
      
      marker.addTo(map);

      // Auto open popup for first marker
      if (index === 0 && markerData.popup) {
        marker.openPopup();
      }
    });

    // Update view jika center berubah
    map.setView(center, zoom);

    // Tambahkan event listener untuk interaksi
    const handleMapClick = (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      console.log(`Clicked at: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);
    };

    map.on('click', handleMapClick);

    // Cleanup function
    return () => {
      map.off('click', handleMapClick);
    };
  }, [center, zoom, markers, enableScrollWheelZoom, style, showLayerControl]);

  // Cleanup saat komponen unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-10" style={{ zIndex: 10 }}>
      <div 
        ref={mapRef} 
        style={{ height, zIndex: 10 }} 
        className={`w-full rounded-lg border-2 border-gray-200 ${className}`}
      />
      <style jsx global>{`
        /* Pastikan Leaflet tidak menutupi navbar */
        .leaflet-container {
          z-index: 10 !important;
        }
        
        .leaflet-control-container {
          z-index: 15 !important;
        }
        
        .leaflet-popup-pane {
          z-index: 20 !important;
        }
        
        .leaflet-tooltip-pane {
          z-index: 25 !important;
        }
        
        /* Google Maps style marker */
        .marker-pin {
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          background: #ea4335;
          position: absolute;
          transform: rotate(-45deg);
          left: 50%;
          top: 50%;
          margin: -20px 0 0 -20px;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        
        .marker-pin::after {
          content: '';
          width: 14px;
          height: 14px;
          margin: 8px 0 0 8px;
          background: #ffffff;
          position: absolute;
          border-radius: 50%;
        }
        
        .marker-icon {
          position: absolute;
          width: 22px;
          height: 22px;
          color: white;
          font-size: 12px;
          left: 4px;
          top: 4px;
          transform: rotate(45deg);
          text-align: center;
          line-height: 22px;
        }
        
        .marker-shadow {
          width: 35px;
          height: 16px;
          background: rgba(0,0,0,0.2);
          border-radius: 50%;
          position: absolute;
          left: 50%;
          bottom: -8px;
          margin-left: -17px;
          filter: blur(2px);
        }

        /* Custom popup styling */
        .custom-popup-google-style .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid #e5e7eb;
          padding: 0;
        }
        
        .custom-popup-google-style .leaflet-popup-content {
          margin: 0;
          padding: 12px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .custom-popup-google-style .leaflet-popup-tip {
          background: white;
          border: 1px solid #e5e7eb;
        }

        /* Custom tooltip */
        .custom-tooltip {
          background: rgba(0, 0, 0, 0.8) !important;
          color: white !important;
          border: none !important;
          border-radius: 4px !important;
          font-size: 12px !important;
          padding: 4px 8px !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
        }
        
        .custom-tooltip::before {
          border-top-color: rgba(0, 0, 0, 0.8) !important;
        }
        
        /* Layer control styling */
        .leaflet-control-layers {
          border-radius: 8px !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
          border: 1px solid #e5e7eb !important;
        }
        
        .leaflet-control-layers-toggle {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTFIMTNWMTNIM1YxMVpNMyA2SDIxVjhIM1Y2Wk0zIDE2SDE3VjE4SDNWMTZaIiBmaWxsPSIjMzc0MTUxIi8+Cjwvc3ZnPgo=') !important;
        }
        
        /* Zoom control styling */
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
        }
        
        .leaflet-control-zoom a {
          background-color: white !important;
          color: #374151 !important;
          border: 1px solid #e5e7eb !important;
          font-weight: bold !important;
          transition: all 0.2s ease !important;
          border-radius: 0 !important;
        }
        
        .leaflet-control-zoom a:hover {
          background-color: #f3f4f6 !important;
          color: #1f2937 !important;
        }
        
        .leaflet-control-zoom-in {
          border-radius: 4px 4px 0 0 !important;
        }
        
        .leaflet-control-zoom-out {
          border-radius: 0 0 4px 4px !important;
        }
        
        /* Scale control styling */
        .leaflet-control-scale-line {
          background: rgba(255, 255, 255, 0.8) !important;
          border: 2px solid #333 !important;
          border-radius: 4px !important;
          padding: 2px 5px 1px !important;
          font-size: 11px !important;
          color: #333 !important;
        }
      `}</style>
    </div>
  );
}
