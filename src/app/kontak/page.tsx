import { ImageKitImage } from "@/components/ImageKit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleMapsButton from "@/components/GoogleMapsButton";
import DirectionsInfo from "@/components/DirectionsInfo";
import ContactForm from "@/components/ContactForm";
import MapWrapper from "@/components/MapWrapper";
import { Metadata } from "next";
import { 
  MapPin, 
  Phone, 
  Mail, 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Kami | Desa Mekarjaya",
  description: "Hubungi Desa Mekarjaya untuk informasi lebih lanjut, kerjasama, kunjungan, atau pertanyaan seputar potensi desa dan program pembangunan berkelanjutan.",
  keywords: "kontak Desa Mekarjaya, alamat desa, telepon desa, email desa, kunjungan desa, kerjasama desa",
  openGraph: {
    title: "Kontak Kami | Desa Mekarjaya",
    description: "Hubungi Desa Mekarjaya untuk informasi, kerjasama, dan kunjungan. Kami siap berkolaborasi dalam pembangunan berkelanjutan.",
    images: ["/kontak-hero.webp"],
  },
};

export default function KontakPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kantor Desa",
      content: "Jl. Raya Mekarjaya No. 123\nDesa Mekarjaya\nJawa Barat",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "(0263) 123-4567\n+62 812-3456-7890 (WhatsApp)",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@mekarjaya-desa.id\nkepala.desa@mekarjaya-desa.id",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const contactPersons = [
    {
      name: "Bapak Ahmad Hidayat",
      position: "Koordinator Program Konservasi",
      phone: "+62 812-5555-6666",
      email: "konservasi@mekarjaya-desa.id",
      expertise: "Program Burung Hantu & Ekowisata",
      image: "/profile-koordinator-burung.webp"
    },
    {
      name: "Ibu Sari Dewi",
      position: "Koordinator Pertanian",
      phone: "+62 812-7777-8888",
      email: "pertanian@mekarjaya-desa.id",
      expertise: "Budidaya Mangga & Pertanian Organik",
      image: "/profile-ketua-tani.webp"
    }
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
                format: 'webp'
              }
            ]}
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kami terbuka untuk kerjasama, pertanyaan, dan kunjungan. Mari bersama membangun masa depan yang berkelanjutan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Informasi Kontak Utama */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Informasi Kontak</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Berbagai cara untuk menghubungi kami. Tim kami siap membantu Anda dengan informasi yang dibutuhkan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 rounded-full ${info.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <div className={info.color}>
                      {info.icon}
                    </div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Kontak Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hubungi langsung tim ahli kami sesuai dengan kebutuhan atau bidang yang diminati.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactPersons.map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
                          format: 'webp'
                        }
                      ]}
                    />
                  </div>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <p className="text-sm text-blue-600 font-medium mb-2">{person.position}</p>
                  <p className="text-xs text-gray-500 mb-3">{person.expertise}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    <span>{person.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="break-all">{person.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Peta dan Lokasi */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Desa Mekarjaya terletak di lokasi strategis dengan akses yang mudah dari berbagai kota besar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-0">
                  <MapWrapper
                    center={[-6.375051255681708, 107.88828558866066]} // Koordinat Kantor Desa Mekarjaya
                    zoom={14}
                    height="450px"
                    className="shadow-lg"
                    style="hybrid" // Menggunakan hybrid view seperti Google Maps
                    showLayerControl={true}
                    markers={[
                      {
                        position: [-6.375051255681708, 107.88828558866066],
                        popup: `
                          <div style="min-width: 200px;">
                            <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: #1f2937;">
                              🏛️ Kantor Desa Mekarjaya
                            </h3>
                            <p style="color: #6b7280; margin-bottom: 8px; font-size: 14px;">
                              Desa Mekarjaya, Jawa Barat
                            </p>
                            <div style="border-top: 1px solid #e5e7eb; padding-top: 8px; margin-top: 8px;">
                              <p style="font-size: 12px; color: #9ca3af;">
                                📍 Koordinat: -6.375051, 107.888286
                              </p>
                            </div>
                          </div>
                        `,
                        title: "Kantor Desa Mekarjaya"
                      },
                      {
                        position: [-6.380388180319351, 107.8945014869351],
                        popup: `
                          <div style="min-width: 180px;">
                            <h3 style="font-weight: bold; font-size: 14px; margin-bottom: 6px; color: #1f2937;">
                              🥭 Kebun Mangga Organik
                            </h3>
                            <p style="color: #6b7280; font-size: 13px;">
                              Wisata agro unggulan desa
                            </p>
                            <p style="font-size: 11px; color: #9ca3af; margin-top: 4px;">
                              📍 -6.380388, 107.894501
                            </p>
                          </div>
                        `,
                        title: "Kebun Mangga Organik"
                      },
                      {
                        position: [-6.375938357271789, 107.90264097931646],
                        popup: `
                          <div style="min-width: 180px;">
                            <h3 style="font-weight: bold; font-size: 14px; margin-bottom: 6px; color: #1f2937;">
                              🦉 Penangkaran Burung Hantu
                            </h3>
                            <p style="color: #6b7280; font-size: 13px;">
                              Konservasi fauna lokal
                            </p>
                            <p style="font-size: 11px; color: #9ca3af; margin-top: 4px;">
                              📍 -6.375938, 107.902641
                            </p>
                          </div>
                        `,
                        title: "Penangkaran Burung Hantu"
                      }
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Akses Transportasi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Dari Jakarta:</p>
                    <p className="text-gray-600 text-sm">3 jam via Tol Jagorawi - Sukabumi</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Dari Bandung:</p>
                    <p className="text-gray-600 text-sm">2 jam via Jl. Raya Bandung-Sukabumi</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Transportasi Umum:</p>
                    <p className="text-gray-600 text-sm">Bus ke Terminal Sukabumi + Angkot</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Koordinat GPS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Latitude:</span> -6.375051° S
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Longitude:</span> 107.888286° E
                    </p>
                    <GoogleMapsButton
                      latitude={-6.375051255681708}
                      longitude={107.88828558866066}
                      className="mt-3"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Singkat */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Pertanyaan yang Sering Diajukan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Apakah perlu membuat janji untuk berkunjung?</h4>
                  <p className="text-gray-600 text-sm">
                    Ya, kami menyarankan untuk membuat janji terlebih dahulu minimal 3 hari sebelumnya 
                    agar kami dapat mempersiapkan program kunjungan yang optimal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Apakah ada biaya untuk kunjungan?</h4>
                  <p className="text-gray-600 text-sm">
                    Untuk kunjungan edukasi, kami menerapkan biaya operasional yang terjangkau. 
                    Hubungi kami untuk informasi detail paket kunjungan.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Bahasa apa yang digunakan saat presentasi?</h4>
                  <p className="text-gray-600 text-sm">
                    Kami dapat menyediakan presentasi dalam Bahasa Indonesia dan Bahasa Inggris 
                    sesuai kebutuhan pengunjung.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Apakah tersedia akomodasi untuk menginap?</h4>
                  <p className="text-gray-600 text-sm">
                    Kami dapat membantu mengatur akomodasi di homestay lokal atau hotel terdekat 
                    untuk program kunjungan multi-hari.
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
