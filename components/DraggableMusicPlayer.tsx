// File: app/components/DraggableMusicPlayer.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMusicStore } from '@/store/music-store';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import Image from 'next/image';

export default function DraggableMusicPlayer() {
  const {
    currentSong,
    currentPlaylist,
    isPlaying,
    duration,
    currentTime,
    actions
  } = useMusicStore();

  const playerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setPosition({
      x: window.innerWidth / 2 - 160,
      y: window.innerHeight - 100
    });
    setIsMounted(true);
  }, []);

  const handleDragStart = () => {
    isDragging.current = true;
    playerRef.current?.classList.add('cursor-grabbing');
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    playerRef.current?.classList.remove('cursor-grabbing');
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const movementX = 'movementX' in e ? e.movementX : clientX - (playerRef.current?.getBoundingClientRect().left || 0);
    const movementY = 'movementY' in e ? e.movementY : clientY - (playerRef.current?.getBoundingClientRect().top || 0);

    setPosition((p) => ({
      x: p.x + movementX,
      y: p.y + movementY
    }));
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('touchmove', handleDrag);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

const formatTime = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
};



  if (!currentSong || !currentPlaylist || !isMounted || pathname === '/music') {
    return null;
  }

  return (
    <div
      ref={playerRef}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      className="fixed w-80 cursor-grab bg-[var(--accent-navy-soft)]/80 text-white rounded-xl shadow-2xl z-50 select-none backdrop-blur-lg border border-white/10"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        opacity: isMounted ? 1 : 0
      }}
    >
      <div className="p-4 flex items-center gap-4">
        <Image
          src={currentPlaylist.coverImage}
          alt={currentPlaylist.title}
          width={64}
          height={64}
          className="rounded-md object-cover shadow-md"
        />
        <div className="flex-grow">
          <p className="font-bold text-md truncate">{currentSong.title}</p>
          <p className="text-sm text-gray-300">{currentSong.artist}</p>
          <div className="flex items-center gap-2 mt-2">
            <button onClick={actions.playPrevious} className="p-1 hover:text-[var(--accent-navy-light)] transition-colors">
              <SkipBack size={18} />
            </button>
            <button
              onClick={actions.togglePlay}
              className="w-8 h-8 flex items-center justify-center bg-[var(--accent-navy-light)] text-[var(--accent-navy-soft)] rounded-full hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button onClick={actions.playNext} className="p-1 hover:text-[var(--accent-navy-light)] transition-colors">
              <SkipForward size={18} />
            </button>
          </div>
        </div>
        <button onClick={actions.closePlayer} className="self-start p-1 hover:text-[var(--accent-navy-light)]">
          <X size={18} />
        </button>
      </div>

      <div className="px-4 pb-3">
        <div className="w-full bg-white/10 rounded-full h-1.5 group cursor-pointer">
          <div
            className="bg-[var(--accent-navy-light)] h-1.5 rounded-full"
            style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs mt-1 text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}