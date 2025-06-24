// File: app/gallery/photography/page.tsx

// Impor komponen ImageGrid yang bisa digunakan ulang dari folder komponen galeri.
import ImageGrid from '../components/ImageGrid';

// Impor data gambar terpusat.
import { galleryData } from '../data';

export default function PhotographyPage() {
  // Filter data untuk hanya mendapatkan gambar dengan kategori 'Photography'.
  // Ini berjalan di server, jadi sangat efisien.
  const photographyImages = galleryData.filter(
    (item) => item.category === 'Photography'
  );

  // Gunakan komponen ImageGrid untuk menampilkan gambar yang sudah difilter.
  // Sekarang semua gambar di sini juga akan bisa diklik.
  return <ImageGrid images={photographyImages} />;
}
