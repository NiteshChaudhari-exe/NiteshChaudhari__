import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (_jsx("button", { onClick: scrollToTop, className: `fixed bottom-8 right-8 z-50 p-4  text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`, "aria-label": "Scroll to top", children: _jsx(ArrowUp, { size: 25 }) }));
}
