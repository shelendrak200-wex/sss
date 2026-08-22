import React from 'react';
import { X } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
  initialDoctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
  initialDoctorId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          <AppointmentSection
            isModal={true}
            initialTreatment={initialTreatment}
            initialDoctorId={initialDoctorId}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};
