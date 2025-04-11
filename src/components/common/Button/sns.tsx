import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SNS_LINKS = [
  {
    href: 'https://www.youtube.com/channel/UCLTZj7RzpoUCG_cqD0NVHbw',
    src: 'https://www.artistcompany.co.kr/wp-content/uploads/2016/11/youtube_icon.png',
    alt: 'Artist Company YouTube',
    width: 16,
    height: 10,
  },
  {
    href: 'https://www.instagram.com/artistcompanyofficial/#',
    src: 'https://www.artistcompany.co.kr/wp-content/uploads/2016/11/instagram_icon.png',
    alt: 'Artist Company Instagram',
    width: 15,
    height: 15,
  },
  {
    href: 'https://x.com/ACOM__official',
    src: 'https://www.artistcompany.co.kr/wp-content/uploads/2024/05/x_logo.png',
    alt: 'Artist Company X(Twitter)',
    width: 15,
    height: 15,
  },
];

export default function GNBFollow() {
  return (
    <div className="gnb-fa flex gap-4 w-[106px] items-center justify-center">
      {SNS_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`block relative flex items-center ${
            index === 0 ? 'w-[16px] h-[10px]' : 'w-[15px] h-[15px]'
          }`}
        >
          <Image
            src={link.src}
            alt={link.alt}
            width={link.width}
            height={link.height}
            className="object-contain hover:opacity-80 transition-opacity"
          />
        </Link>
      ))}
    </div>
  );
}
