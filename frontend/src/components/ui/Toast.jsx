import { useEffect, useState } from "react";

export default function Toast({ message, type = "success", isVisible, onClose, duration = 5000 }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isVisible) {
      setProgress(100);
      const timer = setTimeout(onClose, duration);
      
      // Progress bar interval
      const interval = setInterval(() => {
        setProgress((prev) => Math.max(0, prev - (100 / (duration / 10))));
      }, 10);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  // Design Logic based on Type
  const isSuccess = type === "success";
  const borderColor = isSuccess ? "border-[var(--secondary-color)]" : "border-red-500";
  const iconColor = isSuccess ? "text-[var(--secondary-color)]" : "text-red-500";

  return (
    <div className="fixed top-10 left-10 z-100 animate-in fade-in slide-in-from-left-8 duration-300">
      <div className={`bg-(--primary-color) ${borderColor} border-l-4 text-white p-5 shadow-2xl rounded-sm flex items-start gap-4 min-w-75 relative overflow-hidden`}>
        
        {/* Status Icon */}
        <div className={`mt-1 ${iconColor}`}>
          {isSuccess ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold mb-1">
            {isSuccess ? "Reservation Success" : "Booking Error"}
          </h4>
          <p className="text-sm font-medium pr-4">{message}</p>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="text-white opacity-40 hover:opacity-100 transition-opacity text-lg leading-none"
        >
          &times;
        </button>

        {/* Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-white opacity-20 transition-all linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}