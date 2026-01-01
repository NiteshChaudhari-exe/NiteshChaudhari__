import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const stats = [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '+', label: 'Projects Completed' },
    { value: 50, suffix: '+', label: 'Happy Clients' },
    { value: 15, suffix: '+', label: 'Awards Won' },
];
function Counter({ end, suffix, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const { ref, isVisible } = useScrollAnimation(0.5);
    useEffect(() => {
        if (!isVisible)
            return;
        const startTime = Date.now();
        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);
            if (currentCount !== countRef.current) {
                countRef.current = currentCount;
                setCount(currentCount);
            }
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);
    return (_jsxs("span", { ref: ref, children: [count, suffix] }));
}
export function StatsCounter() {
    const { ref, isVisible } = useScrollAnimation(0.3);
    return (_jsx("section", { className: "py-20 bg-gradient-to-r from-blue-500 to-purple-600", children: _jsx("div", { className: "container mx-auto px-6", children: _jsx("div", { className: "max-w-6xl mx-auto", ref: ref, children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs("div", { className: `text-center text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 100}ms` }, children: [_jsx("div", { className: "text-5xl mb-2", children: _jsx(Counter, { end: stat.value, suffix: stat.suffix }) }), _jsx("p", { className: "text-blue-100", children: stat.label })] }, index))) }) }) }) }));
}
