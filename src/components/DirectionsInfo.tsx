'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Car, Bus, Clock, ExternalLink } from "lucide-react";

interface DirectionsInfoProps {
  className?: string;
}

export default function DirectionsInfo({ className = '' }: DirectionsInfoProps) {
  const [selectedTransport, setSelectedTransport] = useState<'car' | 'bus'>('car');

  const transportOptions = {
    car: {
      icon: <Car className="w-5 h-5" />,
      label: "Kendaraan Pribadi",
      routes: [
        {
          from: "Jakarta",
          duration: "3 jam",
          distance: "140 km",
          route: "Jakarta → Tol Jagorawi → Bogor → Sukabumi → Cibadak",
          cost: "Tol: ~Rp 25.000, BBM: ~Rp 60.000"
        },
        {
          from: "Bandung",
          duration: "2 jam",
          distance: "80 km",
          route: "Bandung → Jl. Raya Bandung-Sukabumi → Cibadak",
          cost: "BBM: ~Rp 35.000"
        },
        {
          from: "Bogor",
          duration: "1,5 jam",
          distance: "60 km",
          route: "Bogor → Sukabumi → Cibadak",
          cost: "BBM: ~Rp 25.000"
        }
      ]
    },
    bus: {
      icon: <Bus className="w-5 h-5" />,
      label: "Transportasi Umum",
      routes: [
        {
          from: "Jakarta",
          duration: "4,5 jam",
          distance: "140 km",
          route: "Jakarta (Kampung Rambutan) → Terminal Sukabumi → Angkot ke Cibadak",
          cost: "Bus: Rp 30.000, Angkot: Rp 8.000"
        },
        {
          from: "Bandung",
          duration: "3,5 jam",
          distance: "80 km",
          route: "Bandung (Terminal Leuwi Panjang) → Terminal Sukabumi → Angkot ke Cibadak",
          cost: "Bus: Rp 20.000, Angkot: Rp 8.000"
        },
        {
          from: "Bogor",
          duration: "3 jam",
          distance: "60 km",
          route: "Bogor (Terminal Baranangsiang) → Terminal Sukabumi → Angkot ke Cibadak",
          cost: "Bus: Rp 15.000, Angkot: Rp 8.000"
        }
      ]
    }
  };

  const currentRoutes = transportOptions[selectedTransport].routes;

  const handleDirections = (from: string) => {
    const destination = "Cibadak, Sukabumi, Jawa Barat";
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&origin=${encodeURIComponent(from)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Navigation className="w-6 h-6 text-blue-600" />
            Panduan Perjalanan
          </CardTitle>
          <p className="text-gray-600 text-sm">
            Pilih jenis transportasi dan kota asal untuk mendapatkan panduan perjalanan ke Desa Mekarjaya
          </p>
        </CardHeader>
        <CardContent>
          {/* Transport Selection */}
          <div className="flex gap-2 mb-6">
            {Object.entries(transportOptions).map(([key, option]) => (
              <button
                key={key}
                onClick={() => setSelectedTransport(key as 'car' | 'bus')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  selectedTransport === key 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>

          {/* Routes Information */}
          <div className="space-y-4">
            {currentRoutes.map((route, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Dari {route.from}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {route.duration}
                        </span>
                        <span>{route.distance}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDirections(route.from)}
                    className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Rute
                  </button>
                </div>

                <div className="text-sm text-gray-600 mb-2">
                  <strong>Rute:</strong> {route.route}
                </div>

                <div className="text-sm text-gray-600">
                  <strong>Estimasi Biaya:</strong> {route.cost}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tips */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Tips Perjalanan:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Waktu terbaik berkunjung: pagi hari (08.00-10.00) untuk cuaca yang sejuk</li>
              <li>• Hindari hari libur nasional untuk menghindari kemacetan</li>
              <li>• Siapkan uang tunai untuk biaya parkir dan konsumsi lokal</li>
              <li>• Hubungi kami terlebih dahulu untuk memastikan ketersediaan tim pemandu</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
