'use client' // Wajib 'use client' karena kita menggunakan hook usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Camera, FileCode } from 'lucide-react';

// Daftar link untuk navigasi galeri
const navLinks = [
  { name: 'Semua', href: '/gallery', icon: LayoutGrid },
  { name: 'Photography', href: '/gallery/photography', icon: Camera },
  { name: 'Dokumentasi', href: '/gallery/dokumentasi', icon: FileCode },
];

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Mendapatkan URL saat ini

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <header className="text-center mb-12">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Galeri Karya</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Kumpulan momen yang saya abadikan dan proyek yang telah saya kerjakan.
        </p>
      </header>

      {/* Navigasi / Tab Filter */}
      <nav className="flex justify-center items-center gap-2 sm:gap-4 mb-12">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`
                flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300
                ${isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground hover:bg-muted/50'}
              `}
            >
              <link.icon size={16} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Konten halaman (page.tsx) akan dirender di sini */}
      <main>{children}</main>
    </div>
  );
}