/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Menggunakan variabel CSS dari globals.css
        'custom-navy': 'var(--accent-navy-default)',
        'custom-blue-light': 'var(--accent-navy-light)',
      },
    },
  },
  plugins: [
    // Plugin Anda yang sudah ada
    require('@tailwindcss/aspect-ratio'),
    
    // --- TAMBAHKAN PLUGIN INI ---
    // Ini adalah "mesin" untuk menata halaman blog Anda
    require('@tailwindcss/typography'),
  ],
};
