import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <span className="text-xl font-bold">Study Buddy</span>
            </div>
            <p className="text-gray-400 text-sm">
              Mitra sekolah dan lembaga kursus untuk upgrade program pendidikan digital dengan rapor dan ijazah internasional.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produk Kami</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/schoolio/family" className="hover:text-white transition">Schoolio (PAUD-SMP)</Link></li>
              <li><Link to="/mobymax/family" className="hover:text-white transition">MobyMax (SD-SMP)</Link></li>
              <li><Link to="/ged/family" className="hover:text-white transition">GED (SMP-SMA)</Link></li>
            </ul>
          </div>

          {/* For Schools */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Untuk Sekolah</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/schoolio/school" className="hover:text-white transition">Schoolio untuk Sekolah</Link></li>
              <li><Link to="/mobymax/school" className="hover:text-white transition">MobyMax untuk Sekolah</Link></li>
              <li><Link to="/ged/school" className="hover:text-white transition">GED untuk Sekolah</Link></li>
              <li className="text-green-400 font-medium">🎓 Gratis Pelatihan TEFL untuk Mitra!</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@studybuddy.id</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span className="text-sm">📘</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <span className="text-sm">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <span className="text-sm">💬</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 Study Buddy. Semua hak dilindungi. | Mitra resmi Schoolio, MobyMax, dan GED untuk Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
