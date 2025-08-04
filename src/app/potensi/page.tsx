import Link from "next/link"

export default function PotensiPage() {
  const potensiItems = [
    {
      title: "Penangkaran Burung Hantu",
      description: "Solusi inovatif pengendalian hama alami yang mengubah cara bertani tradisional menjadi harmoni dengan alam",
      href: "/potensi/penangkaran",
      image: "/images/penangkaran-preview.jpg",
      color: "from-green-600 to-blue-600",
      stats: ["75% penggunaan pestisida turun", "40% hasil panen meningkat", "20+ pasang burung aktif"]
    },
    {
      title: "Kebun Mangga Inovatif", 
      description: "Teknik revolusioner '2 Meter' yang mengubah lahan sempit menjadi kebun produktif dengan hasil 5x lipat lebih banyak",
      href: "/potensi/kebun-mangga",
      image: "/images/kebun-mangga-preview.jpg", 
      color: "from-orange-600 to-yellow-600",
      stats: ["5.000 pohon/hektar", "100% peningkatan produktivitas", "60% penghematan air"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            POTENSI DESA MEKARJAYA
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Inovasi Berkelanjutan yang Mengubah Paradigma Pertanian
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto border border-white border-opacity-30">
            <p className="text-lg text-black font-medium">
              Temukan dua inovasi revolusioner yang telah mengangkat kesejahteraan petani dan menjadi inspirasi bagi desa-desa lainnya
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Potensi Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Dua Pilar Inovasi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Inovasi yang lahir dari kebutuhan nyata dan berkembang menjadi solusi berkelanjutan
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {potensiItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-64 bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <span className="text-white text-lg font-medium">Preview {item.title}</span>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-800 text-sm">Pencapaian Utama:</h4>
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {stat}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={item.href}
                    className={`inline-block w-full text-center bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300`}
                  >
                    Pelajari Selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Summary */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Dampak Kolektif Inovasi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-700">Petani Terbantu</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
                <div className="text-gray-700">Peningkatan Pendapatan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">75%</div>
                <div className="text-gray-700">Pengurangan Pestisida</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5x</div>
                <div className="text-gray-700">Efisiensi Lahan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Visi Masa Depan
            </h2>
            <p className="text-lg text-gray-600">Menjadi pusat inovasi pertanian berkelanjutan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Keberlanjutan</h3>
              <p className="text-gray-600">
                Mengembangkan praktik pertanian yang ramah lingkungan dan berkelanjutan untuk generasi mendatang
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kolaborasi</h3>
              <p className="text-gray-600">
                Membangun jaringan petani inovatif dan berbagi pengetahuan dengan desa-desa lain
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Inovasi</h3>
              <p className="text-gray-600">
                Terus mengembangkan teknologi dan metode baru untuk meningkatkan produktivitas pertanian
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-xl px-8 py-16 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bergabung dengan Revolusi Pertanian
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Pelajari inovasi kami dan temukan bagaimana Anda bisa menerapkannya di desa Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontak" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Konsultasi Gratis
            </Link>
            <Link 
              href="/wisata" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Kunjungi Desa Kami
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
