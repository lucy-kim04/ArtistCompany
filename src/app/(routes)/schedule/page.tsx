'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client'; // ✅ 중괄호 맞게!
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import './calendar.css'; // 아래에 같이 줄게

type Schedule = {
  id: string;
  title: string;
  date: string;
};

export default function SchedulePage() {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleChange = (val: Date | Date[] | null) => {
    if (!val || Array.isArray(val)) return;
    setValue(val);
  };

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('schedule').select('*');
      if (data) setSchedules(data);
    };
    fetchData();
  }, []);

  const tileContent = ({ date }: { date: Date }) => {
    const formatted = dayjs(date).format('YYYY-MM-DD');
    const hasSchedule = schedules.some((s) => s.date === formatted);
    return hasSchedule ? <div className="dot" /> : null;
  };

  return (
    <main className="pt-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <h2 className="text-center text-[20px] mb-[76px] tracking-[0.15em]">
            Schedule
          </h2>
          <hr className="border-t border-gray-200 mb-8" />

          {/* 캘린더 가운데 정렬 wrapper */}
          <div className="flex justify-center">
            <div className="w-full max-w-[1050px]">
              <Calendar
                onChange={(val) => {
                  if (!val || Array.isArray(val)) return;
                  setValue(val as Date);
                }}
                value={value}
                tileContent={({ date }) => (
                  <div className="custom-day-number">{date.getDate()}</div>
                )}
                calendarType="gregory"
                prev2Label={null}
                next2Label={null}
                formatShortWeekday={(locale, date) =>
                  ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
                }
                formatDay={(_, date) => String(date.getDate())}
                className="react-calendar"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
