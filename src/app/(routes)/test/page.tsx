import React from 'react';
import Logo from '@/components/common/Button/logo';
import GNBFollow from '@/components/common/Button/sns';

export default function TestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl mb-4">컴포넌트 테스트</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg mb-2">로고</h2>
            <Logo />
          </div>
          <div>
            <h2 className="text-lg mb-2">팔로우</h2>
            <GNBFollow />
          </div>
        </div>
      </div>
    </div>
  );
}
