import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo brand="studybuddy" size="medium" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Study Buddy</span>
                <span className="text-xs text-gray-400 -mt-1">where learning meets technology</span>
              </div>
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
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <a href="mailto:studybuddyindonesia1@gmail.com" className="hover:text-white transition">studybuddyindonesia1@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <span>💬</span>
                <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">+62 881-0373-80330</a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>Jl. Nuasa Utama Raya No. 257, Jimbaran, Kuta Selatan - Badung</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <span className="text-sm">💬</span>
              </a>
              <a href="mailto:studybuddyindonesia1@gmail.com" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <span className="text-sm">📧</span>
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
