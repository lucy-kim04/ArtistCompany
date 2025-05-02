'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import ScheduleModal from './ScheduleModal';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

type CalendarValue = Date | null;

interface Schedule {
  id: string;
  title: string;
  date: string;
  description?: string;
  location?: string;
  Artist: string;
}

const ScheduleCalendar = () => {
  const [date, setDate] = useState<CalendarValue>(new Date());
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

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

  const handleScheduleClick = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    setIsModalOpen(true);
  };

  // 아티스트 목록 가져오기
  const artists = Array.from(
    new Set(schedules.map((schedule) => schedule.Artist))
  ).map((artist) => ({ id: artist, name: artist }));

  // 선택된 아티스트의 스케줄만 필터링
  const filteredSchedules = selectedArtist
    ? schedules.filter((schedule) => schedule.Artist === selectedArtist)
    : schedules;

  const tileContent = ({ date }: { date: Date }) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${date.getFullYear()}-${month}-${day}`;

    const daySchedules = filteredSchedules.filter(
      (schedule) => schedule.date === dateStr
    );

    if (daySchedules.length === 0) return null;

    return (
      <div style={{ marginTop: '40px' }}>
        {daySchedules.map((schedule) => (
          <div
            key={schedule.id}
            onClick={() => handleScheduleClick(schedule)}
            style={{
              color: '#666',
              fontSize: '0.85em',
              marginBottom: '4px',
              cursor: 'pointer',
            }}
          >
            {schedule.title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <select
          value={selectedArtist || ''}
          onChange={(e) => setSelectedArtist(e.target.value || null)}
          className="w-full border px-3 py-2 rounded bg-white pr-8 appearance-none [&>option:hover]:bg-pink-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '15px',
          }}
        >
          <option value="" className="hover:bg-pink-50">
            모든 아티스트
          </option>
          {artists.map((artist) => (
            <option
              key={artist.id}
              value={artist.id}
              className="hover:bg-pink-50"
            >
              {artist.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
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
        <ScheduleModal
          schedule={selectedSchedule}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default ScheduleCalendar;
