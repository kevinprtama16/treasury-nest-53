# Treasury Hub

Buatkan kode lengkap untuk sebuah Aplikasi Web Single Page Application (SPA) berbasis HTML, CSS, dan JavaScript murni untuk sistem "Treasury Account Management". Web ini harus memiliki antarmuka yang modern, responsif, dan profesional bernuansa FinTech (menggunakan framework Tailwind CSS via CDN, Chart.js via CDN, dan FontAwesome via CDN).

Aplikasi ini memiliki 2 Alur Utama:

==================================================

1. GERBANG AUTENTIKASI (Halaman Sebelum Dashboard)

==================================================

- Tampilan Login & Registrasi (User Gate):

  - Pengguna wajib Login sebelum bisa mengakses Dashboard Utama.

  - Terdapat opsi "Daftar Akun Baru" (Register) untuk pengguna yang belum memiliki akun.

  - Form Login: Email & Password.

  - Form Registrasi: Nama Lengkap, Email, Password, dan Konfirmasi Password.

  - Gunakan JavaScript LocalStorage untuk menyimpan data pengguna terdaftar dan sesi login (session state).

  - Terdapat indikator pesan error jika login gagal atau email sudah terdaftar.

  - Tombol "Logout" di dalam Dashboard untuk kembali ke halaman Login.

==================================================

2. DASHBOARD TREASURY (Setelah Berhasil Login)

==================================================

A. Header & Ringkasan Statistik:

   - Header: Informasi Pengguna yang sedang Login, Jam & Tanggal Real-Time (WIB), serta Tombol Logout.

   - Kartu Statistik Utama:

     * Total Akun Treasury Aktif

     * Total Penggunaan Keseluruhan Bulan Ini

     * Ringkasan Harga Emas IDR, Kurs USD/IDR, dan XAU/USD.

B. Grafik Pasar Keuangan & Analytics (Menggunakan Chart.js):

   - Grafik 1: Tren Harga Emas (IDR/Gram) - Line Chart.

   - Grafik 2: Kurs Dolar AS ke Rupiah (USD to IDR) - Area Chart.

   - Grafik 3: Pergerakan Emas Dunia (XAU/USD Spot Gold) - Line Chart.

   - Grafik 4: Distribusi Pemakaian Akun Treasury per Perangkat/User - Bar Chart.

C. Fitur Utama Manajemen Akun Treasury (Tabel Interactive & CRUD):

   - Informasi pada Tabel Akun:

     1. Nama Akun / Pemilik Akun.

     2. Kontak: Email & Nomor Telepon/WhatsApp.

     3. Perangkat Terhubung: Jenis/Model HP yang digunakan (contoh: "iPhone 15 Pro", "Samsung S23", "Xiaomi 13").

     4. Counter Pemakaian Bulan Ini (Limit Maksimal: 20 kali/bulan).

     5. Visual Progress Bar penggunaan (contoh: 12/20 = 60%). Indikator warna: Hijau (<50%), Kuning (50-80%), dan Merah (>80% / Mendekati Limit).

     6. Status Akun (Aktif / Limit Reached / Standby Reset).

     7. Tanggal Reset Otomatis berikutnya (Reset setiap awal bulan).

   - Fitur Aksi pada Akun (CRUD):

     - Tombol "Gunakan (+1)": Menambah hitungan pemakaian. Jika mencapai limit 20, tombol ter-disabled otomatis dengan label "Limit Reached".

     - Tombol "Edit Akun": Membuka Modal Pop-up untuk mengubah Nama, Email, No HP, dan Jenis Perangkat HP.

     - Tombol "Hapus Akun": Menghapus akun dari tabel dengan konfirmasi dialog.

     - Tombol "Tambah Akun Baru": Modal Pop-up form tambah akun baru (Nama, Email, No HP, Perangkat HP). Limit default otomatis set ke 20.

     - Tombol "Reset Manual": Untuk mengembalikan hitungan pemakaian semua akun menjadi 0 (simulasi reset bulanan).

D. Fitur Tambahan & Log Aktivitas:

   - Fitur Pencarian & Filter Real-Time: Cari akun berdasarkan Nama, No HP, atau Tipe HP.

   - Riwayat Activity Log: Catatan riwayat aksi (contoh: "Akun Budi (iPhone 15) digunakan pada 10 Aug 2026, 09:30 WIB").

==================================================

SPESIFIKASI TEKNIS:

==================================================

- Semua data (Users, Treasury Accounts, dan Activity Logs) disimpan di LocalStorage JavaScript agar data tidak hilang saat refresh.

- Sediakan data awal (dummy/seed data) untuk beberapa akun treasury agar dashboard langsung terlihat terisi saat pertama dibuka.

- Skema Warna: Dark Navy (#0f172a), Slate Grey, Emerald Green (#10b981), dan Gold/Amber Accent (#f59e0b).

- Kode terstruktur rapi, dilengkapi komentar penjelas JavaScript, dan siap dijalankan langsung di browser.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://treasury-nest-53.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1f495569-8b21-4734-84b7-94fc82976edb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
