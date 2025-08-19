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
        attribution: '',
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

    // Tambahkan marker dengan ikon default atau custom
    markers.forEach((markerData, index) => {
      // Gunakan ikon default Leaflet yang sudah terbukti bekerja
      const marker = L.marker(markerData.position);
      
      if (markerData.popup) {
        marker.bindPopup(markerData.popup, {
          maxWidth: 300,
          minWidth: 200,
          className: 'custom-popup-google-style',
          closeButton: true,
          autoPan: true,
          keepInView: true,
          autoClose: false,
          closeOnEscapeKey: true
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
      
      // Tambahkan event listener khusus untuk marker click
      marker.on('click', function() {
        console.log('Marker clicked:', markerData.title);
        if (markerData.popup) {
          marker.openPopup();
        }
      });

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
    <div className="relative" style={{ position: 'relative' }}>
      <div 
        ref={mapRef} 
        style={{ height, position: 'relative', zIndex: 1 }} 
        className={`w-full rounded-lg border-2 border-gray-200 ${className}`}
      />
      <style jsx global>{`
        /* Pastikan Leaflet tidak menutupi navbar dan popup terlihat */
        .leaflet-container {
          z-index: 1 !important;
        }
        
        .leaflet-control-container {
          z-index: 100 !important;
        }
        
        .leaflet-popup-pane {
          z-index: 1000 !important;
        }
        
        .leaflet-tooltip-pane {
          z-index: 1001 !important;
        }
        
        .leaflet-marker-pane {
          z-index: 500 !important;
        }
        
        .leaflet-overlay-pane {
          z-index: 400 !important;
        }
        
        /* Google Maps style marker - Enhanced */
        .custom-marker-google-style .marker-pin {
          width: 30px !important;
          height: 30px !important;
          border-radius: 50% 50% 50% 0 !important;
          background: #ea4335 !important;
          position: absolute !important;
          transform: rotate(-45deg) !important;
          left: 50% !important;
          top: 50% !important;
          margin: -20px 0 0 -20px !important;
          border: 3px solid #ffffff !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
        }
        
        .custom-marker-google-style .marker-pin::after {
          content: '' !important;
          width: 14px !important;
          height: 14px !important;
          margin: 8px 0 0 8px !important;
          background: #ffffff !important;
          position: absolute !important;
          border-radius: 50% !important;
        }
        
        .custom-marker-google-style .marker-icon {
          position: absolute !important;
          width: 22px !important;
          height: 22px !important;
          color: white !important;
          font-size: 12px !important;
          left: 4px !important;
          top: 4px !important;
          transform: rotate(45deg) !important;
          text-align: center !important;
          line-height: 22px !important;
        }
        
        .custom-marker-google-style .marker-shadow {
          width: 35px !important;
          height: 16px !important;
          background: rgba(0,0,0,0.2) !important;
          border-radius: 50% !important;
          position: absolute !important;
          left: 50% !important;
          bottom: -8px !important;
          margin-left: -17px !important;
          filter: blur(2px) !important;
        }

        /* Custom popup styling */
        .custom-popup-google-style {
          z-index: 1000 !important;
        }
        
        .custom-popup-google-style .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid #e5e7eb;
          padding: 0;
          background: white;
          z-index: 1000 !important;
        }
        
        .custom-popup-google-style .leaflet-popup-content {
          margin: 0;
          padding: 12px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          min-width: 180px;
        }
        
        .custom-popup-google-style .leaflet-popup-tip {
          background: white;
          border: 1px solid #e5e7eb;
          z-index: 1000 !important;
        }
        
        .leaflet-popup {
          z-index: 1000 !important;
          pointer-events: auto !important;
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
