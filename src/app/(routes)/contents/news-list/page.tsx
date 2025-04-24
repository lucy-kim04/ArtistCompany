import ContentsLayout from '@/styles/ContentsLayout';
import NewsGrid from '@/components/features/Contents/NewsGrid';

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="mb-12">
        <h1 className="text-center text-[20px] text-[#222222] mb-20 tracking-[0.15em]">
          News
        </h1>
        <div className="h-px bg-gray-200" />
      </div>

      <ContentsLayout>
        <NewsGrid />
      </ContentsLayout>
    </div>
  );
}
