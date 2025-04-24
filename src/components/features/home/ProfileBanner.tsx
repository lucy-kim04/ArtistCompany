'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const profiles = [
  {
    name: 'Ahn Sung Ki',
    birth: 'January 1, 1952',
    debut: '1957 Film [The Twilight Train]',
    imagePC: '/images/MainBanner/안성기PC.jpg',
    imageMO: '/images/MainBanner/안성기MO.jpg',
    href: '/artist/ahn-sung-ki',
  },
  {
    name: 'Lee Jung Jae',
    birth: 'December 15, 1972',
    debut: '1993 Drama [Dinosaur Teacher]',
    imagePC: '/images/MainBanner/이정재PC.jpg',
    imageMO: '/images/MainBanner/이정재MO.jpg',
    href: '/artist/lee-jung-jae',
  },
  {
    name: 'Jung Woo Sung',
    birth: 'March 20, 1973',
    debut: '1994 Film [The Fox With Nine Tails]',
    imagePC: '/images/MainBanner/정우성PC.jpg',
    imageMO: '/images/MainBanner/정우성MO.jpg',
    href: '/artist/jung-woo-sung',
  },
];

export default function ProfileBanner() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // ✅ 5초 자동 슬라이드
    pauseOnHover: false,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="relative w-full h-[calc(100vw*9/16)] sm:h-[calc(100vw*3/8)]" // 16:9 비율로 고정
          >
            {/* PC 이미지 */}
            <div className="absolute inset-0 -z-10 hidden sm:block">
              <Image
                src={profile.imagePC}
                alt={profile.name}
                fill
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* 모바일 이미지 */}
            <div className="absolute inset-0 -z-10 block sm:hidden">
              <Image
                src={profile.imageMO}
                alt={profile.name}
                fill
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* 텍스트 오버레이 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <h2 className="text-3xl sm:text-6xl font-bold mb-4">
                {profile.name}
              </h2>
              <p className="text-base sm:text-xl mb-1">
                Birth. {profile.birth}
              </p>
              <p className="text-base sm:text-xl mb-6">
                Debut. {profile.debut}
              </p>
              <Link
                href={profile.href}
                className="inline-block text-sm sm:text-base font-semibold underline tracking-widest"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
