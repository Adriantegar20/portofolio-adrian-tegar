# Portfolio — Adrian Tegar

Implementasi DESIGN.md v1.2: Next.js App Router, TypeScript, Tailwind CSS v4. Tanpa database/backend.

## Menjalankan
```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

## Mengganti konten
Edit file di `src/data/`. Semua teks `[Placeholder]` harus diganti dengan informasi yang sudah dikonfirmasi.
- Foto profil: taruh di `public/images/`, lalu ubah `profile.image` di `src/data/profile.ts`.
- Social media: isi `url` di `src/data/social-links.ts` (url kosong disembunyikan).
- Email: ubah `profile.email`.
- Proyek baru: tambah objek di `src/data/projects.ts`; halaman detail dibuat otomatis dari `slug`.

## Deploy
Push ke GitHub, import repo di Vercel.
