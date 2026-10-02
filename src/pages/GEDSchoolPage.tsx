import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useAdmin } from '../context/AdminContext';

export default function GEDSchoolPage() {
  const { content } = useAdmin();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-gradient-to-br from-red-700 to-orange-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="ged" size="large" />
              <span className="inline-block bg-yellow-400 text-gray-900 rounded-full px-4 py-1 text-sm font-bold">🏫 Untuk Sekolah & Lembaga Kursus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{content.products.ged.name} untuk Sekolah & Lembaga</h1>
            <p className="text-xl text-orange-100 mb-6">Tawarkan program persiapan ijazah SMA internasional kepada siswa Anda. {content.products.ged.name} diterima di 98% universitas dan perusahaan dunia.</p>
            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">💬 Jadi Mitra →</a>
              <a href="https://www.essentialed.com/educators/ged-academy" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-orange-700 transition">Kunjungi GED Academy</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Keuntungan {content.products.ged.name} untuk Lembaga Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">🌍</span><h3 className="font-bold text-gray-900 mb-2">Ijazah Diakui Dunia</h3><p className="text-sm text-gray-600">{content.products.ged.name} credential diterima di 98% universitas dan perusahaan.</p></div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">💰</span><h3 className="font-bold text-gray-900 mb-2">Hemat Biaya Operasional</h3><p className="text-sm text-gray-600">Tidak perlu membangun program SMA sendiri.</p></div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">🎓</span><h3 className="font-bold text-gray-900 mb-2">Jalur ke Universitas</h3><p className="text-sm text-gray-600">Siswa bisa langsung masuk universitas di seluruh dunia.</p></div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">📈</span><h3 className="font-bold text-gray-900 mb-2">Nilai Jual Tinggi</h3><p className="text-sm text-gray-600">Tawarkan program "persiapan kuliah internasional".</p></div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">🔄</span><h3 className="font-bold text-gray-900 mb-2">Sistem Terintegrasi</h3><p className="text-sm text-gray-600">Lanjutkan dari MobyMax ke {content.products.ged.name}.</p></div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition"><span className="text-3xl mb-3 block">📊</span><h3 className="font-bold text-gray-900 mb-2">21 Juta+ Lulusan</h3><p className="text-sm text-gray-600">Jaringan global lulusan {content.products.ged.name} yang sukses.</p></div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lihat {content.products.ged.name} Beraksi</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/cSrSJeSClvA"
                title="GED Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm font-bold mb-4">🎁 BONUS EKSKLUSIF</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Gratis Pelatihan TEFL untuk Guru Mitra</h2>
                <p className="text-gray-600 mb-4">Sekolah dan lembaga kursus yang menjadi mitra {content.brandName} mendapatkan pelatihan TEFL secara GRATIS.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Sertifikat TEFL 120 jam diakui internasional</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Guru siap mengajar dengan standar internasional</li>
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

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Sekolah & Lembaga</h2>
          <p className="text-center text-gray-600 mb-8">Harga khusus berdasarkan jumlah siswa</p>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-orange-500 text-white p-4 text-center">
              <p className="font-bold text-lg">{content.products.ged.name} - Harga Lembaga</p>
              <p className="text-orange-100 text-sm">Program Persiapan Pendidikan / {content.products.ged.name}</p>
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
                          <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">{tier.discount}</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-bold text-gray-900">{tier.ged}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-gray-50 border-t">
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Program persiapan 4 subjek</li>
                <li>✓ Akses materi persiapan</li>
                <li>✓ Study materials & practice tests</li>
                <li>✓ Official transcript & diploma</li>
                <li className="text-green-600 font-bold">✓ GRATIS TEFL Training untuk guru</li>
              </ul>
              <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition">💬 Hubungi Kami untuk Penawaran</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Testimoni dari Lembaga Mitra</h2>
          <p className="text-center text-gray-600 mb-12">Apa kata sekolah dan lembaga yang sudah menawarkan program {content.products.ged.name}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🏫</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">SMA Plus PGRI</p>
                  <p className="text-sm text-gray-500">Tangerang</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"Program GED membantu siswa kami yang ingin kuliah di luar negeri. Banyak yang berhasil masuk universitas top di AS dan Australia."</p>
              <div className="flex text-yellow-400 mt-3">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Kursus Persiapan Kuliah Global</p>
                  <p className="text-sm text-gray-500">Jakarta</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"Materi persiapan GED-nya sangat komprehensif. Siswa kami punya tingkat kelulusan 95%. Sangat recommended untuk lembaga kursus."</p>
              <div className="flex text-yellow-400 mt-3">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">PKBM Karya Mandiri</p>
                  <p className="text-sm text-gray-500">Medan</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"Banyak siswa kami yang tidak bisa lanjut SMA karena berbagai alasan. Program GED memberikan mereka kesempatan kedua untuk meraih masa depan."</p>
              <div className="flex text-yellow-400 mt-3">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tawarkan Ijazah SMA Internasional di Lembaga Anda</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${content.email}`} className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">📧 Email Kami</a>
            <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-700 transition">💬 WhatsApp Kami</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
