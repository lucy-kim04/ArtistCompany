'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/client';

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  published_at: string;
};

export default function YoutubeNewsGrid() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) console.error('❌ 영상 로딩 실패:', error);
      else setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[554.58px] h-[311.93px] px-2 flex-shrink-0"
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
      ))}
    </section>
  );
}
