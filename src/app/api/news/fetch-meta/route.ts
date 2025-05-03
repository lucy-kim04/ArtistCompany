import { NextResponse } from 'next/server';

// YouTube 아이템 타입 정의
type YoutubeItem = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
};

// 요청 바디 타입 정의
type SyncYoutubeRequest = {
  items: YoutubeItem[];
};

export async function POST(req: Request) {
  const body: SyncYoutubeRequest = await req.json();
  const { items } = body;

  for (const item of items) {
    console.log('📹', item.title, item.publishedAt);

    // 예시: Supabase에 저장하거나 기타 처리
    // await saveToSupabase(item);
  }

  return NextResponse.json({ success: true });
}
