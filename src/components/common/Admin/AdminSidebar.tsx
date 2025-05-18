'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-48 bg-white text-black p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6">Admin</h2>

      <nav className="flex flex-col space-y-4">
        <Link
          href="/admin/news"
          className={`
            ${pathname === '/admin/news' ? 'font-bold underline' : ''}
            hover:underline
          `}
        >
          📰 News 등록
        </Link>

        <Link
          href="/admin/calendar"
          className={`
            ${pathname === '/admin/calendar' ? 'font-bold underline' : ''}
            hover:underline
          `}
        >
          📅 Schedule 등록
        </Link>
      </nav>
    </aside>
  );
}
