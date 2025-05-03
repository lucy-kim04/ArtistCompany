const API_KEY = process.env.YOUTUBE_API_KEY!;
const CHANNEL_ID = 'UCLTZj7RzpoUCG_cqD0NVHbw';

type YoutubeAPIItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

export const fetchLatestVideos = async () => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=12`
  );

  const data = await res.json();

  if (!data.items) {
    throw new Error(`YouTube API 응답에 items가 없음: ${JSON.stringify(data)}`);
  }

  return (data.items as YoutubeAPIItem[]).map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    published_at: item.snippet.publishedAt,
  }));
};
