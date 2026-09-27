import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useAdmin } from '../context/AdminContext';

export default function SchoolioFamilyPage() {
  const { content } = useAdmin();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Logo brand="schoolio" size="large" />
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm">🏠 Untuk Keluarga / Homeschool</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{content.products.schoolio.name} untuk Keluarga</h1>
            <p className="text-xl text-green-100 mb-6">Kurikulum homeschool terakreditasi WASC untuk anak PAUD sampai SMP Kelas 8. Neurodivergent-friendly, fleksibel, dan terjangkau.</p>
            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">💬 Daftar Sekarang →</a>
              <a href="https://www.schoolio.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-green-700 transition">Kunjungi Schoolio.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mengapa {content.products.schoolio.name} Cocok untuk Keluarga Anda?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🧩</span>
              <h3 className="font-bold text-gray-900 mb-2">Neurodivergent-Friendly</h3>
              <p className="text-sm text-gray-600">Dirancang khusus untuk anak ADHD, Autisme, dan gaya belajar berbeda.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📚</span>
              <h3 className="font-bold text-gray-900 mb-2">Online & Offline</h3>
              <p className="text-sm text-gray-600">Belajar online dengan video & kuis, atau cetak aktivitas offline.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🎓</span>
              <h3 className="font-bold text-gray-900 mb-2">Terakreditasi WASC</h3>
              <p className="text-sm text-gray-600">Accrediting Commission for Schools, Western Association of Schools and Colleges.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📊</span>
              <h3 className="font-bold text-gray-900 mb-2">Dashboard Progress</h3>
              <p className="text-sm text-gray-600">Pantau perkembangan anak, download transkrip kapan saja.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🚀</span>
              <h3 className="font-bold text-gray-900 mb-2">Future Readiness</h3>
              <p className="text-sm text-gray-600">Financial Literacy, Emotional Intelligence, Entrepreneurship.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🤝</span>
              <h3 className="font-bold text-gray-900 mb-2">Support Orang Tua</h3>
              <p className="text-sm text-gray-600">Weekly live office hours, 1-on-1 teacher booking, dan komunitas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mata Pelajaran (Grades K-8)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Mathematics', 'English Language Arts', 'Science', 'Social Studies', 'Future Readiness', 'Electives'].map((subject) => (
              <div key={subject} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="font-medium text-gray-800 text-sm">{subject}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">Mix and match subjects & levels — sesuaikan dengan kebutuhan anak Anda</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Harga untuk Keluarga</h2>
          <p className="text-center text-gray-600 mb-12">Hemat hingga 80% dibanding sekolah internasional!</p>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-green-500 overflow-hidden">
              <div className="bg-green-500 text-white p-4 text-center">
                <p className="font-bold text-lg">{content.products.schoolio.name}</p>
                <p className="text-green-100 text-sm">Platform Pembelajaran (Kurikulum Kanada, K–8)</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-1">{content.products.schoolio.price}<span className="text-sm font-normal text-gray-500">{content.products.schoolio.priceUnit}</span></p>
                <p className="text-xs text-gray-500 mb-4">Akses penuh semua fitur platform</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Akses semua mata pelajaran K-8</li>
                  <li>✓ Video lessons + printable PDFs</li>
                  <li>✓ Progress dashboard & transkrip</li>
                  <li>✓ Future Readiness library</li>
                  <li>✓ Rapor & transkrip internasional</li>
                  <li>✓ Neurodivergent-friendly</li>
                </ul>
                <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition">💬 Hubungi Kami via WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mt-16 bg-green-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">💡 Bandingkan dengan Sekolah Internasional</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">Sekolah Internasional</p>
                <p className="text-2xl font-bold text-red-600">Rp 150-500 jt/th</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500">{content.products.schoolio.name} via {content.brandName}</p>
                <p className="text-2xl font-bold text-green-600">{content.products.schoolio.price}/bulan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cara Memulai</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
              <h4 className="font-bold text-gray-900 mb-1">Daftar</h4>
              <p className="text-sm text-gray-600">Buat akun gratis, mulai 7 hari trial</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
              <h4 className="font-bold text-gray-900 mb-1">Pilih Kursus</h4>
              <p className="text-sm text-gray-600">Pre-loaded sesuai grade level anak</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
              <h4 className="font-bold text-gray-900 mb-1">Atur Jadwal</h4>
              <p className="text-sm text-gray-600">Buat jadwal sendiri atau pakai template</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">4</div>
              <h4 className="font-bold text-gray-900 mb-1">Pantau Progress</h4>
              <p className="text-sm text-gray-600">Dashboard lengkap & download transkrip</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Homeschool dengan {content.products.schoolio.name}?</h2>
          <p className="text-green-100 text-lg mb-6">Hubungi kami untuk konsultasi gratis!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">💬 Hubungi via WhatsApp →</a>
            <Link to="/schoolio/school" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition">Lihat Versi Sekolah →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
