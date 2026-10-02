import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useAdmin } from '../context/AdminContext';

export default function MobyMaxSchoolPage() {
  const { content } = useAdmin();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="mobymax" size="large" />
              <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-4 py-1 text-sm font-bold">🏫 Untuk Sekolah & Lembaga Kursus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{content.products.mobymax.name} untuk Sekolah & Lembaga</h1>
            <p className="text-xl text-blue-100 mb-6">Platform pembelajaran adaptif #1 yang digunakan 1.5 juta+ guru di seluruh dunia. Upgrade program akademik lembaga Anda.</p>
            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">💬 Request Demo →</a>
              <a href="https://www.mobymax.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">Kunjungi MobyMax.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mengapa Sekolah Memilih {content.products.mobymax.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">🎯</span><h3 className="font-bold text-gray-900 mb-2">Find & Fix Learning Gaps</h3><p className="text-sm text-gray-600">Cara paling efektif meningkatkan hasil belajar siswa.</p></div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">💰</span><h3 className="font-bold text-gray-900 mb-2">Hemat Biaya EdTech</h3><p className="text-sm text-gray-600">Hemat drastis dibanding biaya sekolah internasional.</p></div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">📊</span><h3 className="font-bold text-gray-900 mb-2">360° Progress Monitoring</h3><p className="text-sm text-gray-600">Reporting untuk siswa, orang tua, guru, dan administrator.</p></div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">🎮</span><h3 className="font-bold text-gray-900 mb-2">Maximum Engagement</h3><p className="text-sm text-gray-600">Class rewards, games, badges, interactive lessons.</p></div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">⚡</span><h3 className="font-bold text-gray-900 mb-2">Rapid Improvement</h3><p className="text-sm text-gray-600">Siswa naik 1 full grade level dalam 40 jam.</p></div>
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">🌍</span><h3 className="font-bold text-gray-900 mb-2">Diakui Internasional</h3><p className="text-sm text-gray-600">425+ penghargaan, digunakan di seluruh dunia.</p></div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lihat {content.products.mobymax.name} Beraksi</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <span className="text-6xl block mb-4">🎥</span>
              <h3 className="text-2xl font-bold mb-4">Success Stories & Demo Videos</h3>
              <p className="text-blue-100 mb-6">Lihat bagaimana MobyMax membantu sekolah di seluruh dunia meningkatkan hasil belajar siswa</p>
              <a href="https://www.mobymax.com/success-videos" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                Tonton Video Sukses →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm font-bold mb-4">🎁 BONUS EKSKLUSIF</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Gratis Pelatihan TEFL untuk Guru Mitra</h2>
                <p className="text-gray-600 mb-4">Sebagai mitra {content.brandName}, guru-guru di sekolah/lembaga Anda mendapatkan pelatihan TEFL secara GRATIS.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Sertifikat TEFL 120 jam diakui internasional</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Meningkatkan kompetensi guru Anda</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
                  <span className="text-5xl block mb-3">🎓</span>
                  <p className="text-xl font-bold">TEFL Training</p>
                  <p className="text-3xl font-bold mt-3 text-yellow-300">GRATIS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Sekolah & Lembaga</h2>
          <p className="text-center text-gray-600 mb-8">Harga khusus berdasarkan jumlah siswa</p>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white p-4 text-center">
              <p className="font-bold text-lg">{content.products.mobymax.name} - Harga Lembaga</p>
              <p className="text-blue-100 text-sm">Platform Pembelajaran (Adaptive Learning)</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tier Siswa</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Diskon</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Harga per Siswa/Bulan</th>
                  </tr>
                </thead>
                <tbody>
                  {content.institutionTiers.map((tier, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{tier.tier}</td>
                      <td className="px-6 py-4 text-center">
                        {tier.discount !== '-' ? (
                          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{tier.discount}</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-bold text-gray-900">{tier.schoolioMobyMax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-gray-50 border-t">
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ All 60+ curriculum modules</li>
                <li>✓ Full assessment suite</li>
                <li>✓ Admin dashboard</li>
                <li>✓ 360° reporting</li>
                <li className="text-green-600 font-bold">✓ GRATIS TEFL Training untuk guru</li>
              </ul>
              <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">💬 Hubungi Kami untuk Penawaran</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Testimoni dari Lembaga Mitra</h2>
          <p className="text-center text-gray-600 mb-12">Apa kata sekolah dan lembaga yang sudah menggunakan {content.products.mobymax.name}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🏫</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">SMP Kristen Penabur</p>
                  <p className="text-sm text-gray-500">Surabaya</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"MobyMax membantu kami mengidentifikasi learning gap siswa dengan cepat. Hasilnya, nilai rata-rata siswa meningkat 30% dalam 6 bulan."</p>
              <div className="flex text-yellow-400 mt-3">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Kursus Bahasa Inggris CEF</p>
                  <p className="text-sm text-gray-500">Yogyakarta</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"Fitur differentiated learning-nya sangat membantu siswa kami yang memiliki level berbeda dalam satu kelas. Guru bisa fokus pada yang butuh bantuan."</p>
              <div className="flex text-yellow-400 mt-3">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">SD Islam Al-Azhar</p>
                  <p className="text-sm text-gray-500">Semarang</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"Dashboard reporting-nya sangat membantu kami dalam meeting dengan orang tua. Mereka bisa lihat progress anak secara real-time."</p>
              <div className="flex text-yellow-400 mt-3">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Upgrade Program Akademik Lembaga Anda</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${content.email}`} className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">📧 Email Kami</a>
            <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-700 transition">💬 WhatsApp Kami</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
