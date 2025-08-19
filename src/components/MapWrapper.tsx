'use client';

import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
      <div className="text-center text-gray-500">
        <MapPin className="w-12 h-12 mx-auto mb-4" />
        <p className="text-lg font-semibold">Memuat Peta...</p>
      </div>
    </div>
  )
});

interface MapWrapperProps {
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

export default function MapWrapper(props: MapWrapperProps) {
  return <Map {...props} />;
}
