'use client';

import { useState } from 'react';

export default function NewsForm() {
  const [form, setForm] = useState({
    title: '',
    summary: '',
    url: '',
    thumbnail: '',
    created_at: '',
  });

  const [loading, setLoading] = useState(false);
  const [fetchingMeta, setFetchingMeta] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchMeta = async () => {
    if (!form.url) {
      alert('URL을 입력하세요.');
      return;
    }

    setFetchingMeta(true);

    try {
      const res = await fetch('/api/news/fetch-meta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: form.url }),
      });

      const data = await res.json();

      if (res.ok) {
        setForm((prev) => ({
          ...prev,
          title: data.title || '',
          summary: data.summary || '',
          thumbnail: data.thumbnail || '',
          created_at: data.created_at
            ? data.created_at.slice(0, 16)
            : new Date().toISOString().slice(0, 16),
        }));
      } else {
        alert(data.error || '불러오기 실패');
      }
    } catch (error) {
      console.error(error);
      alert('서버 에러 발생');
    } finally {
      setFetchingMeta(false);
    }
  };

  const handleSubmit = async () => {
    if (!form.title || !form.url || !form.created_at) {
      alert('필수 항목을 입력하세요.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'news',
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
          summary: '',
          url: '',
          thumbnail: '',
          created_at: '',
        });
      }
    } catch (error) {
      console.error(error);
      alert('서버 에러 발생');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">📰 News 등록</h1>

      <div className="flex space-x-2">
        <input
          name="url"
          placeholder="기사 URL 입력"
          value={form.url}
          onChange={handleChange}
          className="flex-1 border px-3 py-2 rounded"
        />
        <button
          type="button"
          onClick={fetchMeta}
          disabled={fetchingMeta}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          {fetchingMeta ? '불러오는 중...' : '🔍 불러오기'}
        </button>
      </div>

      <input
        name="title"
        placeholder="제목 입력"
        value={form.title}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        name="summary"
        placeholder="요약 입력"
        value={form.summary}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        name="thumbnail"
        placeholder="썸네일 URL 입력"
        value={form.thumbnail}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        name="created_at"
        type="datetime-local"
        value={form.created_at}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
      >
        {loading ? '등록 중...' : '등록'}
      </button>
    </div>
  );
}
