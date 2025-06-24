// File: app/gallery/data.ts

// Definisikan tipe data untuk setiap item galeri
export type GalleryItem = {
  id: number;
  title: string;
  category: 'Photography' | 'Dokumentasi';
  src: string;
  alt: string;
  width: number;  // <<< DITAMBAHKAN
  height: number; // <<< DITAMBAHKAN
};

// Ekspor data gambar Anda dari sini.
// Dengan begini, semua halaman akan mengambil dari sumber yang sama.
// CATATAN: Width dan Height adalah perkiraan. Harap sesuaikan dengan dimensi asli gambar Anda untuk optimasi terbaik.
export const galleryData: GalleryItem[] = [
  { id: 1, title: 'Senja di Pegunungan', category: 'Photography', src: 'https://i.pinimg.com/736x/6d/70/a2/6d70a2988d68c1e798b1fe649b7df3c2.jpg', alt: 'Pemandangan senja di gunung', width: 1920, height: 1280 },
  { id: 2, title: 'Desain Aplikasi Mobile', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/55/18/7c/55187c1a3160932ab3c8aa6ba0f992df.jpg', alt: 'Screenshot desain aplikasi mobile', width: 500, height: 900 }, // Ini mungkin potret
  { id: 3, title: 'Jalanan Kota Malam Hari', category: 'Photography', src: 'https://i.pinimg.com/736x/47/d1/12/47d112f63551cbb82f6b4cfcd21782d2.jpg', alt: 'Suasana jalanan kota di malam hari', width: 1920, height: 1080 },
  { id: 4, title: 'Arsitektur Website Portofolio', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/dc/87/ba/dc87ba4c3fedef9c921b67c011e81f9f.jpg', alt: 'Cuplikan kode arsitektur website', width: 1200, height: 800 },
  { id: 5, title: 'Potret Hitam Putih', category: 'Photography', src: 'https://i.pinimg.com/736x/3c/99/b8/3c99b87750692970c0884e2f58bec9d9.jpg', alt: 'Foto potret hitam putih', width: 800, height: 1200 }, // Ini mungkin potret
  { id: 6, title: 'Dokumentasi API', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/fe/0c/4b/fe0c4b442ee0ffbede8ac35cc08ecd6a.jpg', alt: 'Dokumentasi teknis sebuah API', width: 1280, height: 800 },
  { id: 7, title: 'Detail Daun', category: 'Photography', src: 'https://i.pinimg.com/736x/6f/6a/4b/6f6a4b509a7fe895b3aac995cf50d3dd.jpg', alt: 'Foto makro detail daun', width: 1000, height: 750 },
  { id: 8, title: 'Gedung Pencakar Langit', category: 'Photography', src: 'https://i.pinimg.com/736x/87/b0/b1/87b0b1ba5d807e8be9ecbcacc732fd52.jpg', alt: 'Foto arsitektur gedung pencakar langit', width: 1600, height: 1000 },
];
// Pastikan Anda menambahkan data gambar lainnya sesuai kebutuhan.