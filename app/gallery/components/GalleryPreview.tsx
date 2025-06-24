// File: app/components/GalleryPreview.tsx

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// Sesuaikan path jika folder 'gallery' Anda tidak berada di root 'app'
import { galleryData } from '@/app/gallery/data'; 

// Ini adalah Server Component, jadi sangat cepat dan efisien.
export default function GalleryPreview() {
  // Ambil 4 gambar pertama dari data Anda untuk ditampilkan sebagai preview.
  const previewImages = galleryData.slice(0, 4);

  return (
    <section id="gallery-preview" className="py-24 px-5 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">Karya Terbaru</h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
                Sekilas dari beberapa karya visual dan proyek yang baru saja saya selesaikan.
            </p>
        </div>

        {/* Grid untuk menampilkan gambar-gambar preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {previewImages.map((item) => (
            <Link
              key={item.id}
              href={`/gallery/image/${item.id}`}
              className="group relative block w-full overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.alt}
                // Menggunakan tinggi tetap seperti di galeri untuk konsistensi
                className="w-full h-80 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-semibold text-white text-lg drop-shadow-md">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Tombol yang mengarah ke halaman galeri utama */}
        <div className="text-center">
            <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/80 transition-transform hover:scale-105"
            >
                Lihat Semua Galeri <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </section>
  );
}