'use client';

import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { ImageKitImage } from './ImageKit';
import { Slider } from '@/components/ui/slider';
import { useState, useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export default function ImageModal({ 
  isOpen, 
  onClose, 
  src, 
  alt, 
  title, 
  description 
}: ImageModalProps) {
  const [zoom, setZoom] = useState(1);

  // Reset zoom when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.25));
  };

  const handleSliderChange = (value: number[]) => {
    setZoom(value[0]);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] bg-black bg-opacity-90 animate-in fade-in-0 duration-200"
      onClick={handleBackdropClick}
    >
      {/* Header - Fixed at top */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 text-white bg-gradient-to-b from-black/80 via-black/50 to-transparent">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            {description && (
              <p className="text-sm text-gray-200 mt-2 max-w-2xl leading-relaxed">{description}</p>
            )}
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="p-3 bg-red-600 bg-opacity-90 hover:bg-opacity-100 rounded-lg transition-colors backdrop-blur-sm"
            title="Tutup"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Zoom Controls */}
        <div className="flex items-center space-x-4 bg-black/20 rounded-lg p-4 backdrop-blur-sm">
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
            disabled={zoom <= 0.25}
            title="Perkecil"
          >
            <ZoomOut className="w-4 h-4 text-white" />
          </button>
          
          <div className="flex-1 flex items-center space-x-3">
            <span className="text-xs text-gray-300 min-w-[30px]">25%</span>
            <Slider
              value={[zoom]}
              onValueChange={handleSliderChange}
              max={2}
              min={0.25}
              step={0.05}
              className="flex-1"
            />
            <span className="text-xs text-gray-300 min-w-[35px]">200%</span>
          </div>
          
          <span className="text-sm min-w-[60px] text-center font-medium bg-black/30 px-3 py-1 rounded-lg">
            {Math.round(zoom * 100)}%
          </span>
          
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
            disabled={zoom >= 2}
            title="Perbesar"
          >
            <ZoomIn className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Image Container - Full screen with scroll */}
      <div className="absolute inset-0 overflow-auto flex items-center justify-center px-6 py-8 pt-40 pb-20 scroll-smooth">
        <div 
          className="transition-transform duration-200 ease-out flex items-center justify-center"
          style={{ 
            transform: `scale(${zoom})`,
            transformOrigin: 'center',
            width: zoom > 1 ? 'max-content' : 'auto',
            height: zoom > 1 ? 'max-content' : 'auto'
          }}
        >
          <ImageKitImage
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className={`object-contain rounded-lg shadow-2xl ${
              zoom <= 1 ? 'max-w-full max-h-full' : 'max-w-none max-h-none'
            }`}
            transformation={[
              {
                quality: 95,
                format: 'webp'
              }
            ]}
          />
        </div>
      </div>

      {/* Instructions - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-gray-200 text-sm py-6 px-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm">
        <p className="leading-relaxed">
          Tekan <kbd className="px-3 py-1 bg-gray-800/80 border border-gray-600 rounded text-xs font-medium">Esc</kbd> untuk menutup 
          atau klik di luar gambar • Gunakan tombol zoom untuk memperbesar/memperkecil gambar
        </p>
      </div>
    </div>
  );
}
