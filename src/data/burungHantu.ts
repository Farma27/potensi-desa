export interface BurungHantuData {
  id: string
  nama: string
  namaLatin: string
  deskripsi: string
  habitat: string
  karakteristik: string[]
  manfaat: string[]
  statusKonservasi: string
  gambar: string
  lokasi: {
    area: string
    koordinat?: {
      lat: number
      lng: number
    }
  }
  waktuAktif: string
  populasi: {
    estimasi: string
    tren: 'stabil' | 'meningkat' | 'menurun' | 'tidak diketahui'
  }
  ancaman: string[]
  upayaPelestarian: string[]
}

export const burungHantuData: BurungHantuData[] = [
  {
    id: "celepuk-jawa",
    nama: "Celepuk Jawa",
    namaLatin: "Otus angelinae",
    deskripsi: "Burung hantu kecil endemik Jawa yang menjadi salah satu kekayaan fauna desa kami. Memiliki suara khas yang sering terdengar di malam hari.",
    habitat: "Hutan sekunder, perkebunan, dan area persawahan dengan pohon-pohon besar",
    karakteristik: [
      "Ukuran tubuh kecil, panjang sekitar 19-21 cm",
      "Bulu berwarna coklat keabu-abuan dengan pola bergaris",
      "Mata besar berwarna kuning cerah",
      "Telinga berbentuk seperti tanduk kecil",
      "Suara 'tuk-tuk-tuk' yang khas"
    ],
    manfaat: [
      "Pengendali hama alami (tikus, serangga)",
      "Indikator kesehatan ekosistem",
      "Daya tarik ekowisata",
      "Nilai edukasi konservasi"
    ],
    statusKonservasi: "Least Concern (LC)",
    gambar: "/images/fauna/celepuk-jawa.jpg",
    lokasi: {
      area: "Hutan Desa Bagian Timur, Perkebunan Kopi",
      koordinat: {
        lat: -7.12345,
        lng: 110.67890
      }
    },
    waktuAktif: "Nokturnal (aktif malam hari)",
    populasi: {
      estimasi: "15-20 pasang",
      tren: "stabil"
    },
    ancaman: [
      "Penggunaan pestisida berlebihan",
      "Pembukaan lahan baru",
      "Polusi cahaya",
      "Perburuan ilegal"
    ],
    upayaPelestarian: [
      "Program pertanian organik",
      "Penanaman pohon pelindung",
      "Edukasi masyarakat",
      "Monitoring rutin populasi"
    ]
  },
  {
    id: "beluk-watu",
    nama: "Beluk Watu",
    namaLatin: "Bubo sumatranus",
    deskripsi: "Burung hantu besar yang menjadi predator puncak di ekosistem desa. Keberadaannya menunjukkan keseimbangan alam yang baik.",
    habitat: "Hutan primer, tebing berbatu, dan area perbukitan",
    karakteristik: [
      "Ukuran besar, panjang 40-46 cm",
      "Bulu berwarna coklat dengan pola belang",
      "Cakar yang kuat dan tajam",
      "Suara hooting yang dalam dan keras",
      "Jumbai telinga yang mencolok"
    ],
    manfaat: [
      "Pengendali populasi mamalia kecil",
      "Menjaga keseimbangan rantai makanan",
      "Objek penelitian ornithologi",
      "Simbol kearifan lokal"
    ],
    statusKonservasi: "Near Threatened (NT)",
    gambar: "/images/fauna/beluk-watu.jpg",
    lokasi: {
      area: "Perbukitan Utara Desa, Gua Batu",
      koordinat: {
        lat: -7.09876,
        lng: 110.65432
      }
    },
    waktuAktif: "Krepuskular dan Nokturnal",
    populasi: {
      estimasi: "3-5 individu",
      tren: "menurun"
    },
    ancaman: [
      "Perusakan habitat",
      "Gangguan aktivitas manusia",
      "Perburuan untuk koleksi",
      "Polusi suara"
    ],
    upayaPelestarian: [
      "Penetapan zona konservasi",
      "Patroli rutin",
      "Kerjasama dengan peneliti",
      "Program breeding jika diperlukan"
    ]
  }
]

// Helper function get data by ID
export const getBurungHantuById = (id: string): BurungHantuData | undefined => {
  return burungHantuData.find(item => item.id === id)
}

// get all Burung Hantu data with specific conservation status
export const getBurungHantuByStatus = (status: string): BurungHantuData[] => {
  return burungHantuData.filter(item => item.statusKonservasi === status)
}

// get population statistics
export const getStatistikPopulasi = () => {
  const total = burungHantuData.length
  const stabil = burungHantuData.filter(item => item.populasi.tren === 'stabil').length
  const meningkat = burungHantuData.filter(item => item.populasi.tren === 'meningkat').length
  const menurun = burungHantuData.filter(item => item.populasi.tren === 'menurun').length
  
  return {
    totalSpesies: total,
    populasiStabil: stabil,
    populasiMenurun: menurun,
    populasiMeningkat: meningkat
  }
}
