// saveVideosToSupabase.ts
import supabase from './server'; // ✅ 요거만 수정

export const saveVideosToSupabase = async (videos: any[]) => {
  for (const video of videos) {
    const { error } = await supabase
      .from('videos')
      .upsert(video, { onConflict: 'id' });

    if (error) console.error('❌ Failed:', error);
    else console.log('✅ Inserted:', video.title);
  }
};
