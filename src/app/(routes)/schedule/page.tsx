'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import Calendar from 'react-calendar';

import './calendar.css';

type Schedule = {
  id: string;
  title: string;
  date: string;
};

export default function SchedulePage() {
  const [value, setValue] = useState<Date | null>(new Date());

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('schedule').select('*');
      if (data) setSchedules(data);
    };
    fetchData();
  }, []);

  return (
    <main className="pt-[120px] px-40">
      <div className="max-w-7xl mx-auto">
        <div className="mx-4 sm:mx-8 lg:mx-12">
          <h2 className="text-center text-[20px] mb-[76px] tracking-[0.15em]">
            Schedule
          </h2>
          <hr className="border-t border-gray-200 mb-8" />

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
