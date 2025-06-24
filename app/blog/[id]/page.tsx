// File: app/blog/[id]/page.tsx

import { getAllPostIds, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import React from 'react';

interface PageParams {
  params: {
    id: string;
  };
}

// Digunakan oleh Next.js untuk pre-render semua halaman berdasarkan [id]
export async function generateStaticParams() {
  const paths = getAllPostIds(); // Harus mengembalikan array id
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function PostPage({ params }: PageParams) {
  const postData = await getPostData(params.id);

  if (!postData) notFound();

  const accentColor = 'var(--accent-navy-light)';

  return (
    <article className="bg-[var(--accent-navy-default)] text-[var(--foreground)] min-h-screen">
      {/* HEADER COVER IMAGE */}
      <header className="relative h-[60vh] min-h-[400px] w-full flex items-end">
        <Image
          src={postData.coverImage}
          alt={postData.title}
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <div className="relative z-20 container mx-auto max-w-4xl px-4 pb-12 text-white">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            {postData.title}
          </h1>
          <div className="flex items-center gap-6 mt-4 text-lg text-gray-200 drop-shadow-md">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{postData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <time dateTime={postData.date}>
                {new Date(postData.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>
      </header>

      {/* KONTEN ARTIKEL */}
      <div className="container mx-auto max-w-3xl px-4 py-16 bg-[var(--accent-navy-default)] text-white rounded-xl shadow-lg">
        <div
          className="
            prose prose-lg max-w-none 
            prose-img:rounded-xl prose-img:shadow-lg 
            prose-h2:font-display prose-h2:text-3xl prose-h2:text-white 
            prose-p:text-gray-300 
            prose-a:font-semibold prose-a:transition-colors 
            prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400 
            prose-strong:text-white
          "
          style={
            {
              '--tw-prose-links': accentColor,
              '--tw-prose-blockquote-border': accentColor,
            } as React.CSSProperties
          }
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        {/* TOMBOL KEMBALI */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lg font-semibold group transition-colors"
            style={{ color: accentColor }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Semua Tulisan
          </Link>
        </div>
      </div>
    </article>
  );
}
