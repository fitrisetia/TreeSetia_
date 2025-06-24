// File: next.config.js
// Ini adalah file konfigurasi Next.js menggunakan sintaks CommonJS.

/** @type {import('next').NextConfig} */
// Anotasi JSDoc di atas membantu editor seperti VS Code memberikan intellisense,
// ini bukan bagian dari TypeScript yang dikompilasi, jadi aman.
const nextConfig = {
  // Konfigurasi gambar untuk mengizinkan host eksternal
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // Domain dari Pinterest
        port: '', // Biarkan kosong untuk port default HTTPS
        pathname: '/**', // Mengizinkan semua path di hostname ini
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Domain dari placeholder
        port: '',
        pathname: '/**',
      },
      // Tambahkan domain eksternal lain di sini jika diperlukan, contoh:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   pathname: '/**',
      // },
    ],
  },
  // Tambahkan konfigurasi Next.js lainnya di sini jika ada.
  // Contoh:
  // output: 'standalone',
  // experimental: {
  //   serverComponentsExternalPackages: ['sharp'],
  // },
};

// Menggunakan sintaks CommonJS untuk mengekspor objek konfigurasi.
// Ini adalah cara yang standar dan didukung sepenuhnya oleh Next.js 14.x untuk next.config.js.
module.exports = nextConfig;