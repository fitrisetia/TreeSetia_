// File: components/Footer.tsx

import Link from 'next/link';
// Kita akan gunakan ikon dari Lucide dan SVG inline untuk konsistensi
import { Linkedin, Instagram } from 'lucide-react';

// --- Kumpulan Ikon Sosial Media (sama seperti di halaman kontak) ---
const XIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> );
const YouTubeIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5.76 13.4c-.18.66-1.32 1.25-1.32 1.25-.9.3-4.44.3-4.44.3s-3.54 0-4.44-.3c0 0-1.14-.59-1.32-1.25-.26-1.1-.26-3.4 0-4.5.18-.66 1.32-1.25 1.32-1.25.9-.3 4.44-.3 4.44-.3s3.54 0 4.44.3c0 0 1.14.59 1.32 1.25.26 1.1.26 3.4 0 4.5zm-5.7-6.9l-2.3 2.1 2.3 2.1v-4.2z"></path></svg> );
const TikTokIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07a10.02 10.02 0 01-3.54-2.87c-.1-.13-.2-.27-.29-.4v6.52c0 2.22-1.8 4-4 4s-4-1.78-4-4c0-2.22 1.8-4 4-4 .36 0 .71.05 1.05.14v4.03c-.34-.08-.69-.13-1.05-.13a1.99 1.99 0 00-2 2c0 1.1.9 2 2 2s2-.9 2-2z"></path></svg> );

const Footer = () => {
  return (
    <footer className="bg-[var(--accent-navy-soft)] text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        {/* Layout grid dengan 3 kolom di layar besar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Kolom 1: Branding & Copyright */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold text-[var(--accent-navy-light)]">
              TreeSetia
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs mx-auto md:mx-0">
              Platform personal untuk berbagi cerita melalui visual, tulisan, dan alunan musik.
            </p>
            <p className="mt-6 text-xs text-white/40">
              &copy; {new Date().getFullYear()} Fitri Setiawati. All rights reserved.
            </p>
          </div>
          
          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="text-white/70 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/music" className="text-white/70 hover:text-white transition-colors">Music</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Sosial Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Temukan Saya</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="https://instagram.com/_likestory2_/" target="_blank" title="Instagram" className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="https://x.com/0nol_" target="_blank" title="X (Twitter)" className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <XIcon />
              </Link>
              <Link href="#" target="_blank" title="LinkedIn" className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="#" target="_blank" title="YouTube" className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <YouTubeIcon />
              </Link>
               <Link href="#" target="_blank" title="TikTok" className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <TikTokIcon />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
