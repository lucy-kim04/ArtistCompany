'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase/client';

export default function NewsAdminPage() {
  const [form, setForm] = useState({
    title: '',
    summary: '',
    url: '',
    thumbnail: '',
    created_at: '',
  });

  const [loading, setLoading] = useState(false);

  const fetchMeta = async () => {
    setLoading(true);
    const res = await fetch('/api/news/fetch-meta', {
      method: 'POST',
      body: JSON.stringify({ url: form.url }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (res.ok) {
      setForm((prev) => ({
        ...prev,
        ...data,
      }));
    } else {
      alert(data.error || '불러오기 실패');
    }
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { error } = await supabase.from('news').insert([form]);
    if (error) alert('❌ 저장 실패: ' + error.message);
    else alert('✅ 저장 완료!');
  };

  return (
    <div className="max-w-xl mx-auto p-8 space-y-4">
      <input
        name="url"
        placeholder="기사 URL 입력 후 [불러오기]"
        value={form.url}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <button
        onClick={fetchMeta}
        className="px-4 py-2 bg-gray-800 text-white rounded"
      >
        {loading ? '불러오는 중...' : '🔍 불러오기'}
      </button>

      <input
        name="title"
        placeholder="제목"
        value={form.title}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        name="summary"
        placeholder="요약"
        value={form.summary}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        name="thumbnail"
        placeholder="썸네일 URL"
        value={form.thumbnail}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        name="created_at"
        type="datetime-local"
        value={form.created_at.slice(0, 16)}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-black text-white rounded"
      >
        등록
      </button>
    </div>
  );
}
