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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] tracking-[0.1em]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{schedule.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-gray-200 mb-4" />
        <div className="space-y-3">
          <p className="text-gray-600">
            <span className="font-semibold">아티스트:</span> {schedule.Artist}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">날짜:</span> {schedule.date}
          </p>
          {schedule.description && (
            <p className="text-gray-600">
              <span className="font-semibold">설명:</span>{' '}
              {schedule.description}
            </p>
          )}
          {schedule.location && (
            <p className="text-gray-600">
              <span className="font-semibold">장소:</span> {schedule.location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
