export interface PohonManggaData {
  id: string
  nama: string
  varietas: string
  namaLatin: string
  deskripsi: string
  karakteristik: {
    tinggi: string
    diameterBatang: string
    bentukDaun: string
    warnaBuah: string
    rasaBuah: string
    ukuranBuah: string
  }
  musimBerbuah: {
    periode: string
    frekuensi: string
    produktivitas: string
  }
  manfaat: {
    ekonomi: string[]
    kesehatan: string[]
    lingkungan: string[]
    sosial: string[]
  }
  kandunganGizi: {
    vitamin: string[]
    mineral: string[]
    antioksidan: string[]
    kalori: string
  }
  lokasi: {
    area: string
    luasKebun: string
    jumlahPohon: number
    koordinat?: {
      lat: number
      lng: number
    }
  }
  perawatan: {
    penyiraman: string
    pemupukan: string
    pemangkasan: string
    pengendalianHama: string[]
  }
  produksi: {
    tahunTanam: number
    mulaiProduksi: number
    puncakProduksi: string
    estimasiPanen: string
    kualitasBuah: 'A' | 'B' | 'C'
  }
  pasar: {
    hargaLokal: string
    hargaEkspor?: string
    permintaan: 'tinggi' | 'sedang' | 'rendah'
    distribusi: string[]
  }
  tantangan: string[]
  peluangPengembangan: string[]
}

export const pohonManggaData: PohonManggaData[] = [
  {
    id: "mangga-gedong-gincu",
    nama: "Mangga Gedong Gincu",
    varietas: "Gedong Gincu",
    namaLatin: "Mangifera indica var. Gedong Gincu",
    deskripsi: "Varietas mangga unggul lokal yang menjadi komoditas unggulan desa dengan rasa manis dan aroma harum yang khas. Buah ini memiliki kulit berwarna kuning kemerahan saat matang.",
    karakteristik: {
      tinggi: "8-12 meter",
      diameterBatang: "40-60 cm",
      bentukDaun: "Memanjang dengan ujung runcing",
      warnaBuah: "Kuning kemerahan saat matang",
      rasaBuah: "Manis dengan sedikit asam, aroma harum",
      ukuranBuah: "Sedang (200-300 gram)"
    },
    musimBerbuah: {
      periode: "September - Desember",
      frekuensi: "1-2 kali per tahun",
      produktivitas: "150-200 kg per pohon per tahun"
    },
    manfaat: {
      ekonomi: [
        "Sumber pendapatan utama petani",
        "Bahan baku industri olahan buah",
        "Komoditas ekspor potensial",
        "Mendukung ekonomi kreatif (jus, keripik, dodol)"
      ],
      kesehatan: [
        "Sumber vitamin C dan A",
        "Meningkatkan imunitas tubuh",
        "Baik untuk kesehatan mata",
        "Melancarkan pencernaan"
      ],
      lingkungan: [
        "Menyerap karbon dioksida",
        "Mencegah erosi tanah",
        "Habitat burung dan serangga",
        "Mengurangi suhu udara sekitar"
      ],
      sosial: [
        "Tradisi gotong royong saat panen",
        "Festival mangga tahunan",
        "Kegiatan edukasi pertanian",
        "Objek wisata agro"
      ]
    },
    kandunganGizi: {
      vitamin: ["Vitamin C (60mg/100g)", "Vitamin A", "Vitamin E", "Vitamin K"],
      mineral: ["Kalium", "Magnesium", "Fosfor", "Kalsium"],
      antioksidan: ["Beta karoten", "Mangiferin", "Quercetin"],
      kalori: "60 kkal per 100 gram"
    },
    lokasi: {
      area: "Kebun Mangga Desa Bagian Selatan",
      luasKebun: "25 hektar",
      jumlahPohon: 500,
      koordinat: {
        lat: -7.15432,
        lng: 110.68765
      }
    },
    perawatan: {
      penyiraman: "2-3 kali per minggu saat musim kering",
      pemupukan: "NPK setiap 3 bulan, pupuk organik setiap 6 bulan",
      pemangkasan: "Pemangkasan bentuk dan sanitasi setiap tahun",
      pengendalianHama: [
        "Pestisida organik untuk kutu daun",
        "Perangkap feromon untuk lalat buah",
        "Fungisida untuk penyakit antraknosa"
      ]
    },
    produksi: {
      tahunTanam: 2015,
      mulaiProduksi: 2020,
      puncakProduksi: "Tahun ke-8 sampai ke-15",
      estimasiPanen: "80-100 ton per tahun",
      kualitasBuah: "A"
    },
    pasar: {
      hargaLokal: "Rp 15.000 - 25.000 per kg",
      hargaEkspor: "Rp 35.000 - 50.000 per kg",
      permintaan: "tinggi",
      distribusi: [
        "Pasar lokal desa dan kecamatan",
        "Supermarket kota",
        "Eksport ke Malaysia dan Singapura",
        "Online marketplace"
      ]
    },
    tantangan: [
      "Serangan hama lalat buah",
      "Cuaca ekstrem akibat perubahan iklim",
      "Fluktuasi harga musiman",
      "Keterbatasan teknologi pascapanen",
      "Kompetisi dengan daerah lain"
    ],
    peluangPengembangan: [
      "Sertifikasi organik",
      "Pengembangan produk olahan",
      "Agrowisata kebun mangga",
      "Kerjasama dengan hotel dan restoran",
      "Pemasaran digital dan branding"
    ]
  },
  {
    id: "mangga-arumanis",
    nama: "Mangga Arumanis",
    varietas: "Arumanis 143",
    namaLatin: "Mangifera indica var. Arumanis",
    deskripsi: "Varietas mangga favorit dengan ukuran buah besar dan daging buah tebal. Memiliki rasa yang sangat manis dengan aroma yang harum, cocok untuk konsumsi segar maupun olahan.",
    karakteristik: {
      tinggi: "10-15 meter",
      diameterBatang: "50-80 cm",
      bentukDaun: "Lebar dengan ujung meruncing",
      warnaBuah: "Hijau kekuningan saat matang",
      rasaBuah: "Sangat manis, aroma sangat harum",
      ukuranBuah: "Besar (400-600 gram)"
    },
    musimBerbuah: {
      periode: "Oktober - Januari",
      frekuensi: "1 kali per tahun",
      produktivitas: "200-300 kg per pohon per tahun"
    },
    manfaat: {
      ekonomi: [
        "Nilai jual tinggi karena ukuran besar",
        "Bahan premium untuk hotel dan restoran",
        "Ekspor ke pasar premium",
        "Produk olahan high-end"
      ],
      kesehatan: [
        "Sumber serat tinggi",
        "Kaya antioksidan",
        "Membantu metabolisme",
        "Mendukung kesehatan jantung"
      ],
      lingkungan: [
        "Pohon peneduh yang baik",
        "Konservasi tanah dan air",
        "Biodiversitas serangga penyerbuk",
        "Oksigen untuk lingkungan"
      ],
      sosial: [
        "Simbol kemakmuran desa",
        "Kegiatan komunitas petani",
        "Warisan budaya lokal",
        "Edukasi pertanian berkelanjutan"
      ]
    },
    kandunganGizi: {
      vitamin: ["Vitamin C (80mg/100g)", "Vitamin A", "Folat", "Vitamin B6"],
      mineral: ["Kalium tinggi", "Magnesium", "Tembaga", "Mangan"],
      antioksidan: ["Zeaxanthin", "Lutein", "Beta karoten"],
      kalori: "65 kkal per 100 gram"
    },
    lokasi: {
      area: "Kebun Arumanis Desa Bagian Barat",
      luasKebun: "15 hektar",
      jumlahPohon: 200,
      koordinat: {
        lat: -7.13876,
        lng: 110.64321
      }
    },
    perawatan: {
      penyiraman: "Intensif saat berbunga dan berbuah",
      pemupukan: "Pupuk khusus buah setiap 4 bulan",
      pemangkasan: "Pemangkasan ringan untuk sirkulasi udara",
      pengendalianHama: [
        "Monitoring rutin penyakit busuk buah",
        "Pengendalian biologis dengan predator alami",
        "Sanitasi kebun yang ketat"
      ]
    },
    produksi: {
      tahunTanam: 2012,
      mulaiProduksi: 2018,
      puncakProduksi: "Tahun ke-10 sampai ke-20",
      estimasiPanen: "40-60 ton per tahun",
      kualitasBuah: "A"
    },
    pasar: {
      hargaLokal: "Rp 25.000 - 40.000 per kg",
      hargaEkspor: "Rp 60.000 - 80.000 per kg",
      permintaan: "tinggi",
      distribusi: [
        "Hotel bintang 4-5",
        "Supermarket premium",
        "Eksport ke Jepang dan Korea",
        "E-commerce platform premium"
      ]
    },
    tantangan: [
      "Perawatan intensif diperlukan",
      "Investasi awal yang besar",
      "Risiko gagal panen tinggi",
      "Persaingan dengan importir",
      "Standar kualitas ekspor yang ketat"
    ],
    peluangPengembangan: [
      "Sertifikasi GAP (Good Agricultural Practice)",
      "Kemitraan dengan eksportir besar",
      "Pengembangan cold storage",
      "Value chain integration",
      "Research & development varietas baru"
    ]
  }
]

// Helper function to get data by ID
export const getPohonManggaById = (id: string): PohonManggaData | undefined => {
  return pohonManggaData.find(item => item.id === id)
}

// get total production
export const getTotalProduksi = (): number => {
  return pohonManggaData.reduce((total, mangga) => {
    const produksiNumber = parseInt(mangga.produksi.estimasiPanen.split('-')[1]) || 0
    return total + produksiNumber
  }, 0)
}

// get economy statistics
export const getStatistikEkonomi = () => {
  const totalKebun = pohonManggaData.reduce((total, mangga) => {
    return total + parseInt(mangga.lokasi.luasKebun)
  }, 0)
  
  const totalPohon = pohonManggaData.reduce((total, mangga) => {
    return total + mangga.lokasi.jumlahPohon
  }, 0)

  return {
    totalVarietas: pohonManggaData.length,
    totalLuasKebun: `${totalKebun} hektar`,
    totalPohon: totalPohon,
    estimasiProduksiTahunan: `${getTotalProduksi()} ton`,
    varietasUnggulan: pohonManggaData.filter(m => m.produksi.kualitasBuah === 'A').length
  }
}

// get market information
export const getInfoPasar = () => {
  const permintaanTinggi = pohonManggaData.filter(m => m.pasar.permintaan === 'tinggi').length
  const adaEkspor = pohonManggaData.filter(m => m.pasar.hargaEkspor).length
  
  return {
    varietasPermintaanTinggi: permintaanTinggi,
    varietasEkspor: adaEkspor,
    totalPasarDistribusi: pohonManggaData.reduce((total, mangga) => 
      total + mangga.pasar.distribusi.length, 0
    )
  }
}
