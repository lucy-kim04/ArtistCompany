'use client';

import React from 'react';

interface Schedule {
  id: string;
  title: string;
  date: string;
  description?: string;
  location?: string;
  Artist: string;
}

interface ScheduleModalProps {
  schedule: Schedule | null;
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({
  schedule,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !schedule) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\. /g, '. ');
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-medium tracking-[-0.02em] text-gray-900 mb-2">
              [{schedule.Artist}] {schedule.title}
            </h2>
            <p className="text-sm text-gray-500">{formatDate(schedule.date)}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {schedule.description && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                상세 내용
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {schedule.description}
              </p>
            </div>
          )}
          {schedule.location && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">장소</h3>
              <p className="text-sm text-gray-600">{schedule.location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
