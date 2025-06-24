// File: app/page.tsx
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Music, Mic, Mail, Camera } from 'lucide-react';
// Pastikan path ini benar sesuai struktur proyek Anda
import { galleryData } from './gallery/data'; 

// ===================================================================
// BAGIAN 1: HERO SECTION (DENGAN TEMA GELAP YANG KONSISTEN)
// ===================================================================
function HeroSection() {
  return (
    // Menggunakan latar belakang navy yang sama dengan bagian bawah
    <div className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 text-center bg-[var(--accent-navy-default)] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-[var(--accent-navy-light)]">
          <Image
            src="https://scontent.fbdo1-1.fna.fbcdn.net/v/t39.30808-6/510696567_2409814969376130_3257008856448179887_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG57bzEVQ8V43PqCwPrL9zy8tTvz31l48Ly1O_PfWXjwhdWuNELzN9kiNpjXIpsEwBBt7C6omdI4QMbJldqPKbO&_nc_ohc=HyvQavIiYHEQ7kNvwFAydKe&_nc_oc=AdmcPqWW2bFvSWsnDFx0ID-u38rHWHLvVD9HUYP0zKwiRXlT72GehiI_WeYOZU4S9Ho&_nc_zt=23&_nc_ht=scontent.fbdo1-1.fna&_nc_gid=KqukgdMv_FNEjpYrGnCx9Q&oh=00_AfOGAWERHGaGnhLY5T-clmICjHR6S0cbZWmCrT_0UDk_dw&oe=68609E3D"
            alt="Fitri Setiawati - Profile Picture"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* Warna teks disesuaikan untuk latar gelap */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Hai, saya <span className="text-[var(--accent-navy-light)]">Fitri Setiawati</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Seorang <strong className="font-semibold">Fotografer Visual, Penjelajah Musik, dan Penulis Konten</strong> yang bersemangat dalam bercerita melalui berbagai media.
        </p>

        {/* Warna tombol disesuaikan untuk latar gelap */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/about" className="px-8 py-3 bg-[var(--accent-navy-light)] text-[var(--accent-navy-soft)] font-bold rounded-full shadow-lg hover:bg-white transition-colors duration-300 text-lg">
            Tentang Saya
          </Link>
          <Link href="/gallery" className="px-8 py-3 border-2 border-[var(--accent-navy-light)] text-[var(--accent-navy-light)] font-semibold rounded-full shadow-lg hover:bg-[var(--accent-navy-light)] hover:text-[var(--accent-navy-soft)] transition-all duration-300 text-lg">
            Lihat Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}


// ===================================================================
// BAGIAN 2: ETALASE KONTEN (TIDAK ADA PERUBAHAN, SUDAH BENAR)
// ===================================================================
function ContentShowcase() {
  const latestImages = galleryData.slice(0, 2);
  const latestPosts = [
    { id: 1, title: 'Menemukan Keindahan dalam Fotografi Malam', href: '/blog/post-1' },
    { id: 2, title: 'Playlist yang Menemani Saya Selama Musim Hujan', href: '/blog/post-2' },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-[var(--accent-navy-soft)] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="font-display text-4xl">Etalase Karya</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Kolom Kiri: Galeri & Musik */}
          <div className="space-y-10">
            <div className="p-8 bg-black/20 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Camera className="text-[var(--accent-navy-light)]" size={28} />
                <h3 className="font-display text-3xl">Karya Visual</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {latestImages.map(img => (
                  <Link key={img.id} href={`/gallery/image/${img.id}`} className="block overflow-hidden rounded-lg group">
                    <img src={img.src} alt={img.alt} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </Link>
                ))}
              </div>
              <Link href="/gallery" className="inline-flex items-center font-semibold text-[var(--accent-navy-light)] hover:text-white group">
                Lihat semua karya <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="p-8 bg-black/20 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Music className="text-[var(--accent-navy-light)]" size={28} />
                <h3 className="font-display text-3xl">Playlist Pilihan</h3>
              </div>
              <p className="text-gray-300 mb-6">Koleksi lagu yang menemani proses kreatif saya. Dari melodi yang menenangkan hingga ritme yang membangkitkan semangat.</p>
              <Link href="/music" className="inline-flex items-center font-semibold text-[var(--accent-navy-light)] hover:text-white group">
                Jelajahi musik <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Blog & Kontak */}
          <div className="space-y-10">
            <div className="p-8 bg-black/20 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Mic className="text-[var(--accent-navy-light)]" size={28} />
                <h3 className="font-display text-3xl">Catatan Terbaru</h3>
              </div>
              <div className="space-y-4 mb-6">
                {latestPosts.map(post => (
                  <Link key={post.id} href={post.href} className="block p-4 rounded-lg hover:bg-white/5 group">
                    <p className="font-semibold text-lg group-hover:text-[var(--accent-navy-light)] transition-colors">{post.title}</p>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="inline-flex items-center font-semibold text-[var(--accent-navy-light)] hover:text-white group">
                Baca semua tulisan <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="p-8 bg-black/20 rounded-2xl text-center">
              <Mail className="text-[var(--accent-navy-light)] mx-auto mb-4" size={32} />
              <h3 className="font-display text-3xl mb-2">Mari Terhubung</h3>
              <p className="text-gray-300 mb-6">Saya terbuka untuk kolaborasi, proyek, atau sekadar berbincang tentang kreativitas.</p>
              <Link href="/contact" className="px-8 py-3 border-2 border-[var(--accent-navy-light)] text-[var(--accent-navy-light)] font-semibold rounded-full shadow-lg hover:bg-[var(--accent-navy-light)] hover:text-[var(--accent-navy-soft)] transition-all duration-300 text-lg">
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// --- Komponen Utama Halaman Home ---
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ContentShowcase />
    </main>
  );
}
