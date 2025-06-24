'use client';

import { playlists } from './data';
import { useMusicStore } from '@/store/music-store';
import { Play, Pause, Music2, SkipBack, SkipForward } from 'lucide-react';
import React, { useRef, useEffect } from 'react';

//
// Komponen untuk satu kartu playlist
//
function PlaylistCard({ playlist }: { playlist: (typeof playlists)[0] }) {
  const { playSong } = useMusicStore(state => state.actions); // ambil fungsi play dari global store
  const { currentSong, currentPlaylist, isPlaying } = useMusicStore(); // ambil state aktif sekarang

  const isCurrentPlaylist = currentPlaylist?.id === playlist.id; // cek apakah playlist ini yang sedang aktif

  // Fungsi saat lagu diklik
const handleClick = (song: (typeof playlist.songs)[0]) => {
  const isSameSong = currentSong?.id === song.id;
  const isSamePlaylist = currentPlaylist?.id === playlist.id;

  // Cegah play ulang jika sudah sama dan sedang diputar
  if (isSameSong && isSamePlaylist && isPlaying) {
    console.log('🎧 Lagu sedang diputar, tidak mengulang.');
    return;
  }

  console.log('▶️ Lagu akan diputar:', song.title);
  playSong(playlist, song);
};

  return (
    <div className="bg-black/20 p-6 rounded-2xl">
      <div className="flex gap-6">
        {/* Gambar cover playlist */}
        <img
          src={playlist.coverImage}
          alt={playlist.title}
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-display text-2xl mb-1">{playlist.title}</h3>
          <p className="text-gray-300 mb-4">{playlist.description}</p>
        </div>
      </div>

      {/* Daftar lagu */}
      <div className="mt-4 space-y-2">
        {playlist.songs.map((song) => {
          const isCurrent = currentSong?.id === song.id && isCurrentPlaylist;

          return (
            <button
              key={song.id}
              onClick={() => handleClick(song)}
              className={`w-full flex items-center gap-4 p-3 rounded-lg transition-colors text-left ${
                isCurrent ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              <Music2 size={20} className="text-[var(--accent-navy-light)]" />
              <div>
                <p className="font-semibold">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

//
// Komponen untuk pemutar musik yang sticky di bawah
//
function MusicPlayerBar() {
  const { currentSong, isPlaying, actions } = useMusicStore();

  // Tidak ada audioRef di sini! Ini hanya UI
  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[var(--accent-navy-soft)] border-t border-[var(--accent-navy-light)]/20 text-white z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-lg">{currentSong.title}</p>
          <p className="text-sm text-gray-300">{currentSong.artist}</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={actions.playPrevious} className="p-2 hover:text-[var(--accent-navy-light)] transition-colors">
            <SkipBack />
          </button>
          <button
            onClick={actions.togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-[var(--accent-navy-light)] text-[var(--accent-navy-soft)] rounded-full hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button onClick={actions.playNext} className="p-2 hover:text-[var(--accent-navy-light)] transition-colors">
            <SkipForward />
          </button>
        </div>
      </div>
    </div>
  );
}


//
// Komponen utama halaman Musik
//
export default function MusicPage() {
  return (
    <div className="bg-[var(--accent-navy-default)] text-white min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        {/* Judul dan deskripsi halaman */}
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Dunia Musik Saya</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Koleksi playlist pribadi yang mengiringi setiap momen, dari fokus mendalam hingga santai tanpa beban.
          </p>
        </header>

        {/* Grid playlist */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </main>
      </div>

      {/* 🎵 Munculkan UI Player di halaman music */}
      <MusicPlayerBar />
    </div>
  );
}
