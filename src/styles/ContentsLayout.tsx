import Link from 'next/link';

export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 px-6 py-12">
      <aside className="space-y-6 border-r border-gray-200 pr-6">
        <h2 className="text-xs font-bold tracking-widest text-gray-600 uppercase mb-12">
          Contents Menu
        </h2>
        <nav className="space-y-5">
          <Link
            href="/contents"
            className="block text-sm text-gray-700 hover:underline"
          >
            All
          </Link>
          <Link
            href="/contents/news-list"
            className="block text-sm text-gray-700 hover:underline"
          >
            News
          </Link>
          <Link
            href="/contents/video-list"
            className="block text-sm text-gray-700 hover:underline"
          >
            Video
          </Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
