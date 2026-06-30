# WTOOLS - FitGym Store & Academy 🏋️‍♂️

Proyek Akhir Workshop UI - Platform E-Commerce Alat Fitness Premium & Akademi Edukasi Kebugaran. Didesain secara spesifik untuk tampilan Desktop layar lebar (Premium Full-Screen UI).

🔗 **Live Demo:** [https://wtools-lovat.vercel.app/onboarding.html]

---

## 🌟 Fitur Utama

*   **UI/UX Premium:** Antarmuka responsif khusus desktop dengan sidebar navigasi elegan, efek *hover* yang mulus, dan *Dark Mode* modern.
*   **FitGym Store:** Katalog produk (*Trending*, *Categories*), keranjang belanja (*Cart*), manajemen *Wishlist*, dan alur *Checkout* multi-langkah.
*   **WTools Academy:** Pusat edukasi kebugaran yang mencakup Artikel Nutrisi, Video Tutorial Latihan, dan Teknik Fundamental.
*   **Sistem Kredensial Palsu (Mock Auth):** Menggunakan `localStorage` bawaan browser untuk memisahkan sesi login Pelanggan (User) dan Admin tanpa memerlukan database *backend*.
*   **Admin Portal:** Panel kontrol terisolasi (*Secure Portal*) untuk mengelola histori pesanan, produk, artikel, dan pengaturan *dashboard*.
*   **Order Tracking:** Fitur pelacakan pesanan visual dengan *timeline* status.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun secara statis tanpa *framework* (Pure Frontend):
*   **HTML5:** Struktur semantik.
*   **CSS3:** *Custom Properties* (Variabel CSS), Flexbox, CSS Grid, *Transitions*.
*   **Vanilla JavaScript:** Logika DOM Manipulation, kalkulasi keranjang, dan manajemen *session* (`localStorage`).

---

## 🔑 Kredensial Login (Uji Coba)

Sistem sudah dilengkapi dengan validasi *role-based* sederhana. Gunakan data berikut untuk mencoba masuk ke dalam sistem:

**1. Akses Admin Portal** (`/admin-login.html`)
*   **Email:** `okabe.mc2@gmail.com`
*   **Password:** `Rafirafifernandito`

**2. Akses Pelanggan / User** (`/login.html`)
*   **Email:** `rafi.fernandito@email.com`
*   **Password:** `user123`

*(Catatan: Halaman admin dan user saling terkunci. User tidak dapat membuka halaman admin secara paksa melalui URL jika belum login menggunakan akun admin, begitu pula sebaliknya).*

---

## 🚀 Cara Menjalankan di Lokal

Karena ini adalah web statis murni, kamu tidak perlu menginstal server khusus seperti Node.js atau PHP.

1.  *Clone repository* ini:
    ```bash
    git clone [https://github.com/Reverseflash45/wtools-ui-workshop.git](https://github.com/Reverseflash45/wtools-ui-workshop.git)
    ```
2.  Buka folder proyek di *code editor* pilihanmu (misal: VS Code).
3.  Buka file `index.html` langsung di browser, ATAU gunakan ekstensi **Live Server** di VS Code untuk pengalaman *reload* otomatis.

---

## 👤 Author

**Rafi Fernandito** 
GitHub: [@Reverseflash45](https://github.com/Reverseflash45)
