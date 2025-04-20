const API_KEY = process.env.YOUTUBE_API_KEY!;
const CHANNEL_ID = 'UCLTZj7RzpoUCG_cqD0NVHbw';

export const fetchLatestVideos = async () => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=5`
  );

  const data = await res.json();
  console.log('📺 유튜브 응답:', data); // 이거 추가

  if (!data.items) {
    throw new Error(`YouTube API 응답에 items가 없음: ${JSON.stringify(data)}`);
  }

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    published_at: item.snippet.publishedAt,
  }));
};
