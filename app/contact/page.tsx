// File: app/contact/page.tsx
'use client';

import { useState } from 'react';
// --- PERUBAHAN 1: Impor komponen Link ---
import Link from 'next/link'; 
import { Send, MessageSquare, Mail, Linkedin, Instagram } from 'lucide-react';

// --- Kumpulan Ikon Sosial Media (tidak ada perubahan) ---
const WhatsAppIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-400"><path d="M16.75 13.99L16.29 15.82C16.21 16.16 15.93 16.41 15.58 16.48C15.22 16.55 14.86 16.47 14.59 16.26C13.29 15.21 11.35 13.73 10.01 11.95C8.67 10.17 7.86 8.24 7.82 8.19C7.78 8.14 7.23 7.5 7.22 6.84C7.22 6.18 7.46 5.86 7.64 5.67C7.82 5.48 8.12 5.37 8.36 5.37C8.6 5.37 8.81 5.42 8.98 5.48C9.2 5.54 9.39 5.87 9.53 6.19L10.03 7.51C10.17 7.83 10.21 8.17 10.08 8.48L9.67 9.53C9.62 9.64 9.6 9.77 9.65 9.92C9.7 10.07 9.79 10.21 9.92 10.34C10.33 10.75 10.96 11.37 11.66 12.07C12.36 12.77 12.98 13.4 13.39 13.81C13.52 13.94 13.66 14.03 13.81 14.08C13.96 14.13 14.09 14.11 14.2 14.06L15.25 13.65C15.56 13.52 15.9 13.56 16.22 13.7L17.54 14.2C17.86 14.34 18.11 14.59 18.17 14.9C18.23 15.21 18.18 15.53 18.01 15.79L16.75 13.99ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" /></svg> );
const FacebookIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10-4.5-10-10-10zm1.6 10.96h-1.6v6h-3v-6h-1.5v-2.5h1.5v-2c0-1.2.6-2.5 2.5-2.5h2v2.5h-1.4c-.2 0-.6.1-.6.6v1.4h2l-.4 2.5z"></path></svg> );
const XIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> );
const YouTubeIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5.76 13.4c-.18.66-1.32 1.25-1.32 1.25-.9.3-4.44.3-4.44.3s-3.54 0-4.44-.3c0 0-1.14-.59-1.32-1.25-.26-1.1-.26-3.4 0-4.5.18-.66 1.32-1.25 1.32-1.25.9-.3 4.44-.3 4.44-.3s3.54 0 4.44.3c0 0 1.14.59 1.32 1.25.26 1.1.26 3.4 0 4.5zm-5.7-6.9l-2.3 2.1 2.3 2.1v-4.2z"></path></svg> );
const TikTokIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.07a10.02 10.02 0 01-3.54-2.87c-.1-.13-.2-.27-.29-.4v6.52c0 2.22-1.8 4-4 4s-4-1.78-4-4c0-2.22 1.8-4 4-4 .36 0 .71.05 1.05.14v4.03c-.34-.08-.69-.13-1.05-.13a1.99 1.99 0 00-2 2c0 1.1.9 2 2 2s2-.9 2-2z"></path></svg> );


export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const yourWhatsAppNumber = '6281210957010';
  const yourEmailAddress = 'fitrisetia2003@gmail.com';

  const handleWhatsAppClick = () => {
    const defaultMessage = encodeURIComponent(`Halo Fitri, saya ingin bertanya tentang...`);
    window.open(`https://wa.me/${yourWhatsAppNumber}?text=${defaultMessage}`, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari Portofolio: ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    window.location.href = `mailto:${yourEmailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[var(--accent-navy-default)] text-white min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Mari Terhubung</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Saya selalu terbuka untuk kolaborasi, proyek baru, atau sekadar berbincang. Jangan ragu untuk menghubungi saya.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center"><MessageSquare className="mr-3 text-[var(--accent-navy-light)]"/>Hubungi Langsung</h3>
              <div className="space-y-4">
                <button onClick={handleWhatsAppClick} className="w-full flex items-center gap-4 p-4 bg-black/20 rounded-xl hover:bg-black/40 transition-colors">
                  <WhatsAppIcon />
                  <div>
                    <p className="font-semibold text-lg">WhatsApp</p>
                    <p className="text-sm text-gray-400">Cara tercepat untuk respons</p>
                  </div>
                </button>
                {/* --- PERUBAHAN 2: Ganti <a> dengan <Link> --- */}
                <Link href={`mailto:${yourEmailAddress}`} className="w-full flex items-center gap-4 p-4 bg-black/20 rounded-xl hover:bg-black/40 transition-colors">
                  <Mail size={24} className="text-red-400"/>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-sm text-gray-400">Untuk pertanyaan lebih detail</p>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Temukan Saya di</h3>
              <div className="flex gap-4 flex-wrap">
                {/* --- PERUBAHAN 3: Semua <a> diganti dengan <Link> --- */}
                <Link href="#" target="_blank" title="LinkedIn" className="p-3 bg-black/20 rounded-full hover:bg-[var(--accent-navy-light)] transition-colors"><Linkedin /></Link>
                <Link href="https://www.instagram.com/_likestory2_/" target="_blank" title="Instagram" className="p-3 bg-black/20 rounded-full hover:bg-[var(--accent-navy-light)] transition-colors"><Instagram /></Link>
                <Link href="https://x.com/0nol_" target="_blank" title="X (Twitter)" className="p-3 bg-black/20 rounded-full hover:bg-[var(--accent-navy-light)] transition-colors"><XIcon /></Link>
                <Link href="#" target="_blank" title="Facebook" className="p-3 bg-black/20 rounded-full hover:bg-[var(--accent-navy-light)] transition-colors"><FacebookIcon /></Link>
                <Link href="#" target="_blank" title="YouTube" className="p-3 bg-black/20 rounded-full hover:bg-[var(--accent-navy-light)] transition-colors"><YouTubeIcon /></Link>
                <Link href="#" target="_blank" title="TikTok" className="p-3 bg-black/20 rounded-full hover:bg-[var(--accent-navy-light)] transition-colors"><TikTokIcon /></Link>
              </div>
            </div>
          </div>
          <div className="bg-black/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Atau kirim pesan dari sini</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nama Anda</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--accent-navy-light)] focus:outline-none"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Anda</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--accent-navy-light)] focus:outline-none"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Pesan</label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required rows={5} className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--accent-navy-light)] focus:outline-none"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-[var(--accent-navy-light)] text-[var(--accent-navy-soft)] font-bold rounded-full hover:bg-white transition-colors duration-300">
                  Kirim Pesan <Send size={18}/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}