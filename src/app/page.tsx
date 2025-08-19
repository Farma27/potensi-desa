// import Image from "next/image";
import Link from "next/link";
import { ImageKitImage } from "@/components/ImageKit";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageKitImage
            src="/Hero%20Section%20Background.webp"
            alt="Hero Section Background - Desa Mekarjaya"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
            transformation={[
              {
                quality: 80,
                format: 'webp'
              }
            ]}
            priority={true}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            MENJELAJAHI KEAJAIBAN TERSEMBUNYI
            <span className="block text-green-600 mt-2">DESA MEKARJAYA</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sebuah desa dengan potensi luar biasa yang tersembunyi di balik kesederhanaan. Mari kita jelajahi kekayaan alam dan inovasi masyarakat yang membanggakan.
          </p>
          <div className="mt-8">
            <Link 
              href="#potensi" 
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "text-lg font-semibold shadow-lg hover:shadow-xl")}
            >
              Jelajahi Potensi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="potensi">
        
        {/* First Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <ImageKitImage
                src="/burung-hantu.jpg"
                alt="Burung Hantu - Sang Penjaga Sawah Desa Mekarjaya"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                transformation={[
                  {
                    quality: 85,
                    format: 'webp'
                  }
                ]}
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                SANG PENJAGA SAWAH
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Burung hantu bukan hanya predator alami yang mengendalikan populasi hama tikus di area persawahan, tetapi juga menjadi simbol keseimbangan ekosistem di Desa Mekarjaya. Program penangkaran kami telah berhasil meningkatkan populasi burung hantu dan mengurangi ketergantungan petani pada pestisida.
              </p>
              <Link 
                href="/potensi/penangkaran" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Kunjungi Penangkaran
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                INOVASI DARI LAHAN SEMPIT
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dengan lahan yang terbatas, masyarakat Desa Mekarjaya berhasil mengembangkan teknik budidaya mangga menggunakan pola UHDP (Ultra High Density Planting). Metode penanaman super rapat ini memungkinkan penanaman hingga 400 pohon per hektar, jauh melampaui metode konvensional yang hanya 100 pohon per hektar, sehingga produktivitas meningkat secara signifikan.
              </p>
              <Link 
                href="/potensi/kebun-mangga" 
                className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Lihat Kebun Kami
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Image */}
            <div>
              <ImageKitImage
                src="/kebun-mangga.jpg"
                alt="Kebun Mangga - Inovasi dari Lahan Sempit Desa Mekarjaya"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                transformation={[
                  {
                    quality: 85,
                    format: 'webp'
                  }
                ]}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-xl px-8 py-16 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bergabunglah dengan Perjalanan Kami
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Temukan lebih banyak potensi tersembunyi dan jadilah bagian dari cerita kemajuan Desa Mekarjaya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tentang" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Tentang Desa Kami
            </Link>
            <Link 
              href="/kontak" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
