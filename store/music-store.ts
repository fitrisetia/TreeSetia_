// Gunakan Zustand untuk global state
import { create } from 'zustand';
import { Playlist, Song } from '@/app/music/data';

interface MusicState {
  currentPlaylist: Playlist | null;
  currentSong: Song | null;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  actions: {
    playSong: (playlist: Playlist, song: Song, force?: boolean) => void;
    togglePlay: () => void;
    playNext: () => void;
    playPrevious: () => void;
    closePlayer: () => void;
    setDuration: (d: number) => void;
    setCurrentTime: (t: number) => void;
  };
}

export const useMusicStore = create<MusicState>((set, get) => ({
  currentPlaylist: null,
  currentSong: null,
  isPlaying: false,
  duration: 0,
  currentTime: 0,

  actions: {
    playSong: (playlist, song, force = false) => {
      const { currentSong, currentPlaylist, isPlaying } = get();
      const isSameSong = currentSong?.id === song.id;
      const isSamePlaylist = currentPlaylist?.id === playlist.id;

      console.log('▶️ playSong dipanggil:', {
        song: song.title,
        isSameSong,
        isSamePlaylist,
        isPlaying,
        force
      });

      if (!force && isSameSong && isSamePlaylist && isPlaying) {
        console.log('⛔ Lagu sedang diputar, tidak mengulang.');
        return;
      }

      set({
        currentPlaylist: playlist,
        currentSong: song,
        isPlaying: true,
        currentTime: 0
      });
    },

    togglePlay: () => {
      const { isPlaying } = get();
      set({ isPlaying: !isPlaying });
    },

    playNext: () => {
      const { currentPlaylist, currentSong } = get();
      if (!currentPlaylist || !currentSong) return;

      const songs = currentPlaylist.songs;
      const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
      const nextIndex = currentIndex + 1;

      if (nextIndex < songs.length) {
        set({
          currentSong: songs[nextIndex],
          isPlaying: true,
          currentTime: 0
        });
      } else {
        console.log('🔚 Sudah di lagu terakhir');
      }
    },

    playPrevious: () => {
      const { currentPlaylist, currentSong } = get();
      if (!currentPlaylist || !currentSong) return;

      const songs = currentPlaylist.songs;
      const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
      const prevIndex = currentIndex - 1;

      if (prevIndex >= 0) {
        set({
          currentSong: songs[prevIndex],
          isPlaying: true,
          currentTime: 0
        });
      } else {
        console.log('🔙 Sudah di lagu pertama');
      }
    },

    closePlayer: () =>
      set({
        currentPlaylist: null,
        currentSong: null,
        isPlaying: false,
        duration: 0,
        currentTime: 0
      }),

    setDuration: (d) => set({ duration: d }),

    setCurrentTime: (t) => set({ currentTime: t })
  }
}));
