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

// Konstanta untuk data statis
const HERO_CONTENT = {
  title: "Tentang Desa Mekarjaya",
  description: "Mengenal lebih dekat desa inovatif yang menggabungkan tradisi dengan teknologi modern"
} as const;

const CONTRIBUTORS = [
  {
    name: "Bapak Ikwan",
    role: "Pemilik Kebun Mangga Sidawarna",
    expertise: "Pertanian, Budidaya Mangga",
    description:
      "Pemilik kebun mangga yang menerapkan teknik budidaya mangga inovatif yang meningkatkan produktivitas hingga 40% dengan metode UHDP.",
    image: "pak-iwan-sq_WwB7kL-5M",
  },
  {
    name: "Bapak Kendi",
    role: "Penanggung Jawab Penangkaran",
    expertise: "Konservasi Satwa",
    description:
      "Koordinator program penangkaran burung hantu yang bertujuan untuk menjaga populasi dan habitat burung hantu di Desa Mekarjaya.",
    image: "/pak-kendi-sq_GsZPjBr30",
  },
] as const;

const DESA_DESCRIPTION = [
  "Mekarjaya adalah sebuah desa di Kecamatan Compreng, Kabupaten Subang, Jawa Barat, Indonesia. Berada di zona Subang tengah, Terletak disebelah Utara-Timur Laut Kota Subang yang berjarak + 25 Km. Masyarakat Desa Mekarjaya seperti kebanyakan masyarakat daerah lainnya di Kabupaten Subang mayoritas bermata pencaharian sebagai buruh tani.",
  "Desa Mekarjaya memiliki 3 Dusun kewilayahan, yaitu Dusun Sukaresmi, Dusun Sidawarna dan Dusun Sukawera. Desa Mekarjaya memiliki 5 RW dan 20 RT.",
  "Di Desa Mekarjaya rata-rata setiap kepala keluarga mempunyai tanaman mangga baik yang ditanam di pekarangan rumah maupun ditanam dalam satu area kebun disepanjang pinggir jalan berjejer pohon mangga serta di sepanjang bantaran sungai Cipunagara tumbuh subur."
] as const;

const STATISTICS = [
  { value: "2,800", label: "Penduduk", color: "text-green-600" },
  { value: "1,247", label: "Hektar Luas Wilayah", color: "text-blue-600" },
  { value: "150+", label: "Burung Hantu", color: "text-yellow-600" },
  { value: "85", label: "Hektar Kebun Mangga", color: "text-orange-600" }
] as const;

const CTA_CONTENT = {
  title: "Bergabunglah dengan Misi Kami",
  description: "Tertarik untuk berkolaborasi atau belajar lebih lanjut tentang praktik berkelanjutan di Desa Mekarjaya? Mari wujudkan desa-desa Indonesia yang lebih hijau dan inovatif.",
  buttons: [
    { text: "Hubungi Kami", href: "/kontak", primary: true },
    { text: "Lihat Galeri", href: "/galeri", primary: false }
  ]
} as const;

// Component untuk Hero Section
function HeroSection() {
  return (
    <section className="relative h-80 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {HERO_CONTENT.title}
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          {HERO_CONTENT.description}
        </p>
      </div>
    </section>
  );
}

// Component untuk About Section
function AboutSection() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Tentang Desa Mekarjaya
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {DESA_DESCRIPTION.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative">
          <ImageKitImage
            src="/Kantor-Desa-Mekarjaya.jpg"
            alt="Kantor Desa Mekarjaya"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-80 object-cover"
            transformation={[
              {
                quality: 85,
                format: "webp",
                height: 400,
                width: 600,
              },
            ]}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// Component untuk Contributors Section
function ContributorsSection() {
  return (
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

      <div className="flex flex-wrap justify-center gap-6">
        {CONTRIBUTORS.map((contributor, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 w-full max-w-sm sm:w-auto sm:min-w-[320px] sm:max-w-md flex-shrink-0"
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
                      height: 96,
                      width: 96,
                    },
                  ]}
                  loading="lazy"
                />
              </div>
              <CardTitle className="text-lg">{contributor.name}</CardTitle>
              <p className="text-sm text-green-600 font-medium">
                {contributor.role}
              </p>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6">
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
  );
}

// Component untuk Statistics Section
function StatisticsSection() {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Desa Mekarjaya dalam Angka
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component untuk CTA Section
function CTASection() {
  return (
    <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-12 text-white">
      <h2 className="text-3xl font-bold mb-4">
        {CTA_CONTENT.title}
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        {CTA_CONTENT.description}
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        {CTA_CONTENT.buttons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition-colors duration-300 ${
              button.primary
                ? "bg-white text-green-600 hover:bg-gray-100"
                : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600"
            }`}
          >
            {button.text}
          </a>
        ))}
      </div>
    </section>
  );
}

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AboutSection />
        <ContributorsSection />
        <StatisticsSection />
        <CTASection />
      </div>
    </div>
  );
}
