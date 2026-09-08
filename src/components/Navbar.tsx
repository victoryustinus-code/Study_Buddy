import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Logo brand="studybuddy" size="medium" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">Study Buddy</span>
                <span className="text-xs text-gray-500 -mt-1 hidden sm:block">where learning meets technology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition`}>
              Beranda
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition flex items-center">
                Schoolio <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/schoolio/family" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">Untuk Keluarga</Link>
                <Link to="/schoolio/school" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">Untuk Sekolah & Lembaga</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition flex items-center">
                MobyMax <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/mobymax/family" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">Untuk Keluarga</Link>
                <Link to="/mobymax/school" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">Untuk Sekolah & Lembaga</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition flex items-center">
                GED <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/ged/family" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">Untuk Keluarga</Link>
                <Link to="/ged/school" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">Untuk Sekolah & Lembaga</Link>
              </div>
            </div>
            <a href="https://wa.me/62881037380330" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition flex items-center space-x-1">
              <span>💬</span>
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block text-sm font-medium text-gray-600" onClick={() => setIsOpen(false)}>Beranda</Link>
            <div className="space-y-1 pl-3">
              <p className="text-xs font-semibold text-gray-400 uppercase">Schoolio</p>
              <Link to="/schoolio/family" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Untuk Keluarga</Link>
              <Link to="/schoolio/school" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Untuk Sekolah</Link>
            </div>
            <div className="space-y-1 pl-3">
              <p className="text-xs font-semibold text-gray-400 uppercase">MobyMax</p>
              <Link to="/mobymax/family" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Untuk Keluarga</Link>
              <Link to="/mobymax/school" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Untuk Sekolah</Link>
            </div>
            <div className="space-y-1 pl-3">
              <p className="text-xs font-semibold text-gray-400 uppercase">GED</p>
              <Link to="/ged/family" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Untuk Keluarga</Link>
              <Link to="/ged/school" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>Untuk Sekolah</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
