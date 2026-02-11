import { useEffect } from "react";

export default function Message_label({ message, isVisible, onClose, duration = 3000 }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-6 z-100 animate-fade-in-down">
      <div className="bg-(--primary-color) border-l-4 border-(--secondary-color) text-white px-6 py-4 shadow-2xl rounded-r-md flex items-center gap-4">
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-widest text-(--secondary-color) font-bold">
            Notification
          </p>
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}