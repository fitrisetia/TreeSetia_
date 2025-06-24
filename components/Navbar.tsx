'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HamburgerIcon from './icons/HamburgerIcon'; // Pastikan path ini benar

// --- PERUBAHAN 1: Memindahkan navLinks ke luar komponen ---
// Ini adalah praktik yang baik untuk data statis.
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  {
    name: 'Gallery',
    href: '/gallery', // Menambahkan href utama untuk galeri
    dropdown: [
      { name: 'Photography', href: '/gallery/photography' },
      { name: 'Dokumentasi', href: '/gallery/dokumentasi' },
    ],
  },
  { name: 'Music', href: '/music' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Efek untuk menutup menu mobile saat URL berubah
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="bg-[var(--accent-navy-soft)] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-[var(--accent-navy-light)] hover:text-white transition-colors duration-300"
          >
            TreeSetia
          </Link>

          {/* Navigasi Desktop */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => {
              // --- PERUBAHAN 2: Logika untuk mendeteksi link galeri aktif ---
              const isGalleryActive = link.href && pathname.startsWith(link.href);

              return (
                <li
                  key={link.name}
                  className="relative"
                  // Logika hover hanya untuk item dengan dropdown
                  onMouseEnter={() => link.dropdown && setIsGalleryDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setIsGalleryDropdownOpen(false)}
                >
                  <Link
                    href={link.href || '#'} // Fallback ke '#' jika tidak ada href utama
                    className={`text-lg transition-colors duration-300 px-2 py-1 rounded-md
                      ${isGalleryActive ? 'text-[var(--accent-navy-light)] font-semibold' : 'hover:text-[var(--accent-navy-light)]'}
                    `}
                  >
                    {link.name}
                  </Link>

                  {/* --- PERUBAHAN 3: Animasi dropdown --- */}
                  {link.dropdown && (
                    <div
                      className={`absolute left-0 mt-2 w-56 origin-top-left rounded-xl shadow-xl bg-[var(--accent-navy-soft)] ring-1 ring-white/10 transition-all duration-200 ease-out
                        ${isGalleryDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                      `}
                    >
                      <ul className="py-2">
                        {link.dropdown.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className={`block px-4 py-2 text-md transition-colors duration-200
                                ${pathname === sub.href ? 'text-white bg-[var(--accent-navy-light)]' : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                              `}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
              <HamburgerIcon isOpen={isMobileMenuOpen} color="white" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) =>
                !link.dropdown ? (
                  <li key={link.name}>
                    <Link
                      href={link.href || '#'}
                      className={`block py-2 text-lg transition-colors duration-300 ${
                        pathname === link.href ? 'text-[var(--accent-navy-light)] font-semibold' : 'hover:text-[var(--accent-navy-light)]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  // --- PERUBAHAN 4: Dropdown di mobile menjadi accordion ---
                  <li key={link.name}>
                    <div className="flex justify-between items-center">
                      <Link
                        href={link.href || '#'}
                        className={`block py-2 text-lg transition-colors duration-300 ${
                          pathname.startsWith(link.href || '') ? 'text-[var(--accent-navy-light)] font-semibold' : 'hover:text-[var(--accent-navy-light)]'
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)} className="p-2">
                        <svg className={`w-4 h-4 transition-transform duration-300 ${isGalleryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                    </div>
                    {isGalleryDropdownOpen && (
                      <ul className="pl-4 mt-1 space-y-1 border-l-2 border-white/20">
                        {link.dropdown.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className={`block py-2 pl-3 text-lg transition-colors duration-200 ${
                                pathname === sub.href ? 'text-[var(--accent-navy-light)] font-semibold' : 'hover:text-[var(--accent-navy-light)]'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>
      {/* Efek gradien di bawah navbar tetap ada */}
      <div className="h-2 bg-gradient-to-b from-[var(--accent-navy-soft)] to-[var(--accent-navy-default)]" />
    </>
  );
};

export default Navbar;