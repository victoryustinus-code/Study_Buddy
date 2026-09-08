import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function MobyMaxFamilyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500 to-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="text-blue-200 hover:text-white text-sm">Beranda</Link>
              <span className="text-blue-300">/</span>
              <span className="text-blue-200 text-sm">MobyMax</span>
              <span className="text-blue-300">/</span>
              <span className="text-white text-sm font-medium">Keluarga</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="mobymax" size="large" />
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm">🏠 Untuk Keluarga / Homeschool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">MobyMax untuk Keluarga</h1>
            <p className="text-xl text-blue-100 mb-6">
              Platform belajar adaptif paling award-winning di dunia. Temukan dan perbaiki learning gap anak Anda dari SD sampai SMP Kelas 8.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.mobymax.com/families" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                Coba Gratis 30 Hari →
              </a>
              <a href="https://www.mobymax.com/families" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">
                Kunjungi MobyMax.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">425+</p>
              <p className="text-sm text-gray-600">Penghargaan EdTech</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">1.5 Juta+</p>
              <p className="text-sm text-gray-600">Guru Menggunakan</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">60+</p>
              <p className="text-sm text-gray-600">Modul Kurikulum</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">1 Grade Level</p>
              <p className="text-sm text-gray-600">dalam 40 Jam Belajar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fitur Unggulan MobyMax</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🎯</span>
              <h3 className="font-bold text-gray-900 mb-2">Differentiated Learning</h3>
              <p className="text-sm text-gray-600">Adaptive learning di semua mata pelajaran K-8. Otomatis menemukan dan memperbaiki learning gap.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📝</span>
              <h3 className="font-bold text-gray-900 mb-2">Assessment & Diagnostic</h3>
              <p className="text-sm text-gray-600">Placement test adaptif, benchmark grade-level, dan skills diagnostic yang akurat.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🎮</span>
              <h3 className="font-bold text-gray-900 mb-2">Student Motivation</h3>
              <p className="text-sm text-gray-600">Sertifikat, badges, games, dan reward system yang membuat anak semangat belajar.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📊</span>
              <h3 className="font-bold text-gray-900 mb-2">Detailed Reporting</h3>
              <p className="text-sm text-gray-600">Laporan progress detail dan customizable. Pantau perkembangan anak secara real-time.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📖</span>
              <h3 className="font-bold text-gray-900 mb-2">60+ Subject Modules</h3>
              <p className="text-sm text-gray-600">Math, Early Reading, Reading, Language, Writing, Science, Social Studies — semua lengkap.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🏆</span>
              <h3 className="font-bold text-gray-900 mb-2">Most Awarded EdTech</h3>
              <p className="text-sm text-gray-600">Pemenang CODiE, EdTech Digest, Tech & Learning, dan 425+ penghargaan lainnya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mata Pelajaran (K-8)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Mathematics', 'Early Reading', 'Reading', 'Language Arts', 'Writing', 'Science', 'Social Studies', 'Vocabulary'].map((subject) => (
              <div key={subject} className="bg-white rounded-lg p-4 text-center shadow-sm border border-blue-100">
                <p className="font-medium text-gray-800 text-sm">{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Keluarga</h2>
          <p className="text-center text-gray-600 mb-12">Hemat hingga 80% dibanding sekolah internasional!</p>

          <div className="max-w-md mx-auto">
            {/* MobyMax Subscription */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 overflow-hidden">
              <div className="bg-blue-500 text-white p-4 text-center">
                <p className="font-bold text-lg">MobyMax</p>
                <p className="text-blue-100 text-sm">Platform Pembelajaran (Adaptive Learning)</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">IDR 655.200<span className="text-sm font-normal text-gray-500">/bulan/siswa</span></p>
                <p className="text-xs text-gray-500 mb-4">Akses penuh semua fitur platform</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Semua 60+ modul kurikulum</li>
                  <li>✓ Differentiated learning penuh</li>
                  <li>✓ Assessment & diagnostic lengkap</li>
                  <li>✓ Detailed reporting & progress</li>
                  <li>✓ Student motivation system</li>
                  <li>✓ Print progress reports</li>
                  <li>✓ IEP creation tools</li>
                </ul>
                <a href="mailto:info@studybuddy.id" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                  Hubungi Kami untuk Daftar
                </a>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">💡 Bandingkan dengan Sekolah Internasional</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">Sekolah Internasional</p>
                <p className="text-2xl font-bold text-red-600">Rp 150-500 jt/th</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">MobyMax via Study Buddy</p>
                <p className="text-2xl font-bold text-green-600">IDR 655.200/bulan</p>
                <p className="text-xs text-gray-400 mt-1">(IDR 7.862.400/tahun)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🏆 Penghargaan Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-sm text-blue-600 font-semibold mb-1">2025</p>
              <p className="font-bold text-gray-900">CODiE Award Winner</p>
              <p className="text-xs text-gray-500">Best Home Education Solution</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-sm text-blue-600 font-semibold mb-1">2025</p>
              <p className="font-bold text-gray-900">EdTech Digest</p>
              <p className="text-xs text-gray-500">Best Student Study Tools</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <p className="text-sm text-blue-600 font-semibold mb-1">2025</p>
              <p className="font-bold text-gray-900">The Tech Edvocate</p>
              <p className="text-xs text-gray-500">Best Global EdTech Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tutup Learning Gap Anak Anda Sekarang</h2>
          <p className="text-blue-100 text-lg mb-6">Coba gratis 30 hari — tanpa kartu kredit. Lihat sendiri hasilnya!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.mobymax.com/families" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
              Mulai 30 Hari Gratis →
            </a>
            <Link to="/mobymax/school" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition">
              Lihat Versi Sekolah →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
