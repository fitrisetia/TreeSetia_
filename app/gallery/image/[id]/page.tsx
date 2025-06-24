// File: app/gallery/image/[id]/page.tsx

import { galleryData } from '../../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Camera, FileCode } from 'lucide-react';

// Fungsi ini memberitahu Next.js semua kemungkinan 'id' yang ada
// agar bisa disiapkan sebelumnya.
export async function generateStaticParams() {
  return galleryData.map((image) => ({
    id: image.id.toString(),
  }));
}

// Komponen halaman detail Anda
export default async function ImageDetailPage({ params }: { params: { id: string } }) {
  // --- PERUBAHAN PENTING DI SINI ---
  // Coba sangat eksplisit menunggu 'params' untuk mengatasi error
  // 'params should be awaited before using its properties'.
  // Ini adalah workaround untuk masalah yang sangat persisten.
  const resolvedParams = await Promise.resolve(params);
  const imageId = parseInt(resolvedParams.id, 10); // Gunakan resolvedParams di sini
  // --- AKHIR PERUBAHAN PENTING ---

  const image = galleryData.find(item => item.id === imageId);

  if (!image) {
    notFound();
  }

  const placeholderImage = 'https://placehold.co/800x600/EEEEEE/AAAAAA?text=Gambar+Tidak+Tersedia'; 

  const imageWidth = image?.width || 800; 
  const imageHeight = image?.height || 600; 

  return (
    <div className="container mx-auto px-4 py-12 sm:py-24 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <Link href="/gallery" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 rounded-md px-3 py-1.5 hover:bg-gray-100">
          <ArrowLeft size={18} />
          Kembali ke Galeri
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-3 relative w-full rounded-lg overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center overflow-x-auto">
            {image.src && typeof image.width === 'number' && typeof image.height === 'number' ? ( 
              <Image 
                src={image.src} 
                alt={image.alt || 'Gambar portofolio'} 
                width={imageWidth} 
                height={imageHeight} 
                className="rounded-lg max-w-full h-auto" 
                priority 
              />
            ) : (
              <img 
                src={placeholderImage} 
                alt="Gambar Tidak Tersedia" 
                className="w-full h-full object-contain p-4 text-gray-500"
              />
            )}
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">{image.title}</h1>
            <div className="flex items-center gap-2 text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full self-start mb-6">
              {image.category === 'Photography' ? <Camera size={14} /> : <FileCode size={14} />}
              <span>{image.category}</span>
            </div>
            <div className="text-muted-foreground space-y-4 text-lg">
              <p>
                Ini adalah deskripsi detail untuk karya berjudul &quot;{image.title}&quot;. Di sini Anda bisa menambahkan cerita di balik foto, teknik yang digunakan, atau tantangan yang dihadapi selama proses pengerjaan proyek.
              </p>
              <p>
                Menambahkan konteks seperti ini akan membuat portofolio Anda jauh lebih menarik bagi pengunjung dan calon klien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}