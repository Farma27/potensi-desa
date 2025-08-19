"use client"

// import Image from "next/image"
import Link from "next/link"

export default function KebunManggaPage() {
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
              Kisah di balik Teknik UHDP (Ultra High Density Planting)
            </h2>
            <p className="text-lg text-gray-600">Filosofi dan inspirasi dibalik inovasi</p>
          </div>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">🚧 Tantangan Lahan Sempit</h3>
                <p className="text-gray-700 leading-relaxed">
                  Desa Mekarjaya memiliki lahan pertanian yang terbatas, namun potensi alamnya sangat besar. 
                  Dengan teknik penanaman mangga yang inovatif, petani dapat memaksimalkan hasil panen 
                  meskipun hanya menggunakan lahan seluas 2 meter persegi.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">💡 Inspirasi dari Jepang</h3>
                <p className="text-gray-700 leading-relaxed">
                  Teknik penanaman mangga yang inovatif ini terinspirasi dari metode pertanian di Jepang, 
                  di mana lahan sempit dimanfaatkan secara maksimal dengan sistem tanam vertikal dan 
                  pemangkasan yang tepat. Hal ini memungkinkan petani untuk meningkatkan produktivitas 
                  tanpa perlu memperluas lahan pertanian.
                </p>
              </div>
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

        {/* Sub-Bagian 2: Manfaat dan Potensi */}
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
