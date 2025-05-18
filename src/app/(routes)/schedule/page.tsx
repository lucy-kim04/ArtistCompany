'use client';

import ScheduleCalendar from '@/components/features/Schedule/Calendar';

export default function SchedulePage() {
  return (
    <main className="pt-[120px] px-40">
      <div className="max-w-7xl mx-auto">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <h2 className="text-center text-[20px] mb-[76px] tracking-[0.15em]">
            Schedule
          </h2>
          <hr className="border-t border-gray-200 mb-8" />

          <div>
            <div className="w-full max-w-[1050px]">
              <ScheduleCalendar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
