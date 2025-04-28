'use client';

import { useState } from 'react';

export default function CalendarForm() {
  const [form, setForm] = useState({
    title: '',
    date: '',
    description: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      });
    }
  };

  return (
    <>
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
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
        className="w-full py-2 bg-black text-white rounded"
      >
        등록
      </button>
    </>
  );
}
