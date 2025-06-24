'use client';

import React, { useRef, useEffect } from 'react';
import { useMusicStore } from '@/store/music-store';

export default function GlobalAudioPlayer() {
  const { currentSong, isPlaying, actions } = useMusicStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  // 🔁 Play / pause saat state isPlaying berubah
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error('🔇 Gagal play:', err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // 📦 Update duration dan currentTime ke store (hanya sekali listener!)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      actions.setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      actions.setDuration(audio.duration);
    };

    const handleEnded = () => {
      actions.playNext(); // Otomatis ke lagu berikutnya
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [actions]);

  // ▶️ Auto play saat lagu berubah (jika sedang isPlaying)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.play().catch((err) => console.error('🎵 Auto play gagal:', err));
    }
  }, [currentSong]);

  // ⛔ Jangan render jika belum ada lagu
  if (!currentSong) return null;

  return (
    <audio
      ref={audioRef}
      src={currentSong.src}
      key={currentSong.src} // force reload saat ganti lagu
    />
  );
}
