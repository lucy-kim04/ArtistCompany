import React from 'react';
import ArtistCardDescription from '@/components/common/Card/ArtistCardDescription';

const ARTISTS = [
  {
    name: '안성기',
    engName: 'Ahn Sung ki',
    imageUrl: '/images/ArtistCard/ahn_sung_ki_card.png',
    href: '/artist/ahn-sung-ki',
    filmography: '영화 [실미도] /n 영화 [라디오스타]',
  },
  {
    name: 'Lee Jung Jae',
    imageUrl: '/images/ArtistCard/lee_jung_jae_card.jpg',
    href: '/artist/lee-jung-jae',
  },
  {
    name: 'Jung Woo Sung',
    imageUrl: '/images/ArtistCard/jung_woo_sung_card.jpg',
    href: '/artist/jung-woo-sung',
  },
  {
    name: 'Yum Jung Ah',
    imageUrl: '/images/ArtistCard/yum_jung_ah_card.jpg',
    href: '/artist/yum-jung-ah',
  },
  {
    name: 'Park Hae Jin',
    imageUrl: '/images/ArtistCard/park_hae_jin_card.jpg',
    href: '/artist/park-hae-jin',
  },
  {
    name: 'Kim Jong Soo',
    imageUrl: '/images/ArtistCard/kim_jong_soo_card.png',
    href: '/artist/kim-jong-soo',
  },
  {
    name: 'Park So Dam',
    imageUrl: '/images/ArtistCard/park_so_dam_card.jpg',
    href: '/artist/park-so-dam',
  },
  {
    name: 'Bae Seong Woo',
    imageUrl: '/images/ArtistCard/bae_seong_woo_card.jpg',
    href: '/artist/bae-seong-woo',
  },
  {
    name: 'Im Ji Yeon',
    imageUrl: '/images/ArtistCard/lim_ji_yeon_card.jpg',
    href: '/artist/im-ji-yeon',
  },
  {
    name: 'Shin Jung Keun',
    imageUrl: '/images/ArtistCard/shin_jung_keun_card.jpg',
    href: '/artist/shin-jung-keun',
  },
  {
    name: 'Kim Jun Han',
    imageUrl: '/images/ArtistCard/kim_jun_han_card.jpg',
    href: '/artist/kim-jun-han',
  },
  {
    name: 'Park Hoon',
    imageUrl: '/images/ArtistCard/park_hoon_card.jpg',
    href: '/artist/park-hoon',
  },
  {
    name: 'Won Jin A',
    imageUrl: '/images/ArtistCard/won_jin_a_card.jpg',
    href: '/artist/won-jin-a',
  },
  {
    name: 'Ko A Seong',
    imageUrl: '/images/ArtistCard/ko_a_seong_card.jpg',
    href: '/artist/ko-a-seong',
  },
  {
    name: 'Pyo Ji Hoon (P.O)',
    imageUrl: '/images/ArtistCard/pyo_ji_hoon_card.jpg',
    href: '/artist/pyo-ji-hoon',
  },
  {
    name: 'Kim Hye Yoon',
    imageUrl: '/images/ArtistCard/kim_hye_yoon_card.jpg',
    href: '/artist/kim-hye-yoon',
  },
  {
    name: 'Cho Yi Hyun',
    imageUrl: '/images/ArtistCard/cho_yi_hyun_card.jpg',
    href: '/artist/cho-yi-hyun',
  },
  {
    name: 'Park Se Wan',
    imageUrl: '/images/ArtistCard/park_se_wan_card.jpeg',
    href: '/artist/park-se-wan',
  },
  {
    name: 'Cha Rae Hyung',
    imageUrl: '/images/ArtistCard/cha_rae_hyung_card.jpg',
    href: '/artist/cha-rae-hyung',
  },
  {
    name: 'Kim Yoon Do',
    imageUrl: '/images/ArtistCard/kim_yoon_do_card.jpg',
    href: '/artist/kim-yoon-do',
  },
  {
    name: 'Choi Kyung Hoon',
    imageUrl: '/images/ArtistCard/choi_kyung_hoon_card.jpg',
    href: '/artist/choi-kyung-hoon',
  },
  {
    name: 'Yoo Jung Hoo',
    imageUrl: '/images/ArtistCard/yoo_jung_hoo_card.jpg',
    href: '/artist/yoo-jung-hoo',
  },
];

export default function ArtistDescriptionPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-40 sm:px-6 lg:px-8">
        <h2 className="text-center text-[20px] text-[#222222] mb-[50px]">
          Artist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-18">
          {ARTISTS.map((artist) => (
            <ArtistCardDescription
              key={artist.name}
              name={artist.name}
              engName={artist.engName} // 👈 추가
              imageUrl={artist.imageUrl}
              href={artist.href}
              filmography={artist.filmography} // 👈 추가
            />
          ))}
        </div>
      </div>
    </main>
  );
}
