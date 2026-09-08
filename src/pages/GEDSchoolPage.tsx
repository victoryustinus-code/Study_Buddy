import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function GEDSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-orange-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="text-orange-200 hover:text-white text-sm">Beranda</Link>
              <span className="text-orange-300">/</span>
              <span className="text-orange-200 text-sm">GED</span>
              <span className="text-orange-300">/</span>
              <span className="text-white text-sm font-medium">Sekolah & Lembaga</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="ged" size="large" />
              <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-4 py-1 text-sm font-bold">🏫 Untuk Sekolah & Lembaga Kursus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">GED untuk Sekolah & Lembaga</h1>
            <p className="text-xl text-orange-100 mb-6">
              Tawarkan program persiapan ijazah SMA internasional kepada siswa Anda. GED diterima di 98% universitas dan perusahaan dunia.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                💬 Jadi Mitra →
              </a>
              <a href="https://www.essentialed.com/educators/ged-academy" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-orange-700 transition">
                Kunjungi GED Academy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Schools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Keuntungan GED untuk Lembaga Anda</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Tambahkan program SMA internasional ke lembaga Anda tanpa biaya infrastruktur yang mahal.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🌍</span>
              <h3 className="font-bold text-gray-900 mb-2">Ijazah Diakui Dunia</h3>
              <p className="text-sm text-gray-600">GED credential diterima di 98% universitas dan perusahaan di seluruh dunia.</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">💰</span>
              <h3 className="font-bold text-gray-900 mb-2">Hemat Biaya Operasional</h3>
              <p className="text-sm text-gray-600">Tidak perlu membangun program SMA sendiri. Gunakan platform GED yang sudah terbukti.</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🎓</span>
              <h3 className="font-bold text-gray-900 mb-2">Jalur ke Universitas</h3>
              <p className="text-sm text-gray-600">Siswa Anda bisa langsung masuk universitas di AS, Kanada, UK, Australia, dan negara lainnya.</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">📈</span>
              <h3 className="font-bold text-gray-900 mb-2">Nilai Jual Tinggi</h3>
              <p className="text-sm text-gray-600">Tawarkan program "persiapan kuliah internasional" — diferensiasi dari lembaga lain.</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🔄</span>
              <h3 className="font-bold text-gray-900 mb-2">Sistem Terintegrasi</h3>
              <p className="text-sm text-gray-600">Lanjutkan dari MobyMax (K-8) ke GED (9-12) — alur belajar lengkap PAUD sampai SMA.</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">📊</span>
              <h3 className="font-bold text-gray-900 mb-2">21 Juta+ Lulusan</h3>
              <p className="text-sm text-gray-600">Bergabung dengan jaringan global 21 juta+ lulusan GED yang sukses di karir dan pendidikan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Pathway */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🎓 Alur Belajar Lengkap untuk Lembaga Anda</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-4">
              <div className="flex-1 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <span className="text-3xl mb-2 block">📚</span>
                <h4 className="font-bold text-green-800">Schoolio</h4>
                <p className="text-xs text-green-600">PAUD - Kelas 8</p>
                <p className="text-xs text-gray-500 mt-2">Kurikulum dasar + neurodivergent-friendly</p>
              </div>
              <div className="hidden md:flex items-center text-gray-400 text-2xl">→</div>
              <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
                <span className="text-3xl mb-2 block">🏆</span>
                <h4 className="font-bold text-blue-800">MobyMax</h4>
                <p className="text-xs text-blue-600">K - Kelas 8</p>
                <p className="text-xs text-gray-500 mt-2">Persiapan akademik + adaptive learning</p>
              </div>
              <div className="hidden md:flex items-center text-gray-400 text-2xl">→</div>
              <div className="flex-1 bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
                <span className="text-3xl mb-2 block">🎓</span>
                <h4 className="font-bold text-orange-800">GED</h4>
                <p className="text-xs text-orange-600">Kelas 9 - 12</p>
                <p className="text-xs text-gray-500 mt-2">Ijazah SMA setara internasional</p>
              </div>
              <div className="hidden md:flex items-center text-gray-400 text-2xl">→</div>
              <div className="flex-1 bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
                <span className="text-3xl mb-2 block">🏛️</span>
                <h4 className="font-bold text-purple-800">Universitas</h4>
                <p className="text-xs text-purple-600">Kampus Dunia</p>
                <p className="text-xs text-gray-500 mt-2">98% universitas menerima GED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEFL Bonus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm font-bold mb-4">🎁 BONUS EKSKLUSIF</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Gratis Pelatihan TEFL untuk Guru Mitra</h2>
                <p className="text-gray-600 mb-4">
                  Sekolah dan lembaga kursus yang menjadi mitra Study Buddy mendapatkan pelatihan TEFL (Teaching English as a Foreign Language) secara GRATIS untuk guru-guru mereka.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Sertifikat TEFL 120 jam diakui internasional</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Guru siap mengajar dengan standar internasional</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Meningkatkan reputasi lembaga Anda</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Online & fleksibel</li>
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

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Sekolah & Lembaga</h2>
          <p className="text-center text-gray-600 mb-12">Harga per siswa untuk institusi Anda</p>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-500 overflow-hidden">
              <div className="bg-orange-500 text-white p-4 text-center">
                <p className="font-bold text-lg">Essential Education / GED</p>
                <p className="text-orange-100 text-sm">Program Persiapan Pendidikan / GED</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">IDR 1.159.200<span className="text-sm font-normal text-gray-500">/siswa/bulan</span></p>
                <p className="text-xs text-gray-500 mb-4">Harga berlaku untuk institusi</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Program persiapan 4 subjek GED</li>
                  <li>✓ Akses materi persiapan GED</li>
                  <li>✓ Study materials & practice tests</li>
                  <li>✓ Progress tracking</li>
                  <li>✓ Official transcript & diploma</li>
                  <li>✓ Training guru</li>
                  <li className="text-green-600 font-bold">✓ GRATIS TEFL Training untuk guru</li>
                </ul>
                <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                  💬 Hubungi Kami via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mt-16 bg-orange-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">💡 Bandingkan: Bangun Program SMA Sendiri vs GED Partnership</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">Bangun Program SMA Intl Sendiri</p>
                <p className="text-2xl font-bold text-red-600">Rp 1-5 Miliar+</p>
                <p className="text-xs text-gray-400">(infrastruktur + akreditasi + guru)</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">GED via Study Buddy</p>
                <p className="text-2xl font-bold text-green-600">IDR 1.159.200/siswa/bulan</p>
                <p className="text-xs text-gray-400">(tanpa investasi infrastruktur)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Institutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cocok untuk Lembaga Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">📐</span>
              <h4 className="font-bold text-gray-900">SMP Formal</h4>
              <p className="text-xs text-gray-500 mt-1">Middle School yang ingin tawarkan jalur intl</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">🎓</span>
              <h4 className="font-bold text-gray-900">SMA Formal</h4>
              <p className="text-xs text-gray-500 mt-1">High School dengan program dual-credential</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">💬</span>
              <h4 className="font-bold text-gray-900">Lembaga Kursus</h4>
              <p className="text-xs text-gray-500 mt-1">Tawarkan program GED prep</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">📋</span>
              <h4 className="font-bold text-gray-900">PKBM / Homeschool</h4>
              <p className="text-xs text-gray-500 mt-1">Lengkapi sampai jenjang SMA internasional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tawarkan Ijazah SMA Internasional di Lembaga Anda</h2>
          <p className="text-orange-100 text-lg mb-6">Jadilah GED Prep Center dan buka pintu universitas dunia untuk siswa-siswi Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:studybuddyindonesia1@gmail.com" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
              📧 Email Kami
            </a>
            <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-700 transition">
              💬 WhatsApp Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
