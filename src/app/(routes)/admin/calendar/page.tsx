'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase/client'; // 여기서 client.ts 불러옴

export default function AdminCalendarPage() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddSchedule = async () => {
    if (!title || !date) {
      alert('제목과 날짜는 필수입니다!');
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('schedule').insert([
      {
        title,
        date,
        description,
        location,
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      alert(`오류 발생: ${error.message}`);
    } else {
      alert('일정이 추가되었습니다!');
      setTitle('');
      setDate('');
      setDescription('');
      setLocation('');
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📅 관리자 일정 추가</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">날짜</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="예: 회사 창립일 행사"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">설명 (선택)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">장소 (선택)</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="예: 잠실 롯데타워"
          />
        </div>

        <button
          onClick={handleAddSchedule}
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          {isSubmitting ? '추가 중...' : '일정 추가'}
        </button>
      </div>
    </main>
  );
}
