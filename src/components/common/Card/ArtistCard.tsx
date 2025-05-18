import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArtistCardProps {
  name: string;
  imageUrl: string;
  href: string;
}

export default function ArtistCard({ name, imageUrl, href }: ArtistCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative aspect-square overflow-hidden mt-8">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
            name === 'Park Se Wan' ? 'object-top' : ''
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-[12px] text-[#666666] tracking-[0.15em] font-inherit">
          {name}
        </h3>
      </div>
    </Link>
  );
}
