import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function SchoolioSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-green-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="text-green-200 hover:text-white text-sm">Beranda</Link>
              <span className="text-green-300">/</span>
              <span className="text-green-200 text-sm">Schoolio</span>
              <span className="text-green-300">/</span>
              <span className="text-white text-sm font-medium">Sekolah & Lembaga</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="schoolio" size="large" />
              <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-4 py-1 text-sm font-bold">🏫 Untuk Sekolah & Lembaga Kursus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Schoolio untuk Sekolah & Lembaga</h1>
            <p className="text-xl text-green-100 mb-6">
              Upgrade program lembaga Anda dengan kurikulum homeschool terakreditasi internasional. Tawarkan rapor & ijazah WASC kepada siswa Anda.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://calendly.com/lindsey-schoolio/digital-walkthrough" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                Request Demo →
              </a>
              <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-green-700 transition">
                💬 Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Schools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Keuntungan untuk Lembaga Anda</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Jadikan lembaga kursus atau sekolah Anda lebih kompetitif dengan program berstandar internasional.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🎓</span>
              <h3 className="font-bold text-gray-900 mb-2">Kurikulum Terakreditasi WASC</h3>
              <p className="text-sm text-gray-600">Tawarkan kurikulum yang diakui secara internasional tanpa perlu membangun dari nol.</p>
            </div>
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">📋</span>
              <h3 className="font-bold text-gray-900 mb-2">Rapor & Transkrip Internasional</h3>
              <p className="text-sm text-gray-600">Siswa mendapatkan rapor dan transkrip yang diakui di seluruh dunia.</p>
            </div>
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🧩</span>
              <h3 className="font-bold text-gray-900 mb-2">Inklusif untuk Semua Siswa</h3>
              <p className="text-sm text-gray-600">Mendukung siswa neurodivergent (ADHD, Autisme) — diferensiasi otomatis.</p>
            </div>
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">💰</span>
              <h3 className="font-bold text-gray-900 mb-2">Hemat Biaya Operasional</h3>
              <p className="text-sm text-gray-600">Tidak perlu cetak buku, tidak perlu lisensi mahal. Digital-first platform.</p>
            </div>
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">📊</span>
              <h3 className="font-bold text-gray-900 mb-2">Monitoring Mudah</h3>
              <p className="text-sm text-gray-600">Dashboard admin untuk pantau seluruh siswa, guru, dan progress belajar.</p>
            </div>
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🚀</span>
              <h3 className="font-bold text-gray-900 mb-2">Nilai Jual Lebih</h3>
              <p className="text-sm text-gray-600">Diferensiasi lembaga Anda dengan program internasional yang kompetitif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEFL Bonus */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm font-bold mb-4">🎁 BONUS EKSKLUSIF</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Gratis Pelatihan TEFL untuk Guru Mitra</h2>
                <p className="text-gray-600 mb-4">
                  Setiap sekolah dan lembaga kursus yang menjadi mitra Study Buddy mendapatkan akses GRATIS ke pelatihan TEFL (Teaching English as a Foreign Language) untuk guru-guru mereka.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Sertifikat TEFL 120 jam diakui internasional</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Pelatihan online, fleksibel untuk guru</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Meningkatkan kredibilitas lembaga Anda</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Guru bersertifikat TEFL = nilai jual lebih</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
                  <span className="text-5xl block mb-3">🎓</span>
                  <p className="text-xl font-bold">TEFL Training</p>
                  <p className="text-green-200 text-sm">120-Hour Certification</p>
                  <p className="text-3xl font-bold mt-3 text-yellow-300">GRATIS</p>
                  <p className="text-green-200 text-xs mt-1">untuk mitra sekolah & lembaga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing for Schools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Sekolah & Lembaga</h2>
          <p className="text-center text-gray-600 mb-12">Harga per siswa untuk institusi Anda</p>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-green-500 overflow-hidden">
              <div className="bg-green-500 text-white p-4 text-center">
                <p className="font-bold text-lg">Schoolio</p>
                <p className="text-green-100 text-sm">Platform Pembelajaran (Kurikulum Kanada, K–8)</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">IDR 655.200<span className="text-sm font-normal text-gray-500">/siswa/bulan</span></p>
                <p className="text-xs text-gray-500 mb-4">Harga berlaku untuk institusi</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Full curriculum K-8</li>
                  <li>✓ Admin dashboard</li>
                  <li>✓ Teacher management tools</li>
                  <li>✓ Student progress monitoring</li>
                  <li>✓ Transkrip & rapor internasional</li>
                  <li>✓ Dedicated support</li>
                  <li className="text-green-600 font-bold">✓ GRATIS TEFL Training untuk guru</li>
                </ul>
                <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition">
                  💬 Hubungi Kami via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mt-16 bg-green-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">💡 Bandingkan dengan Membangun Program Internasional Sendiri</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">Bangun Program Sendiri</p>
                <p className="text-2xl font-bold text-red-600">Rp 500 jt+</p>
                <p className="text-xs text-gray-400">(kurikulum + akreditasi + sistem)</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">Schoolio via Study Buddy</p>
                <p className="text-2xl font-bold text-green-600">IDR 655.200/siswa/bulan</p>
                <p className="text-xs text-gray-400">(sudah termasuk akreditasi)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Institutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cocok untuk Lembaga Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <span className="text-4xl mb-3 block">🏫</span>
              <h4 className="font-bold text-gray-900">PAUD Formal</h4>
              <p className="text-xs text-gray-500 mt-1">Kindergarten & Preschool</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <span className="text-4xl mb-3 block">🎒</span>
              <h4 className="font-bold text-gray-900">SD Formal</h4>
              <p className="text-xs text-gray-500 mt-1">Elementary School</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <span className="text-4xl mb-3 block">📋</span>
              <h4 className="font-bold text-gray-900">PKBM / Homeschool</h4>
              <p className="text-xs text-gray-500 mt-1">Community Learning Center</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <span className="text-4xl mb-3 block">💬</span>
              <h4 className="font-bold text-gray-900">Lembaga Bahasa Inggris</h4>
              <p className="text-xs text-gray-500 mt-1">English Course Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Jadikan Lembaga Anda Berstandar Internasional</h2>
          <p className="text-green-100 text-lg mb-6">Hubungi kami untuk demo gratis dan penawaran khusus untuk institusi Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:studybuddyindonesia1@gmail.com" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
              📧 Email Kami
            </a>
            <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition">
              💬 WhatsApp Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
