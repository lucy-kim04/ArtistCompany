import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FilmCardProps {
  title: string;
  year: number;
  imageUrl: string;
  href: string;
}

export default function FilmCard({
  title,
  year,
  imageUrl,
  href,
}: FilmCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        <p className="text-sm text-gray-600">{year}</p>
      </div>
    </Link>
  );
}
