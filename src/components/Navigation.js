import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';
import BlurText from '../components/BlurText';
// import GradientText from '../components/GradientText';
const handleAnimationComplete = () => {
    console.log("Animation completed!");
};
export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const activeSection = useActiveSection();
    const mobileMenuRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);
    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        // { label: 'Experience', href: '#experience' },
        // { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        // { label: 'Certifications', href: '#certifications' },
        // { label: 'Testimonials', href: '#testimonials' },
        // { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
    ];
    return (_jsx(motion.nav, { initial: { y: 0, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1, ease: 'easeOut' }, className: `fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-gray-200 dark:border-gray-700'
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-gray-200 dark:border-gray-700'}`, children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx("a", { href: "#home", className: "text-gray-900 dark:text-white flex items-center gap-2 group", children: _jsx("div", { className: "min-w-[120px] flex items-center justify-center text-sm group-hover:scale-110 transition-transform duration-300", children: _jsx(BlurText, { text: "Nitesh Chaudhari", delay: 900, animateBy: "words", direction: "top", onAnimationComplete: handleAnimationComplete, className: "text-2xl font-bold ml-4 text-gray-900 dark:text-white drop-shadow-sm" }) }) }), _jsx("div", { className: "hidden lg:flex items-center gap-6", children: navItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (_jsxs("a", { href: item.href, className: `text-sm transition-all duration-300 relative ${isActive
                                        ? 'text-blue-500 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`, children: [item.label, isActive && (_jsx("span", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 animate-scale-in" }))] }, item.label));
                            }) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("a", { href: "#CV.pdf", download: true, className: "hidden md:flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-all duration-500 hover:scale-105 text-sm", "aria-label": "Download CV", style: {
                                        border: '1px solid #38bdf8',
                                        transition: 'border-color 0.5s, background 0.5s, box-shadow 0.4s',
                                    }, onMouseEnter: e => {
                                        e.currentTarget.style.borderColor = '#63CFEB';
                                        e.currentTarget.style.background = 'rgba(99,207,235,0.08)';
                                        e.currentTarget.style.boxShadow = '0 0 18px 2px rgba(99,207,235,0.18)';
                                    }, onMouseLeave: e => {
                                        e.currentTarget.style.borderColor = '#38bdf8';
                                        e.currentTarget.style.background = '';
                                        e.currentTarget.style.boxShadow = '';
                                    }, children: [_jsx(Download, { size: 16 }), _jsx("span", { children: "CV" })] }), _jsx("button", { onClick: toggleTheme, className: "p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors", "aria-label": isDark ? 'Switch to light mode' : 'Switch to dark mode', children: isDark ? _jsx(Sun, { size: 20 }) : _jsx(Moon, { size: 20 }) }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white", "aria-label": "Toggle menu", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] })] }), isOpen && (_jsxs("div", { className: "lg:hidden py-4 border-t border-gray-200 dark:border-gray-700", ref: mobileMenuRef, children: [navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (_jsx("a", { href: item.href, className: `block py-2 transition-colors ${isActive
                                    ? 'text-blue-500 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`, onClick: () => setIsOpen(false), children: item.label }, item.label));
                        }), _jsxs("a", { href: "/CV.pdf", download: true, className: "w-full mt-4 flex items-center justify-center gap-2 px-4 py- text-white rounded-lg transition-all duration-500", style: {
                                border: '1px solid #38bdf8',
                                transition: 'border-color 0.5s, background 0.5s, box-shadow 0.4s',
                            }, onMouseEnter: e => {
                                e.currentTarget.style.borderColor = '#63CFEB';
                                e.currentTarget.style.background = 'rgba(99,207,235,0.08)';
                                e.currentTarget.style.boxShadow = '0 0 18px 2px rgba(99,207,235,0.18)';
                            }, onMouseLeave: e => {
                                e.currentTarget.style.borderColor = '#38bdf8';
                                e.currentTarget.style.background = '';
                                e.currentTarget.style.boxShadow = '';
                            }, children: [_jsx(Download, { size: 16 }), _jsx("span", { children: "Download CV" })] })] }))] }) }));
}
