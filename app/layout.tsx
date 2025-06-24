// File: app/layout.tsx

// Import stylesheet global (CSS yang berlaku di seluruh aplikasi)
import './globals.css';

// Import font Google Inter
import { Inter } from 'next/font/google';

// Import komponen layout utama
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Impor dua komponen penting untuk fitur musik ---
// DraggableMusicPlayer: tampilan player yang bisa digeser
// GlobalAudioPlayer: komponen tak terlihat yang menangani pemutaran lagu
import DraggableMusicPlayer from '@/components/DraggableMusicPlayer';
import GlobalAudioPlayer from '@/components/GlobalAudioPlayer';

const inter = Inter({ subsets: ['latin'] }); // Inisialisasi font Inter

// Metadata default untuk seluruh situs
export const metadata = {
  title: 'Fitri Setiawati - Personal Portfolio',
  description: 'Portofolio pribadi yang menampilkan fotografi, musik, dan blog.',
};

// Layout utama aplikasi
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[var(--accent-navy-default)]`}>
        {/* Navigasi utama di atas halaman */}
        <Navbar />

        {/* Konten utama setiap halaman */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer selalu tampil di bawah */}
        <Footer />

        {/* 
          Komponen GlobalAudioPlayer:
          - Bertugas menjalankan audio di background
          - Tidak terlihat oleh user
          - Harus selalu ada di layout agar pemutaran tidak berhenti saat berpindah halaman 
        */}
        <GlobalAudioPlayer />

        {/* 
          Komponen DraggableMusicPlayer:
          - Tampilan interaktif pemutar lagu (seperti mini player di Spotify)
          - Bisa digeser-geser oleh user
          - Terpisah dari <MusicPlayerBar /> yang ada di halaman khusus
        */}
        <DraggableMusicPlayer />
      </body>
    </html>
  );
}
