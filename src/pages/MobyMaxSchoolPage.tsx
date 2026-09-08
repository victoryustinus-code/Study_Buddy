import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function MobyMaxSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="text-blue-200 hover:text-white text-sm">Beranda</Link>
              <span className="text-blue-300">/</span>
              <span className="text-blue-200 text-sm">MobyMax</span>
              <span className="text-blue-300">/</span>
              <span className="text-white text-sm font-medium">Sekolah & Lembaga</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="mobymax" size="large" />
              <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-4 py-1 text-sm font-bold">🏫 Untuk Sekolah & Lembaga Kursus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">MobyMax untuk Sekolah & Lembaga</h1>
            <p className="text-xl text-blue-100 mb-6">
              Platform pembelajaran adaptif #1 yang digunakan 1.5 juta+ guru di seluruh dunia. Upgrade program akademik lembaga Anda dengan solusi yang diakui internasional.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                💬 Request Demo →
              </a>
              <a href="https://www.mobymax.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">
                Kunjungi MobyMax.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Schools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mengapa Sekolah Memilih MobyMax?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Solusi lengkap yang menggantikan kebutuhan multiple edtech tools dengan satu platform terintegrasi.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🎯</span>
              <h3 className="font-bold text-gray-900 mb-2">Find & Fix Learning Gaps</h3>
              <p className="text-sm text-gray-600">Cara paling efektif meningkatkan hasil belajar siswa — temukan dan perbaiki skill yang hilang.</p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">💰</span>
              <h3 className="font-bold text-gray-900 mb-2">Hemat 90%+ Biaya EdTech</h3>
              <p className="text-sm text-gray-600">Hemat drastis dibanding biaya sekolah internasional. MobyMax via Study Buddy hanya IDR 655.200/siswa/bulan.</p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">📊</span>
              <h3 className="font-bold text-gray-900 mb-2">360° Progress Monitoring</h3>
              <p className="text-sm text-gray-600">Reporting untuk siswa, orang tua, guru, kepala sekolah, dan administrator distrik.</p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🎮</span>
              <h3 className="font-bold text-gray-900 mb-2">Maximum Engagement</h3>
              <p className="text-sm text-gray-600">Class rewards, games, badges, interactive lessons — siswa termotivasi belajar lebih banyak.</p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">⚡</span>
              <h3 className="font-bold text-gray-900 mb-2">Rapid Improvement</h3>
              <p className="text-sm text-gray-600">Siswa naik 1 full grade level hanya dalam 40 jam penggunaan. Hasil terukur!</p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">🌍</span>
              <h3 className="font-bold text-gray-900 mb-2">Diakui Internasional</h3>
              <p className="text-sm text-gray-600">425+ penghargaan, digunakan di sekolah internasional di seluruh dunia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💰 Penghematan Biaya untuk Sekolah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-red-50 rounded-xl p-6 mb-4">
                  <p className="text-sm text-red-600 font-semibold mb-1">Tanpa MobyMax</p>
                  <p className="text-3xl font-bold text-red-600">Rp 150-500 jt/tahun</p>
                  <p className="text-xs text-gray-500 mt-1">Biaya sekolah internasional per siswa</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <p className="text-sm text-green-600 font-semibold mb-1">Dengan MobyMax via Study Buddy</p>
                  <p className="text-3xl font-bold text-green-600">IDR 655.200/siswa/bulan</p>
                  <p className="text-xs text-gray-500 mt-1">Complete suite — curriculum + assessments + reporting</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                  <p className="text-5xl font-bold mb-2">80%+</p>
                  <p className="text-xl">Penghematan Biaya</p>
                  <p className="text-blue-200 text-sm mt-2">Jauh lebih hemat dibanding sekolah internasional!</p>
                </div>
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
                  Sebagai mitra Study Buddy, guru-guru di sekolah/lembaga Anda mendapatkan pelatihan TEFL (Teaching English as a Foreign Language) secara GRATIS.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Sertifikat TEFL 120 jam diakui internasional</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Meningkatkan kompetensi guru Anda</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Diferensiasi lembaga dari kompetitor</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Pelatihan online, fleksibel</li>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Sekolah & Lembaga</h2>
          <p className="text-center text-gray-600 mb-12">Harga per siswa untuk institusi Anda</p>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 overflow-hidden">
              <div className="bg-blue-500 text-white p-4 text-center">
                <p className="font-bold text-lg">MobyMax</p>
                <p className="text-blue-100 text-sm">Platform Pembelajaran (Adaptive Learning)</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">IDR 655.200<span className="text-sm font-normal text-gray-500">/siswa/bulan</span></p>
                <p className="text-xs text-gray-500 mb-4">Harga berlaku untuk institusi</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ All 60+ curriculum modules</li>
                  <li>✓ Full assessment suite</li>
                  <li>✓ Admin dashboard</li>
                  <li>✓ 360° reporting</li>
                  <li>✓ Teacher dashboard</li>
                  <li>✓ Training & onboarding</li>
                  <li className="text-green-600 font-bold">✓ GRATIS TEFL Training untuk guru</li>
                </ul>
                <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                  💬 Hubungi Kami via WhatsApp
                </a>
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
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">🎒</span>
              <h4 className="font-bold text-gray-900">SD Formal</h4>
              <p className="text-xs text-gray-500 mt-1">Elementary School</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">📐</span>
              <h4 className="font-bold text-gray-900">SMP Formal</h4>
              <p className="text-xs text-gray-500 mt-1">Middle School (sampai kelas 8)</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">💬</span>
              <h4 className="font-bold text-gray-900">Lembaga Kursus</h4>
              <p className="text-xs text-gray-500 mt-1">Tutoring & Learning Center</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-3 block">📋</span>
              <h4 className="font-bold text-gray-900">PKBM / Homeschool</h4>
              <p className="text-xs text-gray-500 mt-1">Community Learning Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Upgrade Program Akademik Lembaga Anda</h2>
          <p className="text-blue-100 text-lg mb-6">Demo gratis — lihat bagaimana MobyMax bisa meningkatkan hasil belajar siswa di lembaga Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:studybuddyindonesia1@gmail.com" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
              📧 Email Kami
            </a>
            <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-700 transition">
              💬 WhatsApp Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
