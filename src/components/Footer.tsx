import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang Desa" },
    { href: "/potensi", label: "Potensi" },
    { href: "/galeri", label: "Galeri" },
    { href: "/kontak", label: "Kontak" },
  ];

  const potensiLinks = [
    { href: "/potensi/penangkaran", label: "Penangkaran Burung Hantu" },
    { href: "/potensi/kebun-mangga", label: "Kebun Mangga Inovatif" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo dan Deskripsi */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">Mekarjaya</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident excepturi non iste autem nam facilis culpa, asperiores explicabo, ipsam, sed consectetur porro odit quibusdam!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Potensi Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Potensi Desa</h3>
            <ul className="space-y-2">
              {potensiLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Desa Contoh</p>
                  <p>Kecamatan Contoh</p>
                  <p>Kabupaten Contoh, 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62 123 4567 890</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@potensidesa.id
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>
              &copy; {currentYear} KKNM Universitas Subang. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
