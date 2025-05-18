'use client';

import Image from 'next/image';

export default function WePage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4 text-gray-500 text-sm leading-relaxed space-y-12">
      <h1 className="text-center text-[20px] text-[#222222] mb-20 tracking-[0.15em]">
        About Us
      </h1>
      <hr className="border-t border-gray-200 mb-8" />

      <div className="w-full flex justify-center">
        <Image
          src="/images/actors_profile.png"
          alt="Artist Profile"
          width={800}
          height={400}
          className="rounded w-full max-w-3xl"
          priority
        />
      </div>

      <section className="text-center space-y-2 text-[20px] text-gray-400 py-10">
        좋은 사람들과 즐겁게 일하기 위해 만난, 우린 같은 꿈을 꾸는
        &rsquo;아티스트컴퍼니$&rsquo;입니다.
      </section>
    </main>
  );
}
