'use client';

import { useEffect, useState } from 'react';

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  published_at: string;
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

  return (
    <section className="flex gap-8">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          className="w-[500px]"
        >
          <img src={video.thumbnail} alt={video.title} className="rounded-lg" />
          <p className="mt-2 text-sm text-gray-600">{video.title}</p>
        </a>
      ))}
    </section>
  );
};

export default YoutubeNews;
