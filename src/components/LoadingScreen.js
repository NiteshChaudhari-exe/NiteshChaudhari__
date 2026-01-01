import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    if (!isLoading)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex items-center justify-center transition-opacity duration-500", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white animate-scale-in", children: _jsx("span", { className: "text-3xl", children: "N" }) }), _jsxs("div", { className: "flex gap-2 justify-center", children: [_jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce", style: { animationDelay: '0ms' } }), _jsx("div", { className: "w-3 h-3 bg-purple-500 rounded-full animate-bounce", style: { animationDelay: '150ms' } }), _jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce", style: { animationDelay: '300ms' } })] })] }) }));
}
