import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

export default function AdminDashboard() {
  const { content, updateContent, resetContent, logout } = useAdmin();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const handleReset = () => {
    resetContent();
    setShowResetConfirm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Kelola konten website Study Buddy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {saved && <span className="text-green-600 text-sm font-medium animate-pulse">✓ Tersimpan</span>}
              <button onClick={() => navigate('/')} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition">Lihat Website</button>
              <button onClick={handleLogout} className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-sm p-4 space-y-2">
              <button onClick={() => setActiveTab('general')} className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'general' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>🏠 Umum & Brand</button>
              <button onClick={() => setActiveTab('hero')} className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'hero' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>🎯 Hero Section</button>
              <button onClick={() => setActiveTab('products')} className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'products' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>📦 Produk & Harga</button>
              <button onClick={() => setActiveTab('contact')} className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'contact' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>📞 Kontak & Alamat</button>
              <button onClick={() => setActiveTab('theme')} className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'theme' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>🎨 Tema & Warna</button>
              <button onClick={() => setActiveTab('settings')} className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>⚙️ Pengaturan</button>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Umum & Brand</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Brand</label>
                    <input type="text" value={content.brandName} onChange={(e) => updateContent({ brandName: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                    <input type="text" value={content.tagline} onChange={(e) => updateContent({ tagline: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">💡 Perubahan akan otomatis tersimpan dan langsung terlihat di website.</p>
                  </div>
                </div>
              )}

              {activeTab === 'hero' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Hero Section</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Badge Text</label>
                    <input type="text" value={content.heroBadge} onChange={(e) => updateContent({ heroBadge: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Judul Utama</label>
                    <textarea value={content.heroTitle} onChange={(e) => updateContent({ heroTitle: e.target.value })} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                    <textarea value={content.heroSubtitle} onChange={(e) => updateContent({ heroSubtitle: e.target.value })} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                </div>
              )}

              {activeTab === 'products' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Produk & Harga</h2>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Schoolio</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Nama Produk</label>
                        <input type="text" value={content.products.schoolio.name} onChange={(e) => updateContent({ products: { ...content.products, schoolio: { ...content.products.schoolio, name: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Deskripsi</label>
                        <input type="text" value={content.products.schoolio.description} onChange={(e) => updateContent({ products: { ...content.products, schoolio: { ...content.products.schoolio, description: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Harga</label>
                          <input type="text" value={content.products.schoolio.price} onChange={(e) => updateContent({ products: { ...content.products, schoolio: { ...content.products.schoolio, price: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Satuan</label>
                          <input type="text" value={content.products.schoolio.priceUnit} onChange={(e) => updateContent({ products: { ...content.products, schoolio: { ...content.products.schoolio, priceUnit: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">MobyMax</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Nama Produk</label>
                        <input type="text" value={content.products.mobymax.name} onChange={(e) => updateContent({ products: { ...content.products, mobymax: { ...content.products.mobymax, name: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Deskripsi</label>
                        <input type="text" value={content.products.mobymax.description} onChange={(e) => updateContent({ products: { ...content.products, mobymax: { ...content.products.mobymax, description: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Harga</label>
                          <input type="text" value={content.products.mobymax.price} onChange={(e) => updateContent({ products: { ...content.products, mobymax: { ...content.products.mobymax, price: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Satuan</label>
                          <input type="text" value={content.products.mobymax.priceUnit} onChange={(e) => updateContent({ products: { ...content.products, mobymax: { ...content.products.mobymax, priceUnit: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">GED</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Nama Produk</label>
                        <input type="text" value={content.products.ged.name} onChange={(e) => updateContent({ products: { ...content.products, ged: { ...content.products.ged, name: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Deskripsi</label>
                        <input type="text" value={content.products.ged.description} onChange={(e) => updateContent({ products: { ...content.products, ged: { ...content.products.ged, description: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Harga</label>
                          <input type="text" value={content.products.ged.price} onChange={(e) => updateContent({ products: { ...content.products, ged: { ...content.products.ged, price: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Satuan</label>
                          <input type="text" value={content.products.ged.priceUnit} onChange={(e) => updateContent({ products: { ...content.products, ged: { ...content.products.ged, priceUnit: e.target.value } } })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontak & Alamat</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" value={content.email} onChange={(e) => updateContent({ email: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp (format: 62xxx tanpa + atau 0)</label>
                    <input type="text" value={content.whatsapp} onChange={(e) => updateContent({ whatsapp: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
                    <textarea value={content.address} onChange={(e) => updateContent({ address: e.target.value })} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                  </div>
                </div>
              )}

              {activeTab === 'theme' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Tema & Warna</h2>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">⚠️ Fitur tema warna akan segera tersedia. Saat ini website menggunakan tema default.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Warna Primer</label>
                    <div className="flex items-center space-x-3">
                      <input type="color" value={content.primaryColor} onChange={(e) => updateContent({ primaryColor: e.target.value })} className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer" />
                      <input type="text" value={content.primaryColor} onChange={(e) => updateContent({ primaryColor: e.target.value })} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Warna Sekunder</label>
                    <div className="flex items-center space-x-3">
                      <input type="color" value={content.secondaryColor} onChange={(e) => updateContent({ secondaryColor: e.target.value })} className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer" />
                      <input type="text" value={content.secondaryColor} onChange={(e) => updateContent({ secondaryColor: e.target.value })} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onBlur={handleSave} />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Pengaturan</h2>
                  <div className="border border-red-200 rounded-lg p-6">
                    <h3 className="font-semibold text-red-800 mb-3">Reset Semua Konten</h3>
                    <p className="text-sm text-gray-600 mb-4">Ini akan mengembalikan semua konten ke pengaturan default. Tindakan ini tidak dapat dibatalkan.</p>
                    {!showResetConfirm ? (
                      <button onClick={() => setShowResetConfirm(true)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Reset ke Default</button>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <button onClick={handleReset} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Ya, Reset Sekarang</button>
                        <button onClick={() => setShowResetConfirm(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">Batal</button>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Informasi Sistem</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Versi: 1.0.0</li>
                      <li>• Storage: LocalStorage Browser</li>
                      <li>• Auto-save: Aktif</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
