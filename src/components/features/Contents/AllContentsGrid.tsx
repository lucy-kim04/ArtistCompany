// components/features/Contents/AllContentsGrid.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';

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
    <section className="grid grid-cols-1 gap-10">
      {items.map((item) =>
        item.type === 'news' ? (
          <NewsCard key={`news-${item.id}`} item={item} />
        ) : (
          <VideoCard key={`video-${item.id}`} item={item} />
        )
      )}
    </section>
  );
}

function NewsCard({ item }: { item: News }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      <a href={item.url} target="_blank" className="block w-full sm:w-1/2">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-[240px] object-cover rounded-lg"
        />
      </a>
      <div className="sm:w-1/2 space-y-2">
        <p className="text-[10px] text-gray-400">ARTISTCOMPANY —</p>
        <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
      </div>
    </div>
  );
}

function VideoCard({ item }: { item: Video }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      <a href={item.url} target="_blank" className="block w-full sm:w-1/2">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-[240px] object-cover rounded-lg"
        />
      </a>
      <div className="sm:w-1/2 space-y-2">
        <p className="text-[10px] text-gray-400">ARTISTCOMPANY —</p>
        <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
      </div>
    </div>
  );
}
