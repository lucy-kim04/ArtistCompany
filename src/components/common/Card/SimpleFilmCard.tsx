import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SimpleFilmCardProps {
  title: string;
  year: number;
  imageUrl: string;
}

export default function SimpleFilmCard({
  title,
  year,
  imageUrl,
}: SimpleFilmCardProps) {
  return (
    <div className="block group w-[240px]">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-[12px] text-[#222222] tracking-[0.15em] font-inherit">
          {title}
        </h3>
        <p className="mt-2 text-[12px] text-[#666666] tracking-[0.15em]">
          {year}
        </p>
      </div>
    </div>
  );
}
