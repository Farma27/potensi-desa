"use client"

import Image from "next/image"
import { useState } from "react"
import { X, Camera, Eye } from "lucide-react"

const GaleriPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlbum, setSelectedAlbum] = useState<'all' | 'penangkaran' | 'kebun'>('all')

  // Data foto untuk Penangkaran Burung Hantu
  const fotoPenangkaran = [
    {
      id: 1,
      src: "/images/gallery/penangkaran-1.jpg",
      alt: "Burung hantu sedang beristirahat di kandang",
      title: "Kehidupan Tenang di Kandang",
      description: "Burung hantu sedang beristirahat dengan nyaman di kandang yang dirancang khusus"
    },
    {
      id: 2,
      src: "/images/gallery/penangkaran-2.jpg", 
      alt: "Proses pemberian makan burung hantu",
      title: "Waktu Makan Siang",
      description: "Perawat sedang memberikan makanan segar untuk burung hantu peliharaan"
    },
    {
      id: 3,
      src: "/images/gallery/penangkaran-3.jpg",
      alt: "Burung hantu terbang bebas di area terbuka",
      title: "Terbang Bebas",
      description: "Burung hantu dilatih terbang bebas di area terbuka penangkaran"
    },
    {
      id: 4,
      src: "/images/gallery/penangkaran-4.jpg",
      alt: "Anak-anak burung hantu yang baru menetas",
      title: "Generasi Baru",
      description: "Anak-anak burung hantu yang baru menetas sedang dirawat dengan penuh kasih sayang"
    },
    {
      id: 5,
      src: "/images/gallery/penangkaran-5.jpg",
      alt: "Kandang modern untuk burung hantu",
      title: "Kandang Modern",
      description: "Fasilitas kandang modern yang dilengkapi dengan teknologi terkini"
    },
    {
      id: 6,
      src: "/images/gallery/penangkaran-6.jpg",
      alt: "Wisatawan mengamati burung hantu",
      title: "Edukasi Wisatawan",
      description: "Wisatawan sedang mengamati dan mempelajari perilaku burung hantu"
    }
  ]

  // Data foto untuk Kebun Mangga
  const fotoKebun = [
    {
      id: 7,
      src: "/images/gallery/kebun-1.jpg",
      alt: "Kebun mangga dengan sistem irigasi modern",
      title: "Sistem Irigasi Modern",
      description: "Kebun mangga dengan sistem irigasi tetes yang efisien dan ramah lingkungan"
    },
    {
      id: 8,
      src: "/images/gallery/kebun-2.jpg",
      alt: "Buah mangga yang sedang matang di pohon",
      title: "Mangga Matang Sempurna",
      description: "Buah mangga yang sedang matang dengan warna dan bentuk yang sempurna"
    },
    {
      id: 9,
      src: "/images/gallery/kebun-3.jpg",
      alt: "Petani sedang merawat tanaman mangga",
      title: "Perawatan Intensif",
      description: "Petani lokal sedang melakukan perawatan intensif pada tanaman mangga"
    },
    {
      id: 10,
      src: "/images/gallery/kebun-4.jpg",
      alt: "Proses panen mangga oleh petani",
      title: "Musim Panen Tiba",
      description: "Petani sedang melakukan panen mangga dengan teknik yang tepat"
    },
    {
      id: 11,
      src: "/images/gallery/kebun-5.jpg",
      alt: "Varietas mangga unggulan dari kebun",
      title: "Varietas Unggulan",
      description: "Berbagai varietas mangga unggulan hasil inovasi kebun Mekarjaya"
    },
    {
      id: 12,
      src: "/images/gallery/kebun-6.jpg",
      alt: "Suasana hijau kebun mangga dari atas",
      title: "Hamparan Hijau",
      description: "Pemandangan hijau kebun mangga dari ketinggian yang memukau mata"
    }
  ]

  const allPhotos = [...fotoPenangkaran, ...fotoKebun]

  const getFilteredPhotos = () => {
    switch (selectedAlbum) {
      case 'penangkaran':
        return fotoPenangkaran
      case 'kebun':
        return fotoKebun
      default:
        return allPhotos
    }
  }

  const filteredPhotos = getFilteredPhotos()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Galeri Desa Mekarjaya</h1>
          </div>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            Kumpulan foto-foto terbaik yang menampilkan keindahan dan potensi desa kami
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedAlbum('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedAlbum === 'all'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border'
            }`}
          >
            Semua Foto ({allPhotos.length})
          </button>
          <button
            onClick={() => setSelectedAlbum('penangkaran')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedAlbum === 'penangkaran'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border'
            }`}
          >
            Kehidupan di Penangkaran ({fotoPenangkaran.length})
          </button>
          <button
            onClick={() => setSelectedAlbum('kebun')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedAlbum === 'kebun'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border'
            }`}
          >
            Hijau Kebun Mangga ({fotoKebun.length})
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {photo.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal untuk melihat foto fullscreen */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Foto fullscreen"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default GaleriPage
