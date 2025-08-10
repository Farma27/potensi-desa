"use client"

// import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { pohonManggaData } from "@/data/pohonMangga"

export default function KebunManggaPage() {
  const [selectedMangga, setSelectedMangga] = useState<string | null>(null)

  const langkahTanam = [
    {
      step: 1,
      judul: "Persiapan Bibit",
      deskripsi: "Pemilihan bibit mangga unggul dengan tinggi 50-80 cm yang sudah berumur 6-8 bulan",
      detail: "Bibit dipilih dari varietas terbaik dengan sistem perakaran yang sehat dan bebas dari penyakit. Setiap bibit harus memiliki minimal 4-5 daun yang sempurna.",
      icon: "🌱"
    },
    {
      step: 2,
      judul: "Teknik Penanaman 2x1 Meter",
      deskripsi: "Penanaman dengan jarak tanam 2 meter antar baris dan 1 meter dalam baris",
      detail: "Lubang tanam berukuran 60x60x60 cm dengan campuran tanah, kompos, dan pupuk kandang. Teknik ini memungkinkan 5.000 pohon per hektar, 5x lebih banyak dari metode konvensional.",
      icon: "📏"
    },
    {
      step: 3,
      judul: "Pemangkasan Horizontal",
      deskripsi: "Pemangkasan cabang utama untuk membentuk tajuk horizontal yang kompak",
      detail: "Pemangkasan dilakukan saat pohon mencapai tinggi 1,5 meter. Cabang dipangkas membentuk sudut 45-60 derajat untuk memaksimalkan penetrasi cahaya dan memudahkan perawatan.",
      icon: "✂️"
    },
    {
      step: 4,
      judul: "Sistem Irigasi Tetes",
      deskripsi: "Instalasi sistem irigasi tetes untuk efisiensi air dan nutrisi",
      detail: "Setiap pohon mendapat supply air dan nutrisi yang konsisten melalui sistem tetes. Menghemat 60% penggunaan air dibanding metode konvensional.",
      icon: "💧"
    },
    {
      step: 5,
      judul: "Perawatan Akar Intensif",
      deskripsi: "Manajemen zona perakaran dengan mulching dan pemupukan tertarget",
      detail: "Area di sekitar pohon diberi mulch organik radius 1 meter. Pemupukan dilakukan melalui sistem fertigasi dengan dosis yang disesuaikan fase pertumbuhan.",
      icon: "🌿"
    },
    {
      step: 6,
      judul: "Monitoring Digital",
      deskripsi: "Penggunaan sensor untuk memantau kelembaban tanah dan suhu mikro",
      detail: "Setiap blok kebun dilengkapi sensor IoT untuk monitoring real-time. Data dianalisis untuk optimasi jadwal penyiraman dan pemupukan.",
      icon: "📱"
    }
  ]

  const keuntunganTeknik = [
    {
      aspek: "Produktivitas",
      konvensional: "40-60 kg/pohon",
      inovatif: "80-120 kg/pohon",
      peningkatan: "100%",
      icon: "📈"
    },
    {
      aspek: "Efisiensi Lahan",
      konvensional: "1.000 pohon/ha",
      inovatif: "5.000 pohon/ha",
      peningkatan: "400%",
      icon: "🏞️"
    },
    {
      aspek: "Penghematan Air",
      konvensional: "2.000 L/pohon/bulan",
      inovatif: "800 L/pohon/bulan",
      peningkatan: "60%",
      icon: "💧"
    },
    {
      aspek: "Waktu Perawatan",
      konvensional: "8 jam/hari/ha",
      inovatif: "3 jam/hari/ha",
      peningkatan: "62%",
      icon: "⏰"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            KEBUN MANGGA INOVATIF
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Revolusi Teknik Tanam Lahan Sempit untuk Produktivitas Maksimal
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto border border-white border-opacity-30">
            <p className="text-lg text-black font-medium">
              &quot;Dari 2 meter persegi menjadi sumber kehidupan - inilah inovasi yang mengubah paradigma pertanian mangga&quot;
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Sub-Bagian 1: Kisah di balik Teknik 2 Meter */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Kisah di balik Teknik 2 Meter
            </h2>
            <p className="text-lg text-gray-600">Filosofi dan inspirasi dibalik inovasi</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">🚧 Tantangan Lahan Sempit</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam unde dignissimos et. Reprehenderit distinctio, saepe a voluptas vel nulla dolore iste architecto odit mollitia incidunt consequatur harum fuga natus sit impedit modi!
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">💡 Inspirasi dari Jepang</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eligendi sit eaque ex doloribus nisi dicta, vitae in iste reiciendis odio corporis ipsam voluptatum omnis quam unde. Nemo totam optio repellat voluptas?
                </p>
              </div>
            </div>
            
            <div className="bg-gray-400 h-96 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white text-lg font-medium">Foto Pak Widodo di Kebun</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-orange-800 mb-6 text-center">
              🌟 Filosofi &quot;Dari Sedikit Menjadi Berlimpah&quot;
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-2">Efisiensi Maksimal</h4>
                <p className="text-gray-700 text-sm">
                  Setiap meter persegi lahan harus memberikan kontribusi produktif
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">Harmoni dengan Alam</h4>
                <p className="text-gray-700 text-sm">
                  Teknik yang ramah lingkungan dan berkelanjutan
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-semibold text-gray-800 mb-2">Knowledge Sharing</h4>
                <p className="text-gray-700 text-sm">
                  Berbagi ilmu untuk kemajuan petani lainnya
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Bagian 2: Panduan Teknik Tanam Lahan Sempit */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Panduan Teknik Tanam Lahan Sempit
            </h2>
            <p className="text-lg text-gray-600">Langkah-demi-langkah menerapkan inovasi</p>
          </div>
          
          <div className="space-y-8">
            {langkahTanam.map((langkah, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{langkah.icon}</div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                            {langkah.step}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {langkah.judul}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">{langkah.deskripsi}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{langkah.detail}</p>
                  </div>
                  <div className="bg-gray-400 h-64 lg:h-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Ilustrasi {langkah.judul}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">
              📊 Perbandingan Hasil: Konvensional vs Inovatif
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keuntunganTeknik.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{item.aspek}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="text-red-600">
                      <span className="font-medium">Lama:</span> {item.konvensional}
                    </div>
                    <div className="text-green-600">
                      <span className="font-medium">Baru:</span> {item.inovatif}
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">
                      +{item.peningkatan}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-Bagian 3: Ragam Mangga Unggulan Mekarjaya */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Ragam Mangga Unggulan Mekarjaya
            </h2>
            <p className="text-lg text-gray-600">Koleksi varietas terbaik dengan teknik inovatif</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pohonManggaData.map((mangga, index) => (
              <div 
                key={mangga.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gray-400 h-64 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Foto {mangga.nama}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {mangga.nama}
                    </h3>
                    <p className="text-gray-600 italic mb-3 text-sm">
                      {mangga.namaLatin}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-2">🎨</span>
                        <span className="text-sm text-gray-700">{mangga.karakteristik.warnaBuah}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-red-500 mr-2">😋</span>
                        <span className="text-sm text-gray-700">{mangga.karakteristik.rasaBuah}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">📏</span>
                        <span className="text-sm text-gray-700">{mangga.karakteristik.ukuranBuah}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Produktivitas:</span>
                        <span className="text-sm text-green-600 font-semibold">
                          {mangga.musimBerbuah.produktivitas}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Musim Panen:</span>
                        <span className="text-sm text-blue-600">
                          {mangga.musimBerbuah.periode}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedMangga(selectedMangga === mangga.id ? null : mangga.id)}
                      className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                    >
                      {selectedMangga === mangga.id ? 'Tutup Detail' : 'Lihat Detail'}
                    </button>
                    
                    {selectedMangga === mangga.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Keunggulan Ekonomi:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {mangga.manfaat.ekonomi.slice(0, 3).map((manfaat, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {manfaat}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3">
                          <span className="text-sm font-medium text-gray-700">Harga Lokal: </span>
                          <span className="text-orange-600 font-semibold text-sm">{mangga.pasar.hargaLokal}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sub-Bagian 4: Manfaat dan Potensi */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Manfaat dan Potensi Masa Depan
            </h2>
            <p className="text-lg text-gray-600">Dampak positif dan visi pengembangan</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <span className="mr-2">🌍</span>
                  Dampak Lingkungan
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Efisiensi penggunaan air hingga 60%
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Mengurangi erosi tanah dengan sistem akar yang rapat
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Penyerapan karbon 5x lebih banyak per hektar
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Habitat yang lebih baik untuk serangga penyerbuk
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                  <span className="mr-2">👥</span>
                  Dampak Sosial Ekonomi
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Meningkatkan pendapatan petani 300-400%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Menciptakan lapangan kerja baru di bidang agritech
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Membuka peluang ekspor dan pasar premium
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Menginspirasi inovasi pertanian di desa lain
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-orange-800 mb-6">
                🚀 Visi 2030: Pusat Inovasi Pertanian
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">🎯</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Target Adopsi</h4>
                    <p className="text-gray-700 text-sm">1.000 petani di 50 desa menerapkan teknik ini</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">🏢</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pusat Pelatihan</h4>
                    <p className="text-gray-700 text-sm">Membangun training center untuk petani nasional dan internasional</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">🔬</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Research & Development</h4>
                    <p className="text-gray-700 text-sm">Kerjasama dengan universitas untuk penelitian lanjutan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">🌐</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Digital Platform</h4>
                    <p className="text-gray-700 text-sm">Aplikasi monitoring dan konsultasi online untuk petani</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              📈 Proyeksi Dampak dalam 5 Tahun
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-700 text-sm">Desa Adopsi</div>
              </div>
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="text-3xl font-bold text-green-600 mb-2">1,000</div>
                <div className="text-gray-700 text-sm">Petani Terlatih</div>
              </div>
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">500%</div>
                <div className="text-gray-700 text-sm">Peningkatan Produktivitas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Rp 50M</div>
                <div className="text-gray-700 text-sm">Tambahan Pendapatan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl px-8 py-16 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Jadilah Bagian dari Revolusi Pertanian
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Ingin mempelajari dan menerapkan Teknik 2 Meter di kebun Anda? 
            Bergabunglah dengan komunitas petani inovatif Mekarjaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontak" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Konsultasi Gratis
            </Link>
            <Link 
              href="/wisata" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              Kunjungi Kebun
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
