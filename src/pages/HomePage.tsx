import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🎓 Mitra Pendidikan Digital Internasional</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Upgrade Program Sekolah Anda dengan <span className="text-yellow-300">Platform Belajar Digital</span> Bertaraf Internasional
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Study Buddy membantu sekolah dan lembaga kursus menyediakan LMS dengan rapor & ijazah internasional — hemat hingga <strong className="text-yellow-300">80% biaya</strong> dibanding sekolah internasional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="#produk" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition shadow-lg">
                Lihat Produk Kami
              </Link>
              <Link to="#kontak" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition">
                Jadi Mitra Sekolah
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">3</p>
              <p className="text-gray-600 text-sm mt-1">Platform Digital</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">PAUD-SMA</p>
              <p className="text-gray-600 text-sm mt-1">Jenjang Lengkap</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">80%</p>
              <p className="text-gray-600 text-sm mt-1">Hemat Biaya</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">🌍</p>
              <p className="text-gray-600 text-sm mt-1">Ijazah Diakui Dunia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Belajar Digital Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tiga platform LMS internasional yang diakui, dengan rapor dan ijazah yang diterima di seluruh dunia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Schoolio */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">PAUD - SMP Kelas 8</span>
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold">Schoolio</h3>
                <p className="text-green-100 text-sm mt-2">Kurikulum lengkap untuk homeschool & sekolah</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    WASC Accredited (terakreditasi internasional)
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Neurodivergent-friendly (ADHD, Autisme)
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Online & offline blended learning
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Math, ELA, Science, Social Studies, Future Readiness
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Rapor & transkrip internasional
                  </li>
                </ul>
                <div className="border-t pt-4 mb-4">
                  <p className="text-sm text-gray-500">Mulai dari</p>
                  <p className="text-2xl font-bold text-gray-900">$29.99<span className="text-sm font-normal text-gray-500">/bulan/siswa</span></p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/schoolio/family" className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-green-100 transition">
                    👨‍👩‍👧 Keluarga
                  </Link>
                  <Link to="/schoolio/school" className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-green-700 transition">
                    🏫 Sekolah
                  </Link>
                </div>
              </div>
            </div>

            {/* MobyMax */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">SD - SMP Kelas 8</span>
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold">MobyMax</h3>
                <p className="text-blue-100 text-sm mt-2">Persiapan akademik bertaraf internasional</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-blue-500 mr-2">✓</span>
                    425+ penghargaan EdTech internasional
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-blue-500 mr-2">✓</span>
                    Adaptive learning untuk semua mata pelajaran K-8
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-blue-500 mr-2">✓</span>
                    60+ modul kurikulum & asesmen
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-blue-500 mr-2">✓</span>
                    Naik 1 level kelas dalam 40 jam belajar
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-blue-500 mr-2">✓</span>
                    Diakui secara internasional
                  </li>
                </ul>
                <div className="border-t pt-4 mb-4">
                  <p className="text-sm text-gray-500">Mulai dari</p>
                  <p className="text-2xl font-bold text-gray-900">$7.99<span className="text-sm font-normal text-gray-500">/bulan/siswa</span></p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/mobymax/family" className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-100 transition">
                    👨‍👩‍👧 Keluarga
                  </Link>
                  <Link to="/mobymax/school" className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition">
                    🏫 Sekolah
                  </Link>
                </div>
              </div>
            </div>

            {/* GED */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-orange-400 to-red-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">Kelas 9 - 12 (SMA)</span>
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold">GED</h3>
                <p className="text-orange-100 text-sm mt-2">Ijazah SMA setara yang diterima kampus dunia</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-orange-500 mr-2">✓</span>
                    Ijazah setara SMA diterima 98% universitas AS
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-orange-500 mr-2">✓</span>
                    21 juta+ lulusan di seluruh dunia
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-orange-500 mr-2">✓</span>
                    4 subjek: Math, Science, Social Studies, RLA
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-orange-500 mr-2">✓</span>
                    Rata-rata penghasilan +$9,000/tahun
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-orange-500 mr-2">✓</span>
                    Persiapan kuliah & karir global
                  </li>
                </ul>
                <div className="border-t pt-4 mb-4">
                  <p className="text-sm text-gray-500">Biaya tes</p>
                  <p className="text-2xl font-bold text-gray-900">$36<span className="text-sm font-normal text-gray-500">/subjek (total $144)</span></p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/ged/family" className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-orange-100 transition">
                    👨‍👩‍👧 Keluarga
                  </Link>
                  <Link to="/ged/school" className="bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-orange-700 transition">
                    🏫 Sekolah
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Buddy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Study Buddy?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami adalah jembatan antara sekolah/lembaga kursus Anda dengan platform pendidikan digital bertaraf internasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hemat Biaya Hingga 80%</h3>
              <p className="text-gray-600 text-sm">
                Bandingkan dengan sekolah internasional yang bisa mencapai Rp 200-500 juta/tahun. Platform kami jauh lebih terjangkau.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ijazah Internasional</h3>
              <p className="text-gray-600 text-sm">
                Rapor dan ijazah yang diakui secara internasional, diterima di universitas-universitas terbaik dunia.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gratis TEFL Training</h3>
              <p className="text-gray-600 text-sm">
                Mitra sekolah dan lembaga kursus mendapat pelatihan TEFL (Teaching English as a Foreign Language) secara GRATIS.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapor Digital Lengkap</h3>
              <p className="text-gray-600 text-sm">
                Sistem pelaporan progress belajar yang detail untuk siswa, orang tua, guru, dan administrator.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧩</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inklusif & Adaptif</h3>
              <p className="text-gray-600 text-sm">
                Mendukung anak neurodivergent (ADHD, Autisme) dengan desain yang ramah dan fleksibel untuk semua gaya belajar.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Siap Pakai</h3>
              <p className="text-gray-600 text-sm">
                Implementasi cepat tanpa ribet. Kami bantu setup, training guru, dan pendampingan penuh untuk lembaga Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">💡 Hemat Biaya Pendidikan Internasional</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bandingkan biaya pendidikan internasional konvensional dengan platform Study Buddy
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Komponen Biaya</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Sekolah Internasional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold bg-green-600">Study Buddy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Biaya per tahun (per siswa)</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">Rp 150-500 juta</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">Rp 5-15 juta</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Kurikulum internasional</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓ (mahal)</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">✓ (terjangkau)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Ijazah diakui dunia</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">✓</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Fleksibilitas waktu & tempat</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Terbatas</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">100% Fleksibel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Pelatihan guru TEFL</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">Biaya tambahan</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">GRATIS untuk mitra!</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">Total Penghematan</td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center text-lg font-bold text-green-600 bg-green-50">Hemat hingga 80-90%!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Untuk Siapa Platform Kami?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <span className="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
              <h3 className="font-bold text-gray-900 mb-2">Keluarga / Orang Tua</h3>
              <p className="text-sm text-gray-600">Homeschool, after-school support, persiapan ujian internasional</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <span className="text-4xl mb-4 block">🏫</span>
              <h3 className="font-bold text-gray-900 mb-2">Lembaga Kursus</h3>
              <p className="text-sm text-gray-600">Kursus bahasa Inggris, bimbingan belajar, les privat</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <span className="text-4xl mb-4 block">📋</span>
              <h3 className="font-bold text-gray-900 mb-2">PKBM / Pengelola Homeschool</h3>
              <p className="text-sm text-gray-600">Pusat kegiatan belajar masyarakat, komunitas homeschool</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <span className="text-4xl mb-4 block">🎒</span>
              <h3 className="font-bold text-gray-900 mb-2">Sekolah Formal (PAUD-SMA)</h3>
              <p className="text-sm text-gray-600">PAUD, SD, SMP, SMA yang ingin upgrade program digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEFL Training */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">🎓 Bonus Eksklusif untuk Mitra</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gratis Pelatihan TEFL untuk Sekolah & Lembaga Kursus Mitra</h2>
              <p className="text-green-100 text-lg mb-6">
                TEFL (Teaching English as Foreign Language) adalah sertifikasi internasional untuk mengajar bahasa Inggris. Sebagai mitra Study Buddy, guru-guru di lembaga Anda mendapatkan pelatihan TEFL secara GRATIS.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-green-100">
                  <span className="mr-3">✅</span> Sertifikasi TEFL diakui internasional
                </li>
                <li className="flex items-center text-green-100">
                  <span className="mr-3">✅</span> Meningkatkan kualitas pengajar di lembaga Anda
                </li>
                <li className="flex items-center text-green-100">
                  <span className="mr-3">✅</span> Nilai jual lebih untuk lembaga kursus Anda
                </li>
                <li className="flex items-center text-green-100">
                  <span className="mr-3">✅</span> Pelatihan online fleksibel
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <span className="text-6xl block mb-4">🎓</span>
                <p className="text-2xl font-bold mb-2">TEFL Certified</p>
                <p className="text-green-200">120-Hour Training</p>
                <p className="text-3xl font-bold mt-4 text-yellow-300">GRATIS</p>
                <p className="text-green-200 text-sm mt-1">untuk mitra sekolah & lembaga</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Upgrade Program Pendidikan Anda?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Hubungi kami untuk konsultasi gratis dan temukan platform yang tepat untuk kebutuhan sekolah atau lembaga Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@studybuddy.id" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
              📧 Email Kami
            </a>
            <a href="https://wa.me/6281234567890" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition">
              💬 WhatsApp
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">Atau jadwalkan demo gratis untuk melihat platform kami beraksi!</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
