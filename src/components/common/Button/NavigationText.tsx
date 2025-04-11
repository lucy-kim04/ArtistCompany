import React from 'react';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
  { name: 'Artist', href: '/artist' },
  { name: 'Contents', href: '/contents' },
  { name: 'Film', href: '/film' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Audition', href: '/audition' },
];

export default function NavigationText() {
  return (
    <nav className="flex gap-12 ml-5">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-[14px] tracking-[0.15em] text-[#555555] hover:text-black transition-colors font-['Roboto','Noto_Sans_KR',sans-serif]"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
