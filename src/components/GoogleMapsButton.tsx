'use client';

import { ExternalLink } from "lucide-react";

interface GoogleMapsButtonProps {
  latitude: number;
  longitude: number;
  className?: string;
}

export default function GoogleMapsButton({ latitude, longitude, className = "" }: GoogleMapsButtonProps) {
  const handleClick = () => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className={`text-blue-600 hover:text-blue-700 text-sm flex items-center transition-colors ${className}`}
    >
      <ExternalLink className="w-4 h-4 mr-1" />
      Buka di Google Maps
    </button>
  );
}
