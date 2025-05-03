import { fetchLatestVideos } from '@/utils/fetchLatestVideos';
import { saveVideosToSupabase } from '@/utils/saveVideosToSupabase';

export async function GET() {
  try {
    const videos = await fetchLatestVideos();
    await saveVideosToSupabase(videos);
    return Response.json({ success: true, count: videos.length });
  } catch (error: unknown) {
    const err = error as Error;
    return Response.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
