'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    instansi: '',
    tujuan: '',
    pesan: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman form
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form setelah 3 detik
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nama: '',
        email: '',
        telepon: '',
        instansi: '',
        tujuan: '',
        pesan: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Pesan Terkirim!</h3>
            <p className="text-gray-600 mb-4">
              Terima kasih telah menghubungi kami. Kami akan merespons dalam 1x24 jam.
            </p>
            <p className="text-sm text-gray-500">
              Halaman akan kembali ke formulir dalam beberapa detik...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Kirim Pesan Kepada Kami</CardTitle>
          <p className="text-center text-gray-600 mt-2">
            Isi formulir di bawah ini untuk menghubungi kami. Kami akan merespons dalam 1x24 jam.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                  value={formData.telepon}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                  value={formData.instansi}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                value={formData.tujuan}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                value={formData.pesan}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                placeholder="Tuliskan pesan, pertanyaan, atau detail kebutuhan Anda di sini..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700'
                }`}
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
