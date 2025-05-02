'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/client';

type News = {
  id: string;
  title: string;
  summary: string;
  url: string;
  thumbnail: string;
  created_at: string;
};

export default function NewsGrid() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        console.log('📦 뉴스:', data);
        console.log('⚠️ 에러:', error);
        if (data) setNews(data);
      });
  }, []);

  return (
    <section className="grid grid-cols-1 gap-10">
      {news.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col sm:flex-row ${
            index % 2 === 1 ? 'sm:flex-row-reverse' : ''
          } gap-6 items-center group`}
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 h-[300px] bg-white flex items-center justify-center rounded-lg overflow-hidden"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="max-h-full w-full object-contain"
            />
          </a>

          <div className="sm:w-1/2 space-y-2">
            <p className="text-[10px] text-gray-400">ARTISTCOMPANY —</p>
            <h3 className="text-base font-medium leading-snug text-gray-800 group-hover:underline">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
