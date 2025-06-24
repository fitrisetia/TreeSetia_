// File: app/blog/page.tsx
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Ini adalah Server Component, sangat cepat.
export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="bg-[var(--accent-navy-default)] text-white min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Catatan & Pikiran</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Kumpulan cerita, pemikiran, dan tutorial seputar dunia kreatif dan teknologi yang saya geluti.
          </p>
        </header>

        <main className="max-w-4xl mx-auto space-y-12">
          {allPosts.map(({ id, date, title, excerpt, coverImage }) => (
            <Link key={id} href={`/blog/${id}`} className="block group">
              <article className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 overflow-hidden rounded-xl">
                  <img src={coverImage} alt={`Cover untuk ${title}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-400 mb-2">{new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <h2 className="font-display text-2xl mb-3 group-hover:text-[var(--accent-navy-light)] transition-colors">{title}</h2>
                  <p className="text-gray-300 mb-4">{excerpt}</p>
                  <div className="inline-flex items-center font-semibold text-[var(--accent-navy-light)]">
                    Baca Selengkapnya <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}