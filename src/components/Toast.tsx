import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import { setToastCallback } from '../utils/toast';
import type { Toast as ToastType } from '../utils/toast';

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    setToastCallback((toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 5000);
    });
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed top-20 right-4 z-[70] space-y-3">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle className="text-green-500" size={20} />,
          error: <XCircle className="text-red-500" size={20} />,
          info: <Info className="text-blue-500" size={20} />,
        };

        const bgColors = {
          success: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
          error: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800',
          info: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
        };

        return (
          <div
            key={toast.id}
            className={`flex items-start gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm animate-slide-in-right ${bgColors[toast.type]} max-w-md`}
          >
            {icons[toast.type]}
            <p className="flex-1 text-gray-900 dark:text-white text-sm">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close notification"
            >
              <X size={18} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
