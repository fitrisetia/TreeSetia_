// File: app/gallery/data.ts

// Definisikan tipe data untuk setiap item galeri
export type GalleryItem = {
  id: number;
  title: string;
  category: 'Photography' | 'Dokumentasi';
  src: string;
  alt: string;
  width: number;  // <<< DITAMBAHKAN
  height: number; // <<< DITAMBAHKAN
};

// Ekspor data gambar Anda dari sini.
// Dengan begini, semua halaman akan mengambil dari sumber yang sama.
// CATATAN: Width dan Height adalah perkiraan. Harap sesuaikan dengan dimensi asli gambar Anda untuk optimasi terbaik.
export const galleryData: GalleryItem[] = [
  { id: 1, title: 'Saat Dunia Diam, Aku Masih Bertahan', category: 'Photography', src: 'https://i.pinimg.com/736x/57/76/64/577664f01b4bbfdcd60c87b67a9786d4.jpg', alt: 'Saat Dunia Diam, Aku Masih Bertahan', width: 1920, height: 1280 },
  { id: 2, title: 'Desain Aplikasi Mobile', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/55/18/7c/55187c1a3160932ab3c8aa6ba0f992df.jpg', alt: 'Screenshot desain aplikasi mobile', width: 500, height: 900 }, // Ini mungkin potret
  { id: 3, title: 'Jalanan Kota Malam Hari', category: 'Photography', src: 'https://i.pinimg.com/736x/47/d1/12/47d112f63551cbb82f6b4cfcd21782d2.jpg', alt: 'Suasana jalanan kota di malam hari', width: 1920, height: 1080 },
  { id: 4, title: 'Arsitektur Website Portofolio', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/dc/87/ba/dc87ba4c3fedef9c921b67c011e81f9f.jpg', alt: 'Cuplikan kode arsitektur website', width: 1200, height: 800 },
  { id: 5, title: 'Potret Hitam Putih', category: 'Photography', src: 'https://scontent.fbdo1-2.fna.fbcdn.net/v/t1.6435-9/44328546_682812255409752_1006151330957361152_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEzQHpw8Re8QfdrWQQ-xmcZRU965-s9IVhFT3rn6z0hWNk5-EKA1DkdQhvAtAMBzVDVy7loKLjOs9QUQU4yqbi0&_nc_ohc=HVun2gx17WIQ7kNvwFFWlZa&_nc_oc=AdmYZ7RphHiqXdomSYTXvVauNR4AyYUse9S5vgItYdEer5OomMdQzkxtjgW7aWbdwyQ&_nc_zt=23&_nc_ht=scontent.fbdo1-2.fna&_nc_gid=PSKf4nDn94ZdKlT4JX1s5Q&oh=00_AfNaIOOSCUmN7_kB7QvwVNYtba9aVZLLuioNvB0YEUdiyA&oe=6882208F', alt: 'Foto potret hitam putih', width: 800, height: 1200 }, // Ini mungkin potret
  { id: 6, title: 'Perihal Kopi', category: 'Dokumentasi', src: 'https://i.pinimg.com/736x/81/30/63/8130633f4bda1184bc65cc7a08a2318b.jpg', alt: 'Perihal Kopi', width: 1280, height: 800 },
  { id: 7, title: 'Langkah Membawa', category: 'Photography', src: 'https://scontent.fbdo1-3.fna.fbcdn.net/v/t39.30808-6/494517459_2362549127436048_5918749998240493510_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGEEpqPWtAWXgvnbt2gpB12mat4yMs-bHOZq3jIyz5sc4lEXTaIDidDqs03CpvenbAnA5-7q1M_7SLhzWgIS9en&_nc_ohc=FpXrW1bvc2QQ7kNvwHbVxaZ&_nc_oc=AdlrP7G209ooBLxG2Ou9tFu3P9NDugNAiDwc2ZMjkGdEOMeuftef-44Wzr7o9ZBOzyY&_nc_zt=23&_nc_ht=scontent.fbdo1-3.fna&_nc_gid=Zy2siWPkuWrzJZA8S93hpw&oh=00_AfNqFiQUW3KoOufbd_XVIiw_GOtfjZRGAQfdG53aWBfMPw&oe=6860B6A7', alt: 'Langkah Membawa', width: 1000, height: 750 },
  { id: 8, title: 'Gedung Pencakar Langit', category: 'Photography', src: 'https://i.pinimg.com/736x/87/b0/b1/87b0b1ba5d807e8be9ecbcacc732fd52.jpg', alt: 'Foto arsitektur gedung pencakar langit', width: 1600, height: 1000 },
];
// Pastikan Anda menambahkan data gambar lainnya sesuai kebutuhan.
