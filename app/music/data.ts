// Definisikan tipe data untuk Lagu dan Playlist
export type Song = {
  id: number;
  title: string;
  artist: string;
  src: string; // Path ke file MP3 di folder /public
};

export type Playlist = {
  id: number;
  title: string;
  description: string;
  coverImage: string; // Path ke gambar cover
  songs: Song[];
};

// Data playlist dummy. Ganti dengan playlist dan lagu Anda.
export const playlists: Playlist[] = [
  {
    id: 1,
    title: 'Fokus & Produktif',
    description: 'Alunan Lofi dan instrumen untuk menemani kerja atau belajar.',
    coverImage: 'https://placehold.co/600x600/1C3879/EAE3D2.png?text=Fokus',
    songs: [
      { id: 101, title: 'Morning Coffee', artist: 'Lofi Girl', src: '/music/lofi-1.mp3' },
      { id: 102, title: 'Coding Late Night', artist: 'Chill Coder', src: '/music/lofi-2.mp3' },
      { id: 103, title: 'Study Session', artist: 'Focus Beats', src: '/music/lofi-3.mp3' },
    ],
  },
  {
    id: 2,
    title: 'Santai Sore Hari',
    description: 'Lagu-lagu akustik dan melodi yang menenangkan.',
    coverImage: 'https://placehold.co/600x600/9575DE/FFFFFF?text=Santai',
    songs: [
      { id: 201, title: 'Sunset Acoustic', artist: 'Guitar Moods', src: '/music/acoustic-1.mp3' },
      { id: 202, title: 'By The Fireplace', artist: 'Warm Tones', src: '/music/acoustic-2.mp3' },
    ],
  },
  {
    id: 3,
    title: 'Energi Pagi',
    description: 'Beat yang membangkitkan semangat untuk memulai hari.',
    coverImage: 'https://placehold.co/600x600/F5A623/FFFFFF?text=Energi',
    songs: [
        { id: 301, title: 'Sunrise Drive', artist: 'Upbeat Collective', src: '/music/upbeat-1.mp3' },
    ]
  }
];