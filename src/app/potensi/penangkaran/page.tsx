"use client";

// import Image from "next/image"
import Link from "next/link";
import { ImageKitImage } from "@/components/ImageKit";

export default function PenangkaranPage() {
  const statistikDampak = [
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
  ];

  const fasilitasPenangkaran = [
    {
      nama: "Kandang Karantina",
      deskripsi:
        "Ruang isolasi untuk burung baru dan pemulihan burung yang sakit",
      gambar: "/Tempat-Karantina.jpg",
    },
    {
      nama: "Rumah Burung Dewasa",
      deskripsi:
        "Habitat semi-alami untuk burung hantu yang siap berkembang biak",
      gambar: "/images/fasilitas/rumah-burung.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            PENANGKARAN BURUNG HANTU
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Solusi Inovatif untuk Pertanian Berkelanjutan di Desa Mekarjaya
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto border border-white border-opacity-30">
            <p className="text-lg text-black font-medium">
              &quot;Dari masalah hama menjadi harmoni alam - inilah cerita
              bagaimana burung hantu mengubah cara kami bertani&quot;
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sub-Bagian 1: Dari Hama menjadi Harmoni */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Dari Hama menjadi Harmoni
            </h2>
            <p className="text-lg text-gray-600">
              Sejarah lahirnya solusi inovatif
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  🚨 Tantangan Awal
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  laboriosam perferendis dolorem. Repellat ducimus dolorem
                  provident. Ab obcaecati distinctio iste assumenda? Natus error
                  aliquam tenetur deleniti dolor doloribus, veritatis
                  architecto!
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  💡 Inspirasi Solusi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                  unde pariatur? Facilis eligendi hic alias dicta quas.
                  Inventore eveniet molestiae similique temporibus ea
                  consectetur, cum minus assumenda? Iusto qui quos corrupti.
                  Harum facere nisi consequatur maxime ducimus ullam omnis
                  obcaecati.
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden">
              <ImageKitImage
                src="/Timeline.png"
                alt="Timeline Pengembangan Penangkaran Burung Hantu"
                width={600}
                height={400}
                className="w-full h-88 object-cover rounded-lg shadow-lg"
                transformation={[
                  {
                    quality: 85,
                    format: "webp",
                  },
                ]}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Sub-Bagian 2: Dampak Nyata di Persawahan */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Dampak Nyata di Persawahan
            </h2>
            <p className="text-lg text-gray-600">
              Pencapaian program yang terukur
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistikDampak.map((stat, index) => (
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
                🌱 Manfaat Lingkungan
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Berkurangnya pencemaran tanah dan air dari pestisida
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Meningkatnya biodiversitas di area persawahan
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Terjaganya keseimbangan rantai makanan alami
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                💰 Manfaat Ekonomi
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Penghematan biaya pestisida hingga 80%
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Peningkatan kualitas dan harga jual beras organik
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Membuka peluang ekowisata dan edukasi
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sub-Bagian 4: Di Balik Layar Penangkaran */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Di Balik Layar Penangkaran
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fasilitasPenangkaran.map((fasilitas, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <ImageKitImage
                    src={fasilitas.gambar}
                    alt={fasilitas.nama}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    transformation={[
                      {
                        quality: 85,
                        format: "webp",
                      },
                    ]}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {fasilitas.nama}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {fasilitas.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-xl px-8 py-16 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bergabung dengan Revolusi Pertanian
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Ingin menerapkan sistem penangkaran burung hantu di desa Anda? Kami
            siap berbagi pengalaman dan memberikan pelatihan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/wisata"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Kunjungi Penangkaran
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
