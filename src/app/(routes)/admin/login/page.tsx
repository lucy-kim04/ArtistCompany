'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password === 'artistadmin!') {
      document.cookie = 'admin=1; path=/'; // ✅ 쿠키 심기
      router.push('/admin/news'); // ✅ 로그인 성공 후 이동
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-4 p-8 border rounded"
      >
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-black text-white py-2 rounded">
          로그인
        </button>
      </form>
    </div>
  );
}
