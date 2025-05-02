'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

type CalendarValue = Date | null;

const ScheduleCalendar = () => {
  const [date, setDate] = useState<CalendarValue>(new Date());

  const formatMonthYear = (locale: string | undefined, date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // 날짜 타일의 내용을 커스터마이징하는 함수
  const tileContent = ({ date }: { date: Date }) => {
    // 여기에 해당 날짜의 데이터를 표시하는 로직을 추가하세요
    return (
      <div>
        {/* 예시 데이터 */}
        {date.getDate() === 2 && (
          <div style={{ color: '#E91E63' }}>회의 13:00</div>
        )}
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
