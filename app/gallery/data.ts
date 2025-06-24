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
  { id: 1, title: 'Saat Dunia Diam, Aku Masih Bertahan', category: 'Photography', src: 'https://i.pinimg.com/736x/57/76/64/577664f01b4bbfdcd60c87b67a9786d4.jpg', alt: 'Saat Dunia Diam, Aku Masih Bertahan', width: 1920, height: 1280 },
  { id: 2, title: 'Detailnya', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/13/be/bc/13bebc802ff539869630842254fe42af.jpg', alt: 'Detailnya', width: 500, height: 900 },
  { id: 3, title: 'Wilayah Gunung Galunggung', category: 'Photography', src: 'https://i.pinimg.com/736x/8c/c7/9d/8cc79dec42c43cbbd848a65ccaea119f.jpg', alt: 'Wilayah Gunung Galunggung', width: 1920, height: 1080 },
  { id: 4, title: 'Kota Tua', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/a2/ba/e1/a2bae127aacd1addf58bf8ef9bd7b857.jpg', alt: 'Kota Tua', width: 1200, height: 800 },
  { id: 5, title: 'Potret Hitam Putih', category: 'Photography', src: 'https://i.pinimg.com/736x/74/98/f8/7498f8cf0fe53f88c7692a35caa1759a.jpg', alt: 'Foto potret hitam putih', width: 800, height: 1200 },
  { id: 6, title: 'Perihal Kopi', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/81/30/63/8130633f4bda1184bc65cc7a08a2318b.jpg', alt: 'Perihal Kopi', width: 1280, height: 800 },
  { id: 7, title: 'Langkah Membawa', category: 'Photography', src: 'https://i.pinimg.com/736x/f5/e1/2b/f5e12b459e138c9398e2baa072f233f7.jpg', alt: 'Langkah Membawa', width: 1000, height: 750 },
  { id: 8, title: 'Suasana', category: 'Photography', src: 'https://i.pinimg.com/736x/9e/74/34/9e74342a4b7a03ccd5b72bdc28bd3731.jpg', alt: 'Suasana', width: 1600, height: 1000 },
];
// Pastikan Anda menambahkan data gambar lainnya sesuai kebutuhan.
