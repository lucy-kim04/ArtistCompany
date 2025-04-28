'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  published_at: string;
};

// ⬅️ 왼쪽 화살표
const PrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute left-[-40px] top-[170px] transform -translate-y-1/2 z-10 bg-white rounded-full p-1 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <ArrowLeft className="w-6 h-6 text-gray-700" />
    </button>
  );
};

// ➡️ 오른쪽 화살표
const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute right-[-40px] top-[170px] transform -translate-y-1/2 z-10 bg-white rounded-full p-1 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <ArrowRight className="w-6 h-6 text-gray-700" />
    </button>
  );
};

const YoutubeNews = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/videos');
        if (!res.ok) throw new Error('Fetch 실패');
        const data = await res.json();
        setVideos(data);
      } catch (err) {
        console.error('🔥 유튜브 영상 불러오기 실패:', err);
      }
    };
    fetchVideos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    variableWith: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative px-8">
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="px-2">
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              className="w-[554.58px] h-[311.93px] flex-shrink-0"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="mt-2 text-sm text-gray-600 text-center">
                {video.title}
              </p>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default YoutubeNews;
