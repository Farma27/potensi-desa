import { ImageKitImage } from "@/components/ImageKit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Desa Mekarjaya | Potensi Desa",
  description: "Pelajari tentang Desa Mekarjaya, desa inovatif yang menggabungkan tradisi dengan teknologi modern. Temukan cerita, visi, misi, dan profil narasumber kredible.",
  keywords: "Desa Mekarjaya, tentang desa, profil desa, visi misi desa, desa berkelanjutan, desa hijau inovatif",
  openGraph: {
    title: "Tentang Desa Mekarjaya | Potensi Desa",
    description: "Pelajari tentang Desa Mekarjaya, desa inovatif yang menggabungkan tradisi dengan teknologi modern.",
    images: ["/desa-mekarjaya-overview.webp"],
  },
};

export default function TentangPage() {
  const contributors = [
    {
      name: "Bapak Sutrisno",
      role: "Kepala Desa Mekarjaya",
      expertise: "Kepemimpinan dan Pengembangan Desa",
      description: "Memimpin Desa Mekarjaya selama 8 tahun dengan fokus pada pengembangan ekonomi lokal dan pelestarian lingkungan.",
      image: "/profile-kepala-desa.webp"
    },
    {
      name: "Ibu Sari Dewi",
      role: "Ketua Kelompok Tani Mangga",
      expertise: "Pertanian Berkelanjutan dan Inovasi",
      description: "Pelopor teknik budidaya mangga inovatif yang meningkatkan produktivitas hingga 40% dengan metode organik.",
      image: "/profile-ketua-tani.webp"
    },
    {
      name: "Bapak Ahmad Hidayat",
      role: "Koordinator Penangkaran Burung Hantu",
      expertise: "Konservasi Satwa dan Ekosistem",
      description: "Ahli konservasi dengan pengalaman 15 tahun dalam penangkaran dan rehabilitasi burung hantu untuk pengendalian hama alami.",
      image: "/profile-koordinator-burung.webp"
    },
    {
      name: "Ibu Ratna Sari",
      role: "Sekretaris Desa",
      expertise: "Administrasi dan Dokumentasi",
      description: "Bertanggung jawab dalam pendokumentasian dan koordinasi program-program pembangunan desa.",
      image: "/profile-sekretaris.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Desa Mekarjaya</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Mengenal lebih dekat desa inovatif yang menggabungkan tradisi dengan teknologi modern
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cerita Singkat Desa */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cerita Desa Mekarjaya</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Desa Mekarjaya terletak di lereng pegunungan yang subur, sekitar 45 km dari pusat kota. 
                  Dengan luas wilayah 1.247 hektar dan populasi sekitar 2.800 jiwa, desa ini telah menjadi 
                  contoh pembangunan berkelanjutan yang menginspirasi.
                </p>
                <p>
                  Sejak tahun 2015, Desa Mekarjaya mulai mengembangkan konsep &ldquo;Desa Hijau Inovatif&rdquo; yang 
                  mengintegrasikan pertanian modern dengan konservasi lingkungan. Keberhasilan program 
                  penangkaran burung hantu untuk pengendalian hama alami dan inovasi budidaya mangga organik 
                  telah mengangkat nama desa ini ke tingkat nasional.
                </p>
                <p>
                  Dengan semangat gotong royong yang kuat dan visi yang jelas, masyarakat Desa Mekarjaya 
                  terus berinovasi sambil melestarikan nilai-nilai tradisional yang telah diwariskan turun temurun.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageKitImage
                src="/desa-mekarjaya-overview.webp"
                alt="Pemandangan Desa Mekarjaya dari udara"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-80 object-cover"
                transformation={[
                  {
                    quality: 85,
                    format: 'webp'
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Tujuan Website */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tujuan Website Potensi Desa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Edukasi & Inspirasi</h3>
                <p className="text-gray-600">
                  Berbagi pengetahuan dan pengalaman dalam pengembangan desa berkelanjutan kepada masyarakat luas
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Membangun Kolaborasi</h3>
                <p className="text-gray-600">
                  Menghubungkan Desa Mekarjaya dengan berbagai pihak untuk kerjasama dan pertukaran ilmu
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Promosi Potensi</h3>
                <p className="text-gray-600">
                  Memperkenalkan potensi unik desa sebagai destinasi ekowisata dan pusat pembelajaran
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visi dan Misi */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center">
                  <span className="mr-3">🎯</span>
                  Visi Desa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  &ldquo;Menjadi desa mandiri dan berkelanjutan yang menggabungkan kearifan lokal dengan inovasi modern 
                  untuk kesejahteraan masyarakat dan kelestarian lingkungan.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center">
                  <span className="mr-3">🚀</span>
                  Misi Desa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mengembangkan pertanian berkelanjutan dan ramah lingkungan</li>
                  <li>• Melestarikan keanekaragaman hayati melalui konservasi aktif</li>
                  <li>• Meningkatkan kesejahteraan ekonomi melalui inovasi lokal</li>
                  <li>• Membangun kapasitas sumber daya manusia desa</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Profil Narasumber */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Profil Narasumber</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tim ahli dan pemimpin lokal yang berkontribusi dalam pengembangan dan dokumentasi potensi Desa Mekarjaya. 
              Dengan pengalaman dan keahlian masing-masing, mereka menjadi sumber kredibel informasi dalam website ini.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-2">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <ImageKitImage
                      src={contributor.image}
                      alt={`Foto ${contributor.name}`}
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover border-4 border-gray-200"
                      transformation={[
                        {
                          quality: 90,
                          format: 'webp'
                        }
                      ]}
                    />
                  </div>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <p className="text-sm text-green-600 font-medium">{contributor.role}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Keahlian
                    </p>
                    <p className="text-sm text-gray-700">{contributor.expertise}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {contributor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistik Desa */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Desa Mekarjaya dalam Angka</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2,800</div>
                <div className="text-gray-600 font-medium">Penduduk</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1,247</div>
                <div className="text-gray-600 font-medium">Hektar Luas Wilayah</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">150+</div>
                <div className="text-gray-600 font-medium">Burung Hantu</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">85</div>
                <div className="text-gray-600 font-medium">Hektar Kebun Mangga</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Misi Kami</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tertarik untuk berkolaborasi atau belajar lebih lanjut tentang praktik berkelanjutan di Desa Mekarjaya? 
            Mari wujudkan desa-desa Indonesia yang lebih hijau dan inovatif.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/kontak"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Hubungi Kami
            </a>
            <a
              href="/galeri"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Lihat Galeri
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
