import { ImageKitImage } from "@/components/ImageKit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Users, 
  Calendar,
  ExternalLink
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
      content: "Jl. Raya Mekarjaya No. 123\nKec. Cianjur Selatan\nKab. Cianjur, Jawa Barat 43253",
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
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Layanan",
      content: "Senin - Jumat: 08.00 - 16.00 WIB\nSabtu: 08.00 - 12.00 WIB\nMinggu: Tutup",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const contactPersons = [
    {
      name: "Bapak Sutrisno",
      position: "Kepala Desa Mekarjaya",
      phone: "+62 812-1111-2222",
      email: "kepala.desa@mekarjaya-desa.id",
      expertise: "Kebijakan Desa & Kerjasama Strategis",
      image: "/profile-kepala-desa.webp"
    },
    {
      name: "Ibu Ratna Sari",
      position: "Sekretaris Desa",
      phone: "+62 812-3333-4444",
      email: "sekretaris@mekarjaya-desa.id",
      expertise: "Administrasi & Koordinasi Program",
      image: "/profile-sekretaris.webp"
    },
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

  const visitTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kunjungan Edukasi",
      description: "Ideal untuk sekolah, universitas, dan lembaga pendidikan yang ingin belajar tentang praktik berkelanjutan.",
      duration: "Half day (4 jam) atau Full day (8 jam)",
      capacity: "10-50 orang",
      includes: ["Presentasi program desa", "Tur fasilitas", "Interaksi dengan narasumber", "Dokumentasi kegiatan"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Studi Banding",
      description: "Program khusus untuk pemerintah daerah dan organisasi yang ingin menerapkan model serupa.",
      duration: "1-3 hari",
      capacity: "5-30 orang",
      includes: ["Workshop intensif", "Sharing best practices", "Konsultasi implementasi", "Materi pembelajaran"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Penelitian & PKM",
      description: "Fasilitas untuk mahasiswa, peneliti, dan dosen yang ingin melakukan penelitian atau pengabdian masyarakat.",
      duration: "Fleksibel (sesuai kebutuhan)",
      capacity: "1-20 orang",
      includes: ["Akses data dan informasi", "Pendampingan narasumber", "Tempat penelitian", "Surat keterangan"]
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

        {/* Jenis Kunjungan */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jenis Kunjungan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kami menyambut berbagai jenis kunjungan sesuai dengan tujuan dan kebutuhan Anda. 
              Silakan pilih jenis kunjungan yang paling sesuai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visitTypes.map((visit, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {visit.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{visit.title}</CardTitle>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {visit.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Durasi:</p>
                      <p className="text-gray-600 text-sm">{visit.duration}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Kapasitas:</p>
                      <p className="text-gray-600 text-sm">{visit.capacity}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Termasuk:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {visit.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Formulir Kontak */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Kirim Pesan Kepada Kami</CardTitle>
                <p className="text-center text-gray-600 mt-2">
                  Isi formulir di bawah ini untuk menghubungi kami. Kami akan merespons dalam 1x24 jam.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="telepon"
                        name="telepon"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="instansi" className="block text-sm font-medium text-gray-700 mb-2">
                        Instansi/Organisasi
                      </label>
                      <input
                        type="text"
                        id="instansi"
                        name="instansi"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nama instansi atau organisasi"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tujuan" className="block text-sm font-medium text-gray-700 mb-2">
                      Tujuan Kontak *
                    </label>
                    <select
                      id="tujuan"
                      name="tujuan"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih tujuan kontak</option>
                      <option value="kunjungan-edukasi">Kunjungan Edukasi</option>
                      <option value="studi-banding">Studi Banding</option>
                      <option value="penelitian">Penelitian & PKM</option>
                      <option value="kerjasama">Proposal Kerjasama</option>
                      <option value="media">Liputan Media</option>
                      <option value="informasi">Permintaan Informasi</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="pesan"
                      name="pesan"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tuliskan pesan, pertanyaan, atau detail kebutuhan Anda di sini..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
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
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Peta Interaktif</p>
                      <p className="text-sm">
                        Peta lokasi Desa Mekarjaya akan ditampilkan di sini
                      </p>
                      <p className="text-xs mt-2">
                        (Integrasi dengan Google Maps atau layanan peta lainnya)
                      </p>
                    </div>
                  </div>
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
                    <p className="text-gray-600 text-sm">2,5 jam via Tol Cipularang - Cianjur</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Dari Bandung:</p>
                    <p className="text-gray-600 text-sm">1,5 jam via Jalan Raya Cianjur</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Transportasi Umum:</p>
                    <p className="text-gray-600 text-sm">Bus DAMRI + Angkot lokal</p>
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
                      <span className="font-semibold">Latitude:</span> -6.8175° S
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Longitude:</span> 107.1390° E
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center mt-3">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Buka di Google Maps
                    </button>
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
