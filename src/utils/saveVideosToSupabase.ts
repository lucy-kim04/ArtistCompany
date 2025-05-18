import supabase from './server';
import type { Video } from './video.type'; // 타입 경로는 네 프로젝트에 맞게

export const saveVideosToSupabase = async (videos: Video[]) => {
  for (const video of videos) {
    const { error } = await supabase
      .from('videos')
      .upsert(video, { onConflict: 'id' });

    if (error) console.error('❌ Failed:', error);
    else console.log('✅ Inserted:', video.title);
  }
};
