import { NextResponse } from 'next/server';
import metadata from 'url-metadata';

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    const meta = await metadata(url);
    return NextResponse.json({
      title: meta.title,
      summary: meta.description,
      thumbnail: meta.image,
      created_at: meta['article:published_time'] || new Date().toISOString(),
    });
  } catch (err) {
    console.error('메타데이터 파싱 에러:', err); // 사용됨!
    return NextResponse.json(
      { error: '❌ 메타데이터 파싱 실패' },
      { status: 500 }
    );
  }
}
