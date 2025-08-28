"use client";

import Link from "next/link";
import { ImageKitImage } from "@/components/ImageKit";
import ImageModal from "@/components/ImageModal";
import { useState } from "react";
import { Eye } from "lucide-react";

// Konstanta untuk data statis
const HERO_CONTENT = {
  title: "PENANGKARAN BURUNG HANTU",
  subtitle: "Solusi Inovatif untuk Pertanian Berkelanjutan di Desa Mekarjaya",
  quote: "Dari masalah hama menjadi harmoni alam - inilah cerita bagaimana burung hantu mengubah cara kami bertani",
};

const PROBLEM_SOLUTION = {
  sectionTitle: "Dari Hama menjadi Harmoni",
  sectionSubtitle: "Sejarah lahirnya solusi inovatif",
  challenge: {
    title: "Tantangan Awal",
    description: "Desa Mekarjaya menghadapi masalah serius dengan hama tikus yang merusak tanaman padi. Petani menghabiskan banyak uang untuk pestisida kimia, namun hasilnya tidak memuaskan. Kerusakan panen mencapai 30% setiap musim, mengancam ketahanan pangan desa.",
  },
  solution: {
    title: "Inspirasi Solusi",
    description: "Untuk mengatasi masalah ini, Desa Mekarjaya mengadopsi pendekatan inovatif dengan melibatkan burung hantu sebagai predator alami hama tikus. Program penangkaran burung hantu diluncurkan untuk meningkatkan populasi burung hantu di sekitar area persawahan.",
  },
};

const IMPACT_STATS = {
  title: "Dampak Nyata di Persawahan",
  subtitle: "Pencapaian program yang terukur",
  stats: [
    {
      angka: "75%",
      label: "Penggunaan Pestisida Turun",
      icon: "🌱",
    },
    {
      angka: "40%",
      label: "Hasil Panen Meningkat",
      icon: "🌾",
    },
    {
      angka: "95%",
      label: "Hama Tikus Terkendali",
      icon: "🎯",
    },
    {
      angka: "100+",
      label: "Petani Terbantu",
      icon: "👨‍🌾",
    },
  ],
  benefits: {
    environment: {
      title: "Manfaat Lingkungan",
      items: [
        "Berkurangnya pencemaran tanah dan air dari pestisida",
        "Meningkatnya biodiversitas di area persawahan",
        "Terjaganya keseimbangan rantai makanan alami",
      ],
    },
    economy: {
      title: "Manfaat Ekonomi",
      items: [
        "Penghematan biaya pestisida hingga 80%",
        "Peningkatan kualitas dan harga jual beras organik",
        "Membuka peluang ekowisata dan edukasi",
      ],
    },
  },
};

const FACILITIES_DATA = {
  title: "Di Balik Layar Penangkaran",
  items: [
    {
      nama: "Kandang Karantina",
      deskripsi: "Ruang isolasi untuk burung baru dan pemulihan burung yang sakit",
      gambar: "/Tempat-Karantina.jpg",
    },
    {
      nama: "Rumah Burung Dewasa",
      deskripsi: "Habitat semi-alami untuk burung hantu yang siap berkembang biak",
      gambar: "/rumah-burung-hantu.jpg",
    },
  ],
};

const CTA_CONTENT = {
  title: "Bergabung dengan Revolusi Pertanian",
  description: "Ingin menerapkan sistem penangkaran burung hantu di desa Anda? Kami siap berbagi pengalaman dan memberikan pelatihan.",
  primaryButton: {
    text: "Hubungi Kami",
    href: "/kontak",
  },
  secondaryButton: {
    text: "Kunjungi Penangkaran",
    href: "/kontak",
  },
};

// Komponen terpisah untuk optimasi
const HeroSection = () => (
  <section className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        {HERO_CONTENT.title}
      </h1>
      <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
        {HERO_CONTENT.subtitle}
      </p>
      <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto border border-white border-opacity-30">
        <p className="text-lg text-black font-medium">
          &quot;{HERO_CONTENT.quote}&quot;
        </p>
      </div>
    </div>
  </section>
);

const ProblemSolutionSection = () => (
  <section className="mb-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        {PROBLEM_SOLUTION.sectionTitle}
      </h2>
      <p className="text-lg text-gray-600">
        {PROBLEM_SOLUTION.sectionSubtitle}
      </p>
    </div>

    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-500">
          <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
            🚨 <span className="ml-2">{PROBLEM_SOLUTION.challenge.title}</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {PROBLEM_SOLUTION.challenge.description}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
            💡 <span className="ml-2">{PROBLEM_SOLUTION.solution.title}</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {PROBLEM_SOLUTION.solution.description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ImpactStatsSection = () => (
  <section className="mb-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        {IMPACT_STATS.title}
      </h2>
      <p className="text-lg text-gray-600">
        {IMPACT_STATS.subtitle}
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {IMPACT_STATS.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stat.angka}
            </div>
            <div className="text-gray-700 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          🌱 {IMPACT_STATS.benefits.environment.title}
        </h3>
        <ul className="space-y-2 text-gray-700">
          {IMPACT_STATS.benefits.environment.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          💰 {IMPACT_STATS.benefits.economy.title}
        </h3>
        <ul className="space-y-2 text-gray-700">
          {IMPACT_STATS.benefits.economy.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-2">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const FacilitiesSection = ({ onImageClick }: { onImageClick: (facility: typeof FACILITIES_DATA.items[0]) => void }) => (
  <section className="mb-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        {FACILITIES_DATA.title}
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {FACILITIES_DATA.items.map((fasilitas, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden group"
        >
          <div className="h-80 overflow-hidden relative cursor-pointer group-hover:shadow-lg transition-shadow duration-300">
            <ImageKitImage
              src={fasilitas.gambar}
              alt={fasilitas.nama}
              width={400}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              transformation={[
                {
                  quality: 85,
                  format: "webp",
                },
              ]}
              loading="lazy"
            />
            <div 
              className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
              onClick={() => onImageClick(fasilitas)}
            >
              <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                <div className="bg-white bg-opacity-95 rounded-full p-4 shadow-xl border-2 border-white">
                  <Eye className="w-8 h-8 text-gray-700" />
                </div>
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Fasilitas
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {fasilitas.nama}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {fasilitas.deskripsi}
            </p>
            <button
              onClick={() => onImageClick(fasilitas)}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md"
            >
              <Eye className="w-4 h-4 mr-2" />
              Lihat Gambar Penuh
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-xl px-8 py-16 text-white">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
      {CTA_CONTENT.title}
    </h2>
    <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
      {CTA_CONTENT.description}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href={CTA_CONTENT.primaryButton.href}
        className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
      >
        {CTA_CONTENT.primaryButton.text}
      </Link>
      <Link
        href={CTA_CONTENT.secondaryButton.href}
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
      >
        {CTA_CONTENT.secondaryButton.text}
      </Link>
    </div>
  </section>
);

export default function PenangkaranPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);

  const openImageModal = (fasilitas: typeof FACILITIES_DATA.items[0]) => {
    setSelectedImage({
      src: fasilitas.gambar,
      alt: fasilitas.nama,
      title: fasilitas.nama,
      description: fasilitas.deskripsi
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProblemSolutionSection />
        <ImpactStatsSection />
        <FacilitiesSection onImageClick={openImageModal} />
        <CTASection />
      </div>

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
