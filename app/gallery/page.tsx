'use client'

import { useState, useMemo } from 'react';
import { galleryData } from './data';
import { Search } from 'lucide-react';
// --- PERUBAHAN: Impor komponen ImageGrid ---
import ImageGrid from './components/ImageGrid';

export default function AllGalleryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredImages = useMemo(() => {
    if (!searchQuery) return galleryData;
    return galleryData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div>
      <div className="relative max-w-md mx-auto mb-12">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari foto berdasarkan judul..."
          className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-full focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search size={20} />
        </div>
      </div>

      {/* --- PERUBAHAN: Gunakan komponen ImageGrid --- */}
      <ImageGrid images={filteredImages} />
    </div>
  );
}