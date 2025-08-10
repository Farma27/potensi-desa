import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageKitProvider } from "@/components/ImageKit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Potensi Desa - Menampilkan Kekayaan dan Peluang Desa",
  description: "Website resmi yang menampilkan berbagai potensi, wisata, dan peluang ekonomi desa. Temukan kekayaan budaya, produk lokal, dan investasi di desa kami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ImageKitProvider
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || ''}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ImageKitProvider>
      </body>
    </html>
  );
}
