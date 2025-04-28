import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import NewsForm from './NewsForm'; // ✅ 이렇게 되어 있어야 함

export default async function NewsAdminPage() {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get('admin');

  if (!adminCookie || adminCookie.value !== '1') {
    redirect('/admin/login');
  }

  return (
    <div className="max-w-xl mx-auto p-8 space-y-4">
      <NewsForm /> {/* ✅ NewsForm 렌더 */}
    </div>
  );
}
