import { Metadata } from "next";

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

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
