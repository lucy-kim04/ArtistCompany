import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import CalendarForm from './CalendarForm';
import AdminSidebar from '@/components/common/Admin/AdminSidebar';

export default async function CalendarAdminPage() {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get('admin');

  if (!adminCookie || adminCookie.value !== '1') {
    redirect('/admin/login');
  }

  return (
    <div className="max-w-xl mx-auto p-8 space-y-4">
      <AdminSidebar />
      <CalendarForm />
    </div>
  );
}
