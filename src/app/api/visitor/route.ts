import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

if (!process.env.SUPABASE_URL) {
  throw new Error('Missing env.SUPABASE_URL');
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY');
}

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,

  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export async function GET() {
  try {
    console.log('GET - Fetching visitor count...');
    const { data, error } = await supabase
      .from('visitors')
      .select('count')
      .eq('id', 1)
      .single();

    if (error) {
      console.error('GET - Supabase error:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      throw error;
    }

    console.log('GET - Success, count:', data?.count);
    return NextResponse.json({ total: data?.count || 0 });
  } catch (error: any) {
    console.error('GET - Full error:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: error?.message || 'Failed to fetch visitor count' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    console.log('POST - Fetching current count...');
    const { data: currentData, error: selectError } = await supabase
      .from('visitors')
      .select('count')
      .eq('id', 1)
      .single();

    if (selectError) {
      console.error('POST - Select error:', {
        message: selectError.message,
        details: selectError.details,
        hint: selectError.hint,
        code: selectError.code,
      });
      throw selectError;
    }

    const newCount = (currentData?.count || 0) + 1;
    console.log(
      'POST - Updating count from',
      currentData?.count,
      'to',
      newCount
    );

    const { data, error: updateError } = await supabase
      .from('visitors')
      .update({ count: newCount })
      .eq('id', 1)
      .select()
      .single();

    if (updateError) {
      console.error('POST - Update error:', {
        message: updateError.message,
        details: updateError.details,
        hint: updateError.hint,
        code: updateError.code,
      });
      throw updateError;
    }

    console.log('POST - Success, new count:', data?.count);
    return NextResponse.json({ success: true, total: data?.count || newCount });
  } catch (error: any) {
    console.error('POST - Full error:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: error?.message || 'Failed to update visitor count' },
      { status: 500 }
    );
  }
}
