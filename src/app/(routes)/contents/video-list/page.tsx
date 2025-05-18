'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/client';
import ContentsLayout from '@/styles/ContentsLayout';
type Video = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  published_at: string;
};

export default function VideoPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('❌ 영상 불러오기 실패:', error);
      } else {
        setVideos(data);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-center text-[20px] text-[#222222] mb-20 tracking-[0.15em]">
          Video
        </h1>
        <div className="h-px bg-gray-200" />
      </div>

      <ContentsLayout>
        <section className="grid grid-cols-1 gap-10">
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col sm:flex-row ${
                index % 2 === 1 ? 'sm:flex-row-reverse' : ''
              } gap-6 items-center group`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full sm:w-1/2 h-[240px] object-cover rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <div className="sm:w-1/2 space-y-2">
                <p className="text-[10px] text-gray-400">ARTISTCOMPANY —</p>
                <h3 className="text-base font-medium leading-snug text-gray-800 group-hover:underline">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </section>
      </ContentsLayout>
    </div>
  );
}
