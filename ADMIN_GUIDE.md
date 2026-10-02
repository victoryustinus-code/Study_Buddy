# Admin Panel - Study Buddy

## Cara Akses Admin Panel

1. Buka website Study Buddy
2. Scroll ke bagian footer (paling bawah)
3. Klik link **"Admin Panel"** yang berwarna abu-abu kecil
4. Atau langsung akses: `yourdomain.com/#/admin`

## Login

- **Password default:** `admin123`
- Setelah login, Anda akan diarahkan ke Dashboard Admin

## Fitur Admin Panel

### 1. 🏠 Umum & Brand
- Edit nama brand (default: Study Buddy)
- Edit tagline (default: where learning meets technology)

### 2. 🎯 Hero Section
- Edit badge text di hero section
- Edit judul utama (title)
- Edit subtitle/deskripsi

### 3. 📦 Produk & Harga
- Edit informasi produk Schoolio:
  - Nama produk
  - Deskripsi
  - Harga
  - Satuan harga
- Edit informasi produk MobyMax:
  - Nama produk
  - Deskripsi
  - Harga
  - Satuan harga
- Edit informasi produk GED:
  - Nama produk
  - Deskripsi
  - Harga
  - Satuan harga

### 4. 📞 Kontak & Alamat
- Edit email kontak
- Edit nomor WhatsApp (format: 62xxx tanpa + atau 0)
- Edit alamat lengkap

### 5. 🎨 Tema & Warna
- Pilih warna primer (color picker)
- Pilih warna sekunder (color picker)
- Input manual kode warna hex

### 6. 🖼️ Gambar & Logo
- Fitur upload gambar (coming soon)

### 7. ⚙️ Pengaturan
- Reset semua konten ke default
- Informasi sistem

## Cara Kerja

- **Auto-save:** Semua perubahan otomatis tersimpan saat Anda berpindah dari input field
- **LocalStorage:** Data disimpan di browser menggunakan localStorage
- **Real-time:** Perubahan langsung terlihat di website tanpa perlu refresh
- **Persistent:** Data tetap tersimpan meskipun browser ditutup

## Tips

1. **Preview:** Setelah edit, klik "Lihat Website" di header admin untuk melihat perubahan
2. **Backup:** Jika ingin backup, copy data dari tab "Pengaturan" > "Export Data" (coming soon)
3. **Reset:** Gunakan fitur reset hanya jika ingin mengembalikan semua ke default
4. **WhatsApp:** Format nomor harus tanpa + atau 0, contoh: 62881037380330

## Keamanan

⚠️ **Peringatan:** Password admin saat ini disimpan di frontend (tidak aman untuk production). 
Untuk production, gunakan backend authentication yang proper.

## Troubleshooting

**Data hilang setelah clear browser?**
- Data tersimpan di localStorage browser
- Jika clear browser/cookies, data akan kembali ke default
- Solusi: Backup data secara manual sebelum clear browser

**Perubahan tidak muncul di website?**
- Refresh halaman website
- Clear cache browser (Ctrl+F5)

**Tidak bisa login?**
- Password default: `admin123`
- Jika lupa password, reset localStorage browser atau hubungi developer

## Support

Untuk bantuan lebih lanjut, hubungi:
- Email: studybuddyindonesia1@gmail.com
- WhatsApp: +62 881-0373-80330
