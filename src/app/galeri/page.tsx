"use client";

import { useState } from "react";
import { Camera, Eye } from "lucide-react";
import { ImageKitImage } from "@/components/ImageKit";
import ImageModal from "@/components/ImageModal";

// Types
type PhotoType = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
};

// Konstanta untuk data galeri
const GALLERY_DATA = {
  title: "Galeri Desa Mekarjaya",
  subtitle:
    "Kumpulan foto-foto terbaik yang menampilkan keindahan dan potensi desa kami",
};

// Data foto untuk Penangkaran Burung Hantu
const FOTO_PENANGKARAN = [
  {
    id: 1,
    src: "/IMG_4941_8S97y4-aq.HEIC",
    alt: "Burung hantu di kandang penangkaran",
    title: "Kehidupan di Kandang Penangkaran",
    description:
      "Burung hantu yang sedang beristirahat dengan nyaman di kandang yang dirancang khusus untuk kenyamanan mereka",
    category: "penangkaran",
  },
  {
    id: 2,
    src: "/IMG-20250722-WA0039_tFPCVtEHj.jpg",
    alt: "Fasilitas penangkaran burung hantu",
    title: "Fasilitas Penangkaran Modern",
    description:
      "Fasilitas penangkaran yang dilengkapi dengan peralatan modern untuk perawatan burung hantu",
    category: "penangkaran",
  },
  {
    id: 3,
    src: "/IMG-20250722-WA0036_--Ik_udL6.jpg",
    alt: "Burung hantu sedang terbang",
    title: "Burung Hantu Terbang Bebas",
    description:
      "Momen indah burung hantu yang sedang terbang bebas di area penangkaran",
    category: "penangkaran",
  },
  {
    id: 4,
    src: "/IMG-20250722-WA0035_csMrDRdKK.jpg",
    alt: "Perawatan burung hantu oleh tim ahli",
    title: "Perawatan Profesional",
    description:
      "Tim ahli sedang melakukan perawatan rutin untuk menjaga kesehatan burung hantu",
    category: "penangkaran",
  },
  {
    id: 5,
    src: "/IMG-20250722-WA0043_wDppbN3NR.jpg",
    alt: "Suasana penangkaran burung hantu",
    title: "Suasana Penangkaran",
    description:
      "Suasana tenang dan nyaman di area penangkaran burung hantu yang asri",
    category: "penangkaran",
  },
];

// Data foto untuk Kebun Mangga
const FOTO_KEBUN = [
  {
    id: 6,
    src: "/IMG_7825_b3GpwkUdZ.HEIC",
    alt: "Kebun mangga dengan teknik tabulampot",
    title: "Teknik Tabulampot Inovatif",
    description:
      "Implementasi teknik tabulampot untuk memaksimalkan hasil panen di lahan terbatas",
    category: "kebun",
  },
  {
    id: 7,
    src: "/IMG_4970_oA6X6QnrX.HEIC",
    alt: "Buah mangga segar di pohon",
    title: "Mangga Segar di Pohon",
    description:
      "Buah mangga yang segar dan matang sempurna siap untuk dipanen",
    category: "kebun",
  },
  {
    id: 8,
    src: "/IMG_20250722_085244_1_koPe3SS4z.jpg",
    alt: "Proses perawatan tanaman mangga",
    title: "Perawatan Tanaman Mangga",
    description:
      "Proses perawatan intensif tanaman mangga untuk hasil yang optimal",
    category: "kebun",
  },
  {
    id: 9,
    src: "/WhatsApp%20Image%202025-08-28%20at%205.04.58%20PM%20(1)__wt3cJJw3.jpeg",
    alt: "Kebun mangga yang subur dan hijau",
    title: "Hamparan Hijau Kebun Mangga",
    description:
      "Pemandangan kebun mangga yang subur dan hijau menghiasi desa Mekarjaya",
    category: "kebun",
  },
  {
    id: 10,
    src: "/WhatsApp%20Image%202025-08-28%20at%205.04.58%20PM_hDA81v1lm.jpeg",
    alt: "Hasil panen mangga berkualitas tinggi",
    title: "Hasil Panen Berkualitas",
    description:
      "Hasil panen mangga berkualitas tinggi yang siap untuk dipasarkan",
    category: "kebun",
  },
];

// Komponen terpisah untuk optimasi
const HeroSection = () => (
  <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center mb-4">
        <Camera className="h-12 w-12 mr-4" />
        <h1 className="text-4xl md:text-5xl font-bold">{GALLERY_DATA.title}</h1>
      </div>
      <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
        {GALLERY_DATA.subtitle}
      </p>
    </div>
  </section>
);

const FilterTabs = ({
  selectedAlbum,
  onAlbumChange,
  allPhotos,
  fotoPenangkaran,
  fotoKebun,
}: {
  selectedAlbum: "all" | "penangkaran" | "kebun";
  onAlbumChange: (album: "all" | "penangkaran" | "kebun") => void;
  allPhotos: PhotoType[];
  fotoPenangkaran: PhotoType[];
  fotoKebun: PhotoType[];
}) => (
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    <button
      onClick={() => onAlbumChange("all")}
      className={`px-6 py-3 rounded-full font-medium transition-all ${
        selectedAlbum === "all"
          ? "bg-green-600 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-100 border"
      }`}
    >
      Semua Foto ({allPhotos.length})
    </button>
    <button
      onClick={() => onAlbumChange("penangkaran")}
      className={`px-6 py-3 rounded-full font-medium transition-all ${
        selectedAlbum === "penangkaran"
          ? "bg-green-600 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-100 border"
      }`}
    >
      Penangkaran Burung Hantu ({fotoPenangkaran.length})
    </button>
    <button
      onClick={() => onAlbumChange("kebun")}
      className={`px-6 py-3 rounded-full font-medium transition-all ${
        selectedAlbum === "kebun"
          ? "bg-green-600 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-100 border"
      }`}
    >
      Kebun Mangga ({fotoKebun.length})
    </button>
  </div>
);

const PhotoGrid = ({
  photos,
  onImageClick,
}: {
  photos: PhotoType[];
  onImageClick: (photo: PhotoType) => void;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {photos.map((photo) => (
      <div
        key={photo.id}
        className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => onImageClick(photo)}
      >
        <div className="aspect-w-16 aspect-h-12 relative h-64">
          <ImageKitImage
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            transformation={[
              {
                quality: 85,
                format: "webp",
              },
            ]}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Badge kategori */}
          <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {photo.category}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<
    "all" | "penangkaran" | "kebun"
  >("all");

  const allPhotos = [...FOTO_PENANGKARAN, ...FOTO_KEBUN];

  const getFilteredPhotos = () => {
    switch (selectedAlbum) {
      case "penangkaran":
        return FOTO_PENANGKARAN;
      case "kebun":
        return FOTO_KEBUN;
      default:
        return allPhotos;
    }
  };

  const filteredPhotos = getFilteredPhotos();

  const openImageModal = (photo: (typeof allPhotos)[0]) => {
    setSelectedImage({
      src: photo.src,
      alt: photo.alt,
      title: photo.title,
      description: photo.description,
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterTabs
          selectedAlbum={selectedAlbum}
          onAlbumChange={setSelectedAlbum}
          allPhotos={allPhotos}
          fotoPenangkaran={FOTO_PENANGKARAN}
          fotoKebun={FOTO_KEBUN}
        />

        <PhotoGrid photos={filteredPhotos} onImageClick={openImageModal} />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          src={selectedImage.src}
          alt={selectedImage.alt}
          title={selectedImage.title}
          description={selectedImage.description}
        />
      )}
    </div>
  );
}
