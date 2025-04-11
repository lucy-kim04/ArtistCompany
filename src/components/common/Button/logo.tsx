import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="block relative">
      <Image
        src="https://www.artistcompany.co.kr/wp-content/uploads/2017/02/Untitled-2.png"
        alt="Artist Company Logo"
        width={84}
        height={38}
        priority
        className="object-contain ml-[12px]"
      />
    </Link>
  );
}
