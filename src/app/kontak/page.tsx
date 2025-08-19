import { ImageKitImage } from "@/components/ImageKit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MapWrapper from "@/components/MapWrapper";
import { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Kami | Desa Mekarjaya",
  description:
    "Hubungi Desa Mekarjaya untuk informasi lebih lanjut, kerjasama, kunjungan, atau pertanyaan seputar potensi desa dan program pembangunan berkelanjutan.",
  keywords:
    "kontak Desa Mekarjaya, alamat desa, telepon desa, email desa, kunjungan desa, kerjasama desa",
  openGraph: {
    title: "Kontak Kami | Desa Mekarjaya",
    description:
      "Hubungi Desa Mekarjaya untuk informasi, kerjasama, dan kunjungan. Kami siap berkolaborasi dalam pembangunan berkelanjutan.",
    images: ["/kontak-hero.webp"],
  },
};

export default function KontakPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kantor Desa",
      content: "Kecamatan Compreng\nKabupaten Subang\n41258",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "+62 838-9634-7917 (WhatsApp)",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const contactPersons = [
    {
      name: "Bapak Kendi",
      position: "Penanggung Jawab Penangkaran",
      phone: "+62 821-1450-3987 (Whatsapp)",
      expertise: "Konservasi Satwa",
      image: "/pak-kendi-sq_GsZPjBr30",
    },
    {
      name: "Bapak Ikwan",
      position: "Pemilik Kebun Sidawarna",
      phone: "+62 813-3316-8816 (Whatsapp)",
      expertise: "Pertanian, Budidaya Mangga",
      image: "/pak-iwan-sq_WwB7kL-5M",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageKitImage
            src="/kontak-hero.webp"
            alt="Kantor Desa Mekarjaya"
            width={1920}
            height={320}
            className="w-full h-full object-cover opacity-20"
            transformation={[
              {
                quality: 80,
                format: "webp",
              },
            ]}
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kami terbuka untuk kerjasama, pertanyaan, dan kunjungan. Mari
            bersama membangun masa depan yang berkelanjutan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Informasi Kontak Utama */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Informasi Kontak
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Berbagai cara untuk menghubungi kami. Tim kami siap membantu Anda
              dengan informasi yang dibutuhkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-2">
                  <div
                    className={`w-16 h-16 rounded-full ${info.bgColor} flex items-center justify-center mx-auto mb-4`}
                  >
                    <div className={info.color}>{info.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Kontak Person */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tim Kontak Kami
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hubungi langsung tim ahli kami sesuai dengan kebutuhan atau bidang
              yang diminati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactPersons.map((person, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-2">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <ImageKitImage
                      src={person.image}
                      alt={`Foto ${person.name}`}
                      width={80}
                      height={80}
                      className="w-full h-full rounded-full object-cover border-4 border-gray-200"
                      transformation={[
                        {
                          quality: 90,
                          format: "webp",
                        },
                      ]}
                    />
                  </div>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {person.position}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {person.expertise}
                  </p>
                </CardHeader>
                <CardContent className="space-y-2 text-center">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    <span>{person.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Peta dan Lokasi */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Desa Mekarjaya terletak di lokasi strategis dengan akses yang
              mudah dari berbagai kota besar.
            </p>
          </div>

          <Card className="w-full">
            <CardContent className="p-0">
              <MapWrapper
                center={[-6.375051255681708, 107.88828558866066]}
                zoom={14}
                height="500px"
                className="shadow-lg w-full"
                style="hybrid"
                showLayerControl={true}
                markers={[
                  {
                    position: [-6.375051255681708, 107.88828558866066],
                    popup:
                      "<b>🏛️ Kantor Desa Mekarjaya</b><br/>Desa Mekarjaya, Jawa Barat<br/><small>📍 Koordinat: -6.375051, 107.888286</small><br/><a href='https://maps.app.goo.gl/rVKG7BTrVekEE3iQ8' target='_blank' style='color: #3b82f6; text-decoration: underline;'>🗺️ Buka di Google Maps</a>",
                    title: "Kantor Desa Mekarjaya",
                  },
                  {
                    position: [-6.380388180319351, 107.8945014869351],
                    popup:
                      "<b>🥭 Sidawarna Fruit Farm</b><br/>Wisata agro unggulan desa<br/><small>📍 -6.380388, 107.894501</small><br/><a href='https://maps.app.goo.gl/eooBYFnkXQApC4pp9' target='_blank' style='color: #3b82f6; text-decoration: underline;'>🗺️ Buka di Google Maps</a>",
                    title: "Sidawarna Fruit Farm",
                  },
                  {
                    position: [-6.375938357271789, 107.90264097931646],
                    popup:
                      "<b>🦉 Penangkaran Burung Hantu</b><br/>Konservasi fauna lokal<br/><small>📍 -6.375938, 107.902641</small><br/><a href='https://maps.app.goo.gl/1VfmutDiBKN1XAfZ8' target='_blank' style='color: #3b82f6; text-decoration: underline;'>🗺️ Buka di Google Maps</a>",
                    title: "Penangkaran Burung Hantu",
                  },
                ]}
              />
            </CardContent>
          </Card>
        </section>

        {/* FAQ Singkat */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Pertanyaan yang Sering Diajukan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Apakah perlu membuat janji untuk berkunjung?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ya, kami menyarankan untuk membuat janji terlebih dahulu
                    minimal 3 hari sebelumnya agar kami dapat mempersiapkan
                    program kunjungan yang optimal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Apakah ada biaya untuk kunjungan?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Tidak ada biaya yang dikenakan untuk kunjungan edukasi ke
                    desa kami. Semua program kunjungan disediakan secara gratis
                    untuk mendukung pembelajaran dan kolaborasi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
