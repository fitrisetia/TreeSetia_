// File: app/gallery/components/ImageGrid.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // <-- LANGKAH 1: Impor komponen Image
import { GalleryItem } from '../data';

function GridItem({ item }: { item: GalleryItem }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      href={`/gallery/image/${item.id}`}
      className="group relative mb-5 block w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* LANGKAH 2: Bungkus <Image> dalam <div> dengan rasio aspek.
        Ini memberi 'ruang' yang pasti untuk gambar sebelum dimuat, 
        sangat penting untuk mencegah layout berantakan saat loading.
        'aspect-[4/5]' berarti rasio 4:5 (lebar:tinggi), cocok untuk foto potret.
        Anda bisa mengubahnya ke 'aspect-square', 'aspect-video', dll.
      */}
      <div className="relative w-full aspect-[4/5] bg-neutral-900 rounded-xl">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse rounded-xl bg-neutral-800"></div>
        )}

        {/* LANGKAH 3: Gunakan komponen <Image> yang dioptimalkan.
          'layout="fill"' akan membuat gambar mengisi div pembungkusnya.
        */}
        <Image
          src={item.src}
          alt={item.alt}
          layout="fill"
          objectFit="cover"
          className={`
            rounded-xl transform-gpu transition-all duration-700 ease-in-out
            group-hover:scale-105
            ${isLoading ? 'opacity-0 blur-md' : 'opacity-100 blur-0'}
          `}
          // Properti 'sizes' ini membantu Next.js memilih ukuran gambar yang paling efisien
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Tampilan hover tetap sama */}
      <div
        className="
          absolute inset-0 p-4 flex flex-col justify-end
          bg-gradient-to-t from-black/80 via-transparent to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 ease-in-out
        "
      >
        <div className="transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-white text-lg tracking-wide drop-shadow-md">{item.title}</h3>
          <p className="text-sm text-gray-200 drop-shadow-md">{item.category}</p>
        </div>
      </div>
    </Link>
  );
}

// Komponen utama ImageGrid tetap menggunakan layout 'columns'
export default function ImageGrid({ images }: { images: GalleryItem[] }) {
  if (images.length === 0) {
    return <p className="text-center text-gray-300 mt-8">Tidak ada karya yang ditemukan.</p>;
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-5">
      {images.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
}