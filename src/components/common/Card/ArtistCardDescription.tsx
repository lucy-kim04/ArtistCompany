import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArtistCardDescriptionProps {
  name: string;
  engName: string;
  imageUrl: string;
  href: string;
  filmography?: string;
}

export default function ArtistCardDescription({
  name,
  engName,
  imageUrl,
  href,
  filmography,
}: ArtistCardDescriptionProps) {
  return (
    <Link
      href={href}
      className="block group relative mt-8 aspect-square overflow-hidden rounded-md"
    >
      {/* 이미지 */}
      <Image
        src={imageUrl}
        alt={name}
        fill
        className={`object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm ${
          name === 'Park Se Wan' ? 'object-top' : ''
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Hover 시 오버레이 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm opacity-80 mb-2">{engName}</p>
          {filmography && (
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {filmography}
            </p>
          )}
        </div>
      </div>

      {/* 하단 고정 이름 (선택 사항) */}
      <div className="mt-4 text-center">
        <h3 className="text-[12px] text-[#666666] tracking-[0.15em] font-inherit">
          {name}
        </h3>
      </div>
    </Link>
  );
}
