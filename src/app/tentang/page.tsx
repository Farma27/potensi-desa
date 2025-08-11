import { ImageKitImage } from "@/components/ImageKit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Desa Mekarjaya | Potensi Desa",
  description:
    "Pelajari tentang Desa Mekarjaya, desa inovatif yang menggabungkan tradisi dengan teknologi modern. Temukan cerita, visi, misi, dan profil narasumber kredible.",
  keywords:
    "Desa Mekarjaya, tentang desa, profil desa, visi misi desa, desa berkelanjutan, desa hijau inovatif",
  openGraph: {
    title: "Tentang Desa Mekarjaya | Potensi Desa",
    description:
      "Pelajari tentang Desa Mekarjaya, desa inovatif yang menggabungkan tradisi dengan teknologi modern.",
    images: ["/desa-mekarjaya-overview.webp"],
  },
};

export default function TentangPage() {
  const contributors = [
    {
      name: "Bapak Iwan",
      role: "Petani Mangga",
      expertise: "Pertanian Organik, Budidaya Mangga",
      description:
        "Memimpin Desa Mekarjaya selama 8 tahun dengan fokus pada pengembangan ekonomi lokal dan pelestarian lingkungan.",
      image: "/profile-kepala-desa.webp",
    },
    {
      name: "Bapak Kendi",
      role: "Koordinator Penangkaran",
      expertise: "Konservasi Satwa, Pertanian Berkelanjutan",
      description:
        "Pelopor teknik budidaya mangga inovatif yang meningkatkan produktivitas hingga 40% dengan metode organik.",
      image: "/profile-ketua-tani.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang Desa Mekarjaya
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Mengenal lebih dekat desa inovatif yang menggabungkan tradisi dengan
            teknologi modern
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cerita Singkat Desa */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Cerita Desa Mekarjaya
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageKitImage
                src="/Kantor-Desa-Mekarjaya.jpg"
                alt="Mekarjaya"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-80 object-cover"
                transformation={[
                  {
                    quality: 85,
                    format: "webp",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Profil Narasumber */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Profil Narasumber
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tim ahli yang berkontribusi dalam pengembangan dan dokumentasi
              potensi Desa Mekarjaya. Dengan pengalaman dan keahlian
              masing-masing, mereka menjadi sumber kredibel informasi dalam
              website ini.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {contributors.map((contributor, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 w-full sm:w-80 max-w-sm"
              >
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
                          format: "webp",
                        },
                      ]}
                    />
                  </div>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <p className="text-sm text-green-600 font-medium">
                    {contributor.role}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Keahlian
                    </p>
                    <p className="text-sm text-gray-700">
                      {contributor.expertise}
                    </p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Desa Mekarjaya dalam Angka
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  2,800
                </div>
                <div className="text-gray-600 font-medium">Penduduk</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  1,247
                </div>
                <div className="text-gray-600 font-medium">
                  Hektar Luas Wilayah
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600 font-medium">Burung Hantu</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  85
                </div>
                <div className="text-gray-600 font-medium">
                  Hektar Kebun Mangga
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Misi Kami
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tertarik untuk berkolaborasi atau belajar lebih lanjut tentang
            praktik berkelanjutan di Desa Mekarjaya? Mari wujudkan desa-desa
            Indonesia yang lebih hijau dan inovatif.
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
