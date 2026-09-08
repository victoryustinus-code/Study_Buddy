import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GEDFamilyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-red-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="text-orange-200 hover:text-white text-sm">Beranda</Link>
              <span className="text-orange-300">/</span>
              <span className="text-orange-200 text-sm">GED</span>
              <span className="text-orange-300">/</span>
              <span className="text-white text-sm font-medium">Keluarga</span>
            </div>
            <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm mb-4">🏠 Untuk Keluarga / Homeschool</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">GED untuk Keluarga</h1>
            <p className="text-xl text-orange-100 mb-6">
              Ijazah setara SMA yang diterima di 98% universitas dan perusahaan di seluruh dunia. Persiapan tes internasional untuk kelas 9-12.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://app.ged.com/signup" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                Daftar Akun Gratis →
              </a>
              <a href="https://www.ged.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-orange-700 transition">
                Kunjungi GED.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-orange-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-orange-600">98%</p>
              <p className="text-sm text-gray-600">Universitas & Perusahaan Menerima</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">21 Juta+</p>
              <p className="text-sm text-gray-600">Lulusan di Seluruh Dunia</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">+$9,000</p>
              <p className="text-sm text-gray-600">Rata-rata Penghasilan Lebih/Tahun</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">4</p>
              <p className="text-sm text-gray-600">Subjek Tes</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is GED */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apa itu GED?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg mb-6">
              <strong>GED® (General Education Development)</strong> adalah tes yang mengukur pengetahuan setingkat sekolah menengah atas (SMA). Lulus tes GED berarti Anda mendapatkan kredensial setara diploma SMA yang diakui secara internasional.
            </p>
            <p className="text-gray-600 mb-6">
              GED adalah jalur lanjutan dari MobyMax untuk siswa kelas 9-12. Setelah menyelesaikan program MobyMax (kelas SD-SMP), siswa dapat melanjutkan ke program persiapan GED untuk mendapatkan ijazah setara SMA yang diterima di kampus-kampus dunia.
            </p>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <p className="font-bold text-orange-800 mb-2">🎓 Alur Belajar Lengkap via Study Buddy:</p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Schoolio (PAUD-8)</span>
                <span className="text-gray-400">→</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">MobyMax (K-8)</span>
                <span className="text-gray-400">→</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">GED (9-12)</span>
                <span className="text-gray-400">→</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">🎓 Universitas Dunia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">4 Subjek Tes GED</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <span className="text-4xl mb-3 block">🔢</span>
              <h3 className="font-bold text-gray-900 mb-2">Mathematical Reasoning</h3>
              <p className="text-sm text-gray-600">115 menit. Aljabar, geometri, statistika, dan problem solving.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <span className="text-4xl mb-3 block">🔬</span>
              <h3 className="font-bold text-gray-900 mb-2">Science</h3>
              <p className="text-sm text-gray-600">90 menit. Life science, physical science, earth & space science.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <span className="text-4xl mb-3 block">🌍</span>
              <h3 className="font-bold text-gray-900 mb-2">Social Studies</h3>
              <p className="text-sm text-gray-600">70 menit. US history, world history, civics, economics, geography.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <span className="text-4xl mb-3 block">📝</span>
              <h3 className="font-bold text-gray-900 mb-2">Reasoning Through Language Arts</h3>
              <p className="text-sm text-gray-600">150 menit. Reading, writing, grammar, dan essay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Biaya Tes GED</h2>
          <p className="text-center text-gray-600 mb-12">Investasi kecil untuk ijazah yang membuka pintu ke universitas dunia</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Per Subject */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <p className="font-bold text-lg text-gray-900">Per Subjek</p>
                <p className="text-gray-500 text-sm">Bayar per tes</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">$36<span className="text-sm font-normal text-gray-500">/subjek</span></p>
                <p className="text-xs text-gray-500 mb-4">Atau $30-$40 tergantung negara bagian</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ 1 subjek tes</li>
                  <li>✓ Same-day scoring</li>
                  <li>✓ Online or test center</li>
                  <li>✓ Personalized score report</li>
                </ul>
                <a href="https://app.ged.com/signup" target="_blank" rel="noopener noreferrer" className="block w-full bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-bold hover:bg-gray-300 transition">
                  Daftar Sekarang
                </a>
              </div>
            </div>

            {/* Full Battery */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-500 overflow-hidden">
              <div className="bg-orange-500 text-white p-4 text-center">
                <p className="font-bold text-lg">Full Battery (4 Subjek)</p>
                <p className="text-orange-100 text-sm">Paket lengkap</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">$144<span className="text-sm font-normal text-gray-500">/total</span></p>
                <p className="text-xs text-gray-500 mb-4">($36 × 4 subjek)</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Semua 4 subjek tes</li>
                  <li>✓ Same-day scoring</li>
                  <li>✓ Official transcript</li>
                  <li>✓ GED Diploma</li>
                  <li>✓ Diterima 98% universitas</li>
                  <li>✓ Bisa cicil per subjek</li>
                </ul>
                <a href="https://app.ged.com/signup" target="_blank" rel="noopener noreferrer" className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                  Mulai Persiapan
                </a>
              </div>
            </div>

            {/* GED+ */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4 text-center">
                <p className="font-bold text-lg">GED+</p>
                <p className="text-gray-300 text-sm">Dengan personal advisor</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">Custom</p>
                <p className="text-xs text-gray-500 mb-4">Premium support</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Personal advisor</li>
                  <li>✓ Study tools lengkap</li>
                  <li>✓ Practice tests</li>
                  <li>✓ Continued access sampai lulus</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="https://www.ged.com/study/ged-plus.html" target="_blank" rel="noopener noreferrer" className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-bold hover:bg-gray-900 transition">
                  Pelajari GED+
                </a>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mt-16 bg-orange-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">💡 Bandingkan dengan Biaya SMA Internasional</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">SMA Internasional (4 tahun)</p>
                <p className="text-2xl font-bold text-red-600">Rp 600 jt - 2 M</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">GED via Study Buddy</p>
                <p className="text-2xl font-bold text-green-600">Rp 2-3 jt</p>
                <p className="text-xs text-gray-400">(biaya tes saja)</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">*Belum termasuk biaya persiapan belajar. Total tetap jauh lebih hemat dibanding sekolah internasional!</p>
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cara Persiapan Tes GED</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl mb-3 block">📱</span>
              <h3 className="font-bold text-gray-900 mb-2">GED & Me App</h3>
              <p className="text-sm text-gray-600">Practice questions, video lessons, AI tutor feedback, track study time — semua dari HP Anda.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl mb-3 block">👩‍🏫</span>
              <h3 className="font-bold text-gray-900 mb-2">GED Classes</h3>
              <p className="text-sm text-gray-600">Kelas lokal atau online. Belajar dengan instruktur berpengalaman.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl mb-3 block">📚</span>
              <h3 className="font-bold text-gray-900 mb-2">Self-Study</h3>
              <p className="text-sm text-gray-600">Belajar mandiri dengan buku dan materi digital. Fleksibel sesuai jadwal Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Raih Ijazah Setara SMA yang Diakui Dunia</h2>
          <p className="text-orange-100 text-lg mb-6">Buka pintu ke universitas dan karir global dengan GED. Mulai persiapan Anda hari ini!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.ged.com/signup" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
              Daftar Akun Gratis →
            </a>
            <Link to="/ged/school" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-700 transition">
              Lihat Versi Sekolah →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
