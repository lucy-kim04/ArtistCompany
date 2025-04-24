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
    imageMO: '/images/MainBanner/안성기mo.jpg',
    href: '/artist/ahn-sung-ki',
  },
  {
    name: 'Lee Jung Jae',
    birth: 'December 15, 1972',
    debut: '1993 Drama [Dinosaur Teacher]',
    imagePC: '/images/MainBanner/이정재PC.jpg',
    imageMO: '/images/MainBanner/이정재mo.jpg',
    href: '/artist/lee-jung-jae',
  },
  {
    name: 'Jung Woo Sung',
    birth: 'March 20, 1973',
    debut: '1994 Film [The Fox With Nine Tails]',
    imagePC: '/images/MainBanner/정우성PC.jpg',
    imageMO: '/images/MainBanner/정우성mo.jpg',
    href: '/artist/jung-woo-sung',
  },
  {
    name: 'Yum Jung Ah',
    birth: 'July 28, 1972',
    debut: '1991 Drama [Our Paradise]',
    imagePC: '/images/MainBanner/염정아PC.jpg',
    imageMO: '/images/MainBanner/염정아mo.jpg',
    href: '/artist/yum-jung-ah',
  },
  {
    name: 'Park Hae Jin',
    birth: 'May 1, 1983',
    debut: '2006 Drama [Famous Chil Princesses]',
    imagePC: '/images/MainBanner/박해진PC.jpg',
    imageMO: '/images/MainBanner/박해진mo.jpg',
    href: '/artist/park-hae-jin',
  },
  {
    name: 'Kim Jong Soo',
    birth: 'November 30, 1964',
    debut: '1985 Play [Equus]',
    imagePC: '/images/MainBanner/김종수PC.jpg',
    imageMO: '/images/MainBanner/김종수mo.jpg',
    href: '/artist/kim-jong-soo',
  },
  {
    name: 'Park So Dam',
    birth: 'September 8, 1991',
    debut: '2013 Film [Steel-Cold-Winter]',
    imagePC: '/images/MainBanner/박소담PC.jpg',
    imageMO: '/images/MainBanner/박소담mo.jpg',
    href: '/artist/park-so-dam',
  },
  {
    name: 'Bae Seong Woo',
    birth: 'November 21, 1972',
    debut: '1999 Musical [Witch Hunt]',
    imagePC: '/images/MainBanner/배성우PC.jpg',
    imageMO: '/images/MainBanner/배성우mo.jpg',
    href: '/artist/bae-seong-woo',
  },
  {
    name: 'Im Ji Yeon',
    birth: 'June 23, 1990',
    debut: '2011 Film [Dear Catastrophe]',
    imagePC: '/images/MainBanner/임지연PC.jpg',
    imageMO: '/images/MainBanner/임지연mo.jpg',
    href: '/artist/im-ji-yeon',
  },
  {
    name: 'Shin Jung Keun',
    birth: 'September 26, 1966',
    debut: '1997 Film [Profanity, 1818]',
    imagePC: '/images/MainBanner/신정근PC.jpg',
    imageMO: '/images/MainBanner/신정근mo.jpg',
    href: '/artist/shin-jung-keun',
  },
  {
    name: 'Kim Jun Han',
    birth: 'March 29, 1983',
    debut: '2005 izi 1st Original album [modern life...and...with izi...]',
    imagePC: '/images/MainBanner/김준한PC.jpg',
    imageMO: '/images/MainBanner/김준한mo.jpg',
    href: '/artist/kim-jun-han',
  },
  {
    name: 'Park Hoon',
    birth: 'April 27, 1981',
    debut: '2007 Musical [Oh! While You Were Sleeping]',
    imagePC: '/images/MainBanner/박훈PC.png',
    imageMO: '/images/MainBanner/박훈mo.png',
    href: '/artist/park-hoon',
  },
  {
    name: 'Won Jin A',
    birth: 'March 29, 1991',
    debut: '2015 Film [Catch Ball]',
    imagePC: '/images/MainBanner/원진아PC.png',
    imageMO: '/images/MainBanner/원진아mo.png',
    href: '/artist/won-jin-a',
  },
  {
    name: 'Ko A Seong',
    birth: 'August 10, 1992',
    debut: '2004 Drama [Oolla Boolla Blue-jjang]',
    imagePC: '/images/MainBanner/고아성PC.png',
    imageMO: '/images/MainBanner/고아성mo.png',
    href: '/artist/ko-a-seong',
  },
  {
    name: 'Pyo Ji Hoon (P.O)',
    birth: 'February 2, 1993',
    debut: '2011 Block B Single Album [Do U Wanna B?]',
    imagePC: '/images/MainBanner/표지훈PC.jpg',
    imageMO: '/images/MainBanner/표지훈mo.jpg',
    href: '/artist/pyo-ji-hoon',
  },
  {
    name: 'Kim Hye Yoon',
    birth: 'November 10, 1996',
    debut: '2013 TV Novel: Samsaengi',
    imagePC: '/images/MainBanner/김혜윤PC.png',
    imageMO: '/images/MainBanner/김혜윤mo.png',
    href: '/artist/kim-hye-yoon',
  },
  {
    name: 'Cho Yi Hyun',
    birth: 'December 8, 1999',
    debut: '2017 Drama [Revenge Note]',
    imagePC: '/images/MainBanner/조이현PC.jpg',
    imageMO: '/images/MainBanner/조이현mo.jpg',
    href: '/artist/cho-yi-hyun',
  },
  {
    name: 'Cha Rae Hyung',
    birth: 'June 16, 1984',
    debut: '2016 Film [The Boys Who Cried Wolf]',
    imagePC: '/images/MainBanner/차래형PC.jpg',
    imageMO: '/images/MainBanner/차래형mo.jpg',
    href: '/artist/cha-rae-hyung',
  },
  {
    name: 'Kim Yoon Do',
    birth: 'February 28, 1988',
    debut: "2013 Drama [The King's Daughter Su Baek Hyang]",
    imagePC: '/images/MainBanner/김윤도PC.jpg',
    imageMO: '/images/MainBanner/김윤도mo.jpg',
    href: '/artist/kim-yoon-do',
  },
  {
    name: 'Choi Kyung Hoon',
    birth: 'April 9, 1993',
    debut: '2019 Drama [Real Ending]',
    imagePC: '/images/MainBanner/최경훈PC.jpg',
    imageMO: '/images/MainBanner/최경훈mo.jpg',
    href: '/artist/choi-kyung-hoon',
  },
  {
    name: 'Yoo Jung Hoo',
    birth: 'October 27, 1997',
    debut: '2022 Drama [BAD GIRLFRIEND]',
    imagePC: '/images/MainBanner/유정후PC.jpg',
    imageMO: '/images/MainBanner/유정후mo.jpg',
    href: '/artist/yoo-jung-hoo',
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
      <div className=" mx-auto lg:w-[1720px] h-[618px]">
        <Slider {...settings}>
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="relative w-full h-[calc(100vw*9/16)] sm:h-[calc(100vw*3/8)] lg:w-[1720px] lg:h-[618px] mx-auto"
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
              <div className="absolute inset-0 -z-10 block md:hidden h-[560px]">
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
              <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-4 sm:pl-24 pl-6">
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
    </div>
  );
}
