import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // .env.local에 넣어둬야 함
);

export const saveVideosToSupabase = async (videos: any[]) => {
  for (const video of videos) {
    const { error } = await supabase
      .from('videos')
      .upsert(video, { onConflict: 'id' });

    if (error) console.error('❌ Failed:', error);
    else console.log('✅ Inserted:', video.title);
  }
};
