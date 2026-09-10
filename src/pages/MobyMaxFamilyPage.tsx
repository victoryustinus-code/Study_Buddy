import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useAdmin } from '../context/AdminContext';

export default function MobyMaxFamilyPage() {
  const { content } = useAdmin();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-gradient-to-br from-blue-500 to-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="mobymax" size="large" />
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm">🏠 Untuk Keluarga / Homeschool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{content.products.mobymax.name} untuk Keluarga</h1>
            <p className="text-xl text-blue-100 mb-6">Platform belajar adaptif paling award-winning di dunia. Temukan dan perbaiki learning gap anak Anda dari SD sampai SMP Kelas 8.</p>
            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">💬 Daftar Sekarang →</a>
              <a href="https://www.mobymax.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">Kunjungi MobyMax.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fitur Unggulan {content.products.mobymax.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6"><span className="text-3xl mb-3 block">🎯</span><h3 className="font-bold text-gray-900 mb-2">Differentiated Learning</h3><p className="text-sm text-gray-600">Adaptive learning di semua mata pelajaran K-8.</p></div>
            <div className="bg-blue-50 rounded-xl p-6"><span className="text-3xl mb-3 block">📝</span><h3 className="font-bold text-gray-900 mb-2">Assessment & Diagnostic</h3><p className="text-sm text-gray-600">Placement test adaptif dan skills diagnostic.</p></div>
            <div className="bg-blue-50 rounded-xl p-6"><span className="text-3xl mb-3 block">🎮</span><h3 className="font-bold text-gray-900 mb-2">Student Motivation</h3><p className="text-sm text-gray-600">Sertifikat, badges, games, dan reward system.</p></div>
            <div className="bg-blue-50 rounded-xl p-6"><span className="text-3xl mb-3 block">📊</span><h3 className="font-bold text-gray-900 mb-2">Detailed Reporting</h3><p className="text-sm text-gray-600">Laporan progress detail dan customizable.</p></div>
            <div className="bg-blue-50 rounded-xl p-6"><span className="text-3xl mb-3 block">📖</span><h3 className="font-bold text-gray-900 mb-2">60+ Subject Modules</h3><p className="text-sm text-gray-600">Math, Reading, Language, Science, Social Studies.</p></div>
            <div className="bg-blue-50 rounded-xl p-6"><span className="text-3xl mb-3 block">🏆</span><h3 className="font-bold text-gray-900 mb-2">Most Awarded EdTech</h3><p className="text-sm text-gray-600">425+ penghargaan EdTech internasional.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Keluarga</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 overflow-hidden">
              <div className="bg-blue-500 text-white p-4 text-center">
                <p className="font-bold text-lg">{content.products.mobymax.name}</p>
                <p className="text-blue-100 text-sm">Platform Pembelajaran (Adaptive Learning)</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">{content.products.mobymax.price}<span className="text-sm font-normal text-gray-500">{content.products.mobymax.priceUnit}</span></p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Semua 60+ modul kurikulum</li>
                  <li>✓ Differentiated learning penuh</li>
                  <li>✓ Assessment & diagnostic lengkap</li>
                  <li>✓ Detailed reporting & progress</li>
                  <li>✓ Student motivation system</li>
                </ul>
                <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">💬 Hubungi Kami via WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">💡 Bandingkan dengan Sekolah Internasional</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-lg p-4"><p className="text-sm text-gray-500">Sekolah Internasional</p><p className="text-2xl font-bold text-red-600">Rp 150-500 jt/th</p></div>
              <div className="bg-white rounded-lg p-4"><p className="text-sm text-gray-500">{content.products.mobymax.name} via {content.brandName}</p><p className="text-2xl font-bold text-green-600">{content.products.mobymax.price}/bulan</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tutup Learning Gap Anak Anda Sekarang</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">💬 Hubungi via WhatsApp →</a>
            <Link to="/mobymax/school" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition">Lihat Versi Sekolah →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
