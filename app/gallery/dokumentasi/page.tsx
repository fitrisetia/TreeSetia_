// File: app/gallery/dokumentasi/page.tsx

// Impor komponen ImageGrid yang sama.
import ImageGrid from '../components/ImageGrid';

// Impor data gambar yang sama.
import { galleryData } from '../data';

export default function DokumentasiPage() {
  // Filter data untuk hanya mendapatkan gambar dengan kategori 'Dokumentasi'.
  const dokumentasiImages = galleryData.filter(
    (item) => item.category === 'Dokumentasi'
  );

  // Gunakan komponen ImageGrid untuk menampilkan hasilnya.
  return <ImageGrid images={dokumentasiImages} />;
}