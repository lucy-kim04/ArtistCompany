'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import ContentsLayout from '@/styles/ContentsLayout';

interface BaseContent {
  id: string;
  title: string;
  thumbnail: string;
  created_at: string;
  url: string;
}

interface News extends BaseContent {
  summary: string;
  type: 'news';
}

interface Video extends BaseContent {
  type: 'video';
}

type Combined = News | Video;

export default function AllContentsGrid() {
  const [items, setItems] = useState<Combined[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const { data: news } = await supabase.from('news').select('*');
      const { data: videos } = await supabase.from('videos').select('*');

      const newsWithType = (news ?? []).map((item) => ({
        ...item,
        type: 'news' as const,
      }));
      const videosWithType = (videos ?? []).map((item) => ({
        ...item,
        type: 'video' as const,
      }));

      const combined = [...newsWithType, ...videosWithType];

      combined.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setItems(combined);
    };

    fetchContent();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="mb-12">
        {/* 제목 + 구분선 */}

        <h1 className="text-center text-[20px] text-[#222222] mb-20 tracking-[0.15em]">
          Contents
        </h1>
        <div className="h-px bg-gray-200" />
      </div>
      {/* 사이드 메뉴 + 콘텐츠 */}
      <ContentsLayout>
        <section className="grid grid-cols-1 gap-10">
          {items.map((item, index) =>
            item.type === 'news' ? (
              <NewsCard key={`news-${item.id}`} item={item} index={index} />
            ) : (
              <VideoCard key={`video-${item.id}`} item={item} index={index} />
            )
          )}
        </section>
      </ContentsLayout>
    </div>
  );
}

function NewsCard({ item, index }: { item: News; index: number }) {
  return (
    <div
      className={`flex flex-col sm:flex-row ${
        index % 2 === 1 ? 'sm:flex-row-reverse' : ''
      } gap-6 items-center`}
    >
      <a href={item.url} target="_blank" className="block w-full sm:w-1/2">
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="absolute top-1/2 left-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{ maxWidth: 'none' }} // 핵심: 가로는 제한 없이 잘리도록 허용
          />
        </div>
      </a>

      <div className="sm:w-1/2 space-y-2">
        <p className="text-[10px] text-gray-400">ARTISTCOMPANY —</p>
        <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
      </div>
    </div>
  );
}

function VideoCard({ item, index }: { item: Video; index: number }) {
  return (
    <div
      className={`flex flex-col sm:flex-row ${
        index % 2 === 1 ? 'sm:flex-row-reverse' : ''
      } gap-6 items-center`}
    >
      <a href={item.url} target="_blank" className="block w-full sm:w-1/2">
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="absolute top-1/2 left-1/2 h-full w-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{ maxWidth: 'none' }} // 핵심: 가로는 제한 없이 잘리도록 허용
          />
        </div>
      </a>

      <div className="sm:w-1/2 space-y-2">
        <p className="text-[10px] text-gray-400">ARTISTCOMPANY —</p>
        <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
      </div>
    </div>
  );
}
