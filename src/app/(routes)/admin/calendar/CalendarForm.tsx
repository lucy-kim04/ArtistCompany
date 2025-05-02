'use client';

import { useState, useEffect } from 'react';

type ArtistType =
  | '안성기'
  | '이정재'
  | '정우성'
  | '염정아'
  | '박해진'
  | '김종수'
  | '박소담'
  | '배성우'
  | '임지연'
  | '신정근'
  | '김준한'
  | '박훈'
  | '원진아'
  | '고아성'
  | '표지훈'
  | '김혜윤'
  | '조이현'
  | '박세완'
  | '차래형'
  | '김윤도'
  | '최경호'
  | '유정후';

interface Artist {
  id: ArtistType;
  name: ArtistType;
}

export default function CalendarForm() {
  const [form, setForm] = useState({
    title: '',
    date: '',
    description: '',
    location: '',
    Artist: '' as ArtistType | '',
  });

  const [artists] = useState<Artist[]>([
    { id: '안성기', name: '안성기' },
    { id: '이정재', name: '이정재' },
    { id: '정우성', name: '정우성' },
    { id: '염정아', name: '염정아' },
    { id: '박해진', name: '박해진' },
    { id: '김종수', name: '김종수' },
    { id: '박소담', name: '박소담' },
    { id: '배성우', name: '배성우' },
    { id: '임지연', name: '임지연' },
    { id: '신정근', name: '신정근' },
    { id: '김준한', name: '김준한' },
    { id: '박훈', name: '박훈' },
    { id: '원진아', name: '원진아' },
    { id: '고아성', name: '고아성' },
    { id: '표지훈', name: '표지훈' },
    { id: '김혜윤', name: '김혜윤' },
    { id: '조이현', name: '조이현' },
    { id: '박세완', name: '박세완' },
    { id: '차래형', name: '차래형' },
    { id: '김윤도', name: '김윤도' },
    { id: '최경호', name: '최경호' },
    { id: '유정후', name: '유정후' },
  ]);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'schedule',
        payload: form,
      }),
    });
    if (!res.ok) {
      const data = await res.json();
      alert('❌ 저장 실패: ' + (data.error || 'Unknown Error'));
    } else {
      alert('✅ 저장 완료!');
      setForm({
        title: '',
        date: '',
        description: '',
        location: '',
        Artist: '',
      });
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">📅 Schedule 등록</h1>
      <div className="space-y-4">
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="Artist"
          value={form.Artist}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded bg-white pr-8 appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '15px',
          }}
        >
          <option value="">아티스트 선택</option>
          {artists.map((artist) => (
            <option key={artist.id} value={artist.id}>
              {artist.name}
            </option>
          ))}
        </select>
        <input
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="설명"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="location"
          placeholder="장소"
          value={form.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleSubmit}
          disabled={!form.Artist || !form.date || !form.title}
          className="w-full py-2 bg-black text-white rounded disabled:bg-gray-400"
        >
          등록
        </button>
      </div>
    </>
  );
}
