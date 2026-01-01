import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import { setToastCallback } from '../utils/toast';
export function ToastContainer() {
    const [toasts, setToasts] = useState([]);
    useEffect(() => {
        setToastCallback((toast) => {
            setToasts((prev) => [...prev, toast]);
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== toast.id));
            }, 5000);
        });
    }, []);
    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };
    return (_jsx("div", { className: "fixed top-20 right-4 z-[70] space-y-3", children: toasts.map((toast) => {
            const icons = {
                success: _jsx(CheckCircle, { className: "text-green-500", size: 20 }),
                error: _jsx(XCircle, { className: "text-red-500", size: 20 }),
                info: _jsx(Info, { className: "text-blue-500", size: 20 }),
            };
            const bgColors = {
                success: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
                error: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800',
                info: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
            };
            return (_jsxs("div", { className: `flex items-start gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm animate-slide-in-right ${bgColors[toast.type]} max-w-md`, children: [icons[toast.type], _jsx("p", { className: "flex-1 text-gray-900 dark:text-white text-sm", children: toast.message }), _jsx("button", { onClick: () => removeToast(toast.id), className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors", "aria-label": "Close notification", children: _jsx(X, { size: 18 }) })] }, toast.id));
        }) }));
}
