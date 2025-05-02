'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

type CalendarValue = Date | null;

interface Schedule {
  id: string;
  title: string;
  date: string;
}

const ScheduleCalendar = () => {
  const [date, setDate] = useState<CalendarValue>(new Date());
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/api/schedule');
        if (!response.ok) {
          throw new Error('Failed to fetch schedules');
        }
        const data = await response.json();
        console.log('Fetched schedules:', data);
        setSchedules(data);
      } catch (error) {
        console.error('스케줄을 불러오는데 실패했습니다:', error);
      }
    };

    fetchSchedules();
  }, []);

  const formatMonthYear = (locale: string | undefined, date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // 날짜 타일의 내용을 커스터마이징하는 함수
  const tileContent = ({ date }: { date: Date }) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${date.getFullYear()}-${month}-${day}`;

    const daySchedules = schedules.filter(
      (schedule) => schedule.date === dateStr
    );

    if (daySchedules.length === 0) return null;

    return (
      <div style={{ marginTop: '40px' }}>
        {daySchedules.map((schedule) => (
          <div
            key={schedule.id}
            style={{
              color: '#666',
              fontSize: '0.85em',
              marginBottom: '4px',
            }}
          >
            {schedule.title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center">
      <Calendar
        onChange={(value) => setDate(value as CalendarValue)}
        value={date}
        calendarType="gregory"
        formatShortWeekday={(_, date) => weekdays[date.getDay()]}
        formatDay={(_, date) => String(date.getDate())}
        formatMonthYear={formatMonthYear}
        tileContent={tileContent}
        className="calendar-custom"
      />
    </div>
  );
};

export default ScheduleCalendar;
