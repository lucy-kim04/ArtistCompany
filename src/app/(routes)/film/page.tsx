'use client';

import Image from 'next/image';
import Link from 'next/link';

const films = [
  {
    title: 'Tell Me That You Love Me',
    href: '/film/tell-me-that-you-love-me',
    image: '/images/Tell-Me-That-You-Love-Me.png',
  },
  {
    title: 'HUNT',
    href: '/film/hunt',
    image: '/images/Hunt.jpg',
  },
  {
    title: 'The Silent sea',
    href: '/film/the-silent-sea',
    image: '/images/Netflix-series-The-Silent-Sea.jpg',
  },
  {
    title: 'Trade Your Love',
    href: '/film/trade-your-love',
    image: '/images/trade-your-love.jpg',
  },
];

export default function FilmMainGrid() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-center text-[20px] text-[#222222] mb-20 tracking-[0.15em]">
        Film by Artist Studio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {films.map((film) => (
          <Link
            key={film.href}
            href={film.href}
            className="group block text-center"
          >
            <div className="relative w-full aspect-[3/4]">
              <img
                src={film.image}
                alt={film.title}
                className="w-full aspect-[3/4] object-cover rounded-md group-hover:opacity-90"
              />
            </div>
            <p className="mt-2 text-sm text-gray-700">{film.title}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
