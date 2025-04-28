import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 서버 전용 키
);

export async function POST(req: Request) {
  const body = await req.json();

  const { type, payload } = body;

  if (!type || !payload) {
    return NextResponse.json(
      { error: 'type과 payload가 필요합니다.' },
      { status: 400 }
    );
  }

  if (type === 'schedule') {
    const { error } = await supabase.from('schedule').insert([payload]);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  if (type === 'news') {
    const { error } = await supabase.from('news').insert([payload]);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  }

  // 타입 매칭 안될 때
  return NextResponse.json(
    { error: '지원하지 않는 type입니다.' },
    { status: 400 }
  );
}
