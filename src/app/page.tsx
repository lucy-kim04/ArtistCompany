'use client';

import ProfileBanner from '@/components/features/home/ProfileBanner'; // ✅ 배너 컴포넌트
import YoutubeNews from '@/components/features/home/YoutubeNews';

export default function Page() {
  return (
    <div>
      <ProfileBanner />
      <div className="max-w-7xl mx-auto mt-10 p-4">
        <div className="mt-[120px]">
          {' '}
          <h2 className="text-center text-[20px] mb-[76px] tracking-[0.15em]">
            News
          </h2>
          <YoutubeNews />
        </div>
      </div>
    </div>
  );
}
