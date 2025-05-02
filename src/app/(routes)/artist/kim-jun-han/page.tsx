'use client';

import React from 'react';
import SimpleFilmCard from '@/components/common/Card/SimpleFilmCard';
import Image from 'next/image';

const films = [
  {
    title: 'Newtopia',
    year: 2025,
    imageUrl: '/images/KimJunHan/Newtopia.webp',
  },
  {
    title: 'Good Partner',
    year: 2024,
    imageUrl: '/images/KimJunHan/GoodPartner.webp',
  },
  {
    title: 'Revolver',
    year: 2024,
    imageUrl: '/images/KimJunHan/Revolver.webp',
  },
  {
    title: 'A Man of Reason',
    year: 2023,
    imageUrl: '/images/KimJunHan/A-Man-of-Reason.png',
  },
  {
    title: 'Anna',
    year: 2022,
    imageUrl: '/images/KimJunHan/Anna.jpg',
  },
  {
    title: 'Parasite',
    year: 2019,
    imageUrl: '/images/parasite.png',
  },
  {
    title: 'Decision to Leave',
    year: 2022,
    imageUrl: '/images/decision-to-leave.png',
  },
];

export default function KimJunHanPage() {
  return (
    <div className="px-8 py-12">
      <h2 className="text-[#222222] text-[20px] font-[400] text-center mb-12 tracking-[0.15em]">
        김준한 Kim Jun Han 金俊漢
      </h2>
      <div className="w-full max-w-[1920px] mx-auto px-[5vw] mb-8">
        <div className="flex flex-col sm:flex-row w-full items-center justify-between">
          {/* 좌측 */}
          <div className="w-[290px] mb-6 sm:mb-0">
            <Image
              src="/images/KimJunHan/김준한1.jpg"
              alt="김준한1"
              width={290}
              height={360}
              className="w-[290px] h-auto object-cover"
            />
          </div>

          {/* 가운데 */}
          <div className="w-[450px] mb-6 sm:mb-0">
            <Image
              src="/images/KimJunHan/김준한2.jpg"
              alt="김준한2"
              width={450}
              height={360}
              className="w-[450px] h-auto object-cover"
            />
          </div>

          {/* 우측 */}
          <div className="w-[290px mb-6 sm:mb-0">
            <Image
              src="/images/KimJunHan/김준한3.jpg"
              alt="김준한3"
              width={290}
              height={360}
              className="w-[290px] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12 max-w-[1180px] w-full mx-auto">
        {films.map((film, index) => (
          <SimpleFilmCard
            key={index}
            title={film.title}
            year={film.year}
            imageUrl={film.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
