import YoutubeNews from '@/components/features/home/YoutubeNews';

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <div>
        <h2 className="text-center text-[20px] mb-[76px] tracking-[0.15em]">
          News
        </h2>
        <YoutubeNews />
      </div>
    </div>
  );
}
