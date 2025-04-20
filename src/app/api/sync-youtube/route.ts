import { fetchLatestVideos } from '@/utils/supabase/fetchLatestVideos';
import { saveVideosToSupabase } from '@/utils/supabase/saveVideosToSupabase';

export async function GET() {
  try {
    const videos = await fetchLatestVideos();
    await saveVideosToSupabase(videos);
    return Response.json({ success: true, count: videos.length });
  } catch (error: any) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
