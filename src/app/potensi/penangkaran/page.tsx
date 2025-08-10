"use client"

// import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { burungHantuData } from "@/data/burungHantu"

export default function PenangkaranPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const statistikDampak = [
    {
      angka: "75%",
      label: "Penggunaan Pestisida Turun",
      icon: "🌱"
    },
    {
      angka: "40%",
      label: "Hasil Panen Meningkat", 
      icon: "🌾"
    },
    {
      angka: "95%",
      label: "Hama Tikus Terkendali",
      icon: "🎯"
    },
    {
      angka: "100+",
      label: "Petani Terbantu",
      icon: "👨‍🌾"
    }
  ]

  const fasilitasPenangkaran = [
    {
      nama: "Kandang Karantina",
      deskripsi: "Ruang isolasi untuk burung baru dan pemulihan burung yang sakit",
      gambar: "/images/fasilitas/kandang-karantina.jpg"
    },
    {
      nama: "Rumah Burung Dewasa",
      deskripsi: "Habitat semi-alami untuk burung hantu yang siap berkembang biak",
      gambar: "/images/fasilitas/rumah-burung.jpg"
    },
    {
      nama: "Area Pelatihan Terbang",
      deskripsi: "Ruang terbuka untuk melatih kemampuan terbang burung muda",
      gambar: "/images/fasilitas/area-terbang.jpg"
    },
    {
      nama: "Laboratorium Mini",
      deskripsi: "Fasilitas pemeriksaan kesehatan dan penelitian perilaku burung",
      gambar: "/images/fasilitas/laboratorium.jpg"
    }
  ]

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
              &quot;Dari masalah hama menjadi harmoni alam - inilah cerita bagaimana burung hantu mengubah cara kami bertani&quot;
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
            <p className="text-lg text-gray-600">Sejarah lahirnya solusi inovatif</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">🚨 Tantangan Awal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum laboriosam perferendis dolorem. Repellat ducimus dolorem provident. Ab obcaecati distinctio iste assumenda? Natus error aliquam tenetur deleniti dolor doloribus, veritatis architecto!
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">💡 Inspirasi Solusi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, unde pariatur? Facilis eligendi hic alias dicta quas. Inventore eveniet molestiae similique temporibus ea consectetur, cum minus assumenda? Iusto qui quos corrupti. Harum facere nisi consequatur maxime ducimus ullam omnis obcaecati.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-400 h-96 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white text-lg font-medium">Timeline Pengembangan Penangkaran</span>
            </div>
          </div>
          
          <div className="mt-12 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              🌟 Kelahiran Program Penangkaran
            </h3>
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae labore accusantium saepe eos natus nam, alias sunt quaerat distinctio reprehenderit quos unde id vitae maxime est nobis autem necessitatibus nihil ipsum, ut molestiae! Atque, veritatis. Nostrum assumenda numquam accusantium dolore.
            </p>
          </div>
        </section>

        {/* Sub-Bagian 2: Kenali Spesies Kami */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Kenali Spesies Kami
            </h2>
            <p className="text-lg text-gray-600">Profil lengkap burung hantu di penangkaran</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {burungHantuData.map((burung, index) => (
              <div 
                key={burung.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedCard(selectedCard === burung.id ? null : burung.id)}
              >
                <div className="bg-gray-400 h-48 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Foto {burung.nama}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {burung.nama}
                  </h3>
                  <p className="text-gray-600 italic mb-3">
                    {burung.namaLatin}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {burung.deskripsi.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {burung.statusKonservasi}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Lihat Detail →
                    </button>
                  </div>
                  
                  {selectedCard === burung.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Karakteristik:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {burung.karakteristik.slice(0, 3).map((char, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href={`/potensi/penangkaran/${burung.id}`}
                        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                      >
                        Detail Lengkap
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sub-Bagian 3: Dampak Nyata di Persawahan */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Dampak Nyata di Persawahan
            </h2>
            <p className="text-lg text-gray-600">Pencapaian program yang terukur</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistikDampak.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.angka}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🌱 Manfaat Lingkungan</h3>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">💰 Manfaat Ekonomi</h3>
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
            <p className="text-lg text-gray-600">Manajemen dan operasional harian</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fasilitasPenangkaran.map((fasilitas, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-400 h-48 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{fasilitas.nama}</span>
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
          
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
              Rutinitas Perawatan Harian
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌅</div>
                <h4 className="font-semibold text-gray-800 mb-2">Pagi (06:00)</h4>
                <p className="text-gray-700 text-sm">
                  Pemeriksaan kesehatan, pembersihan kandang, dan persiapan makanan
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">☀️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Siang (12:00)</h4>
                <p className="text-gray-700 text-sm">
                  Monitoring suhu kandang, pengecekan sistem ventilasi
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌙</div>
                <h4 className="font-semibold text-gray-800 mb-2">Malam (18:00)</h4>
                <p className="text-gray-700 text-sm">
                  Pemberian makan utama, observasi perilaku nocturnal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-xl px-8 py-16 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bergabung dengan Revolusi Pertanian
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Ingin menerapkan sistem penangkaran burung hantu di desa Anda? 
            Kami siap berbagi pengalaman dan memberikan pelatihan.
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
  )
}
