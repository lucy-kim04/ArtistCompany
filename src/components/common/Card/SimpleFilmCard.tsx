import React from 'react';
import Image from 'next/image';

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
    <div className="w-full h-full flex flex-col items-center">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-6 text-center tracking-[0.15em] w-full">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
}
