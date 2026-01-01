import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Hero } from './components/Hero';
import React, { Suspense, useEffect } from 'react';
import { ToastContainer } from './components/Toast';
import { SEO } from './components/SEO';
import { ThemeProvider } from './contexts/ThemeContext';
const About = React.lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Experience = React.lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Skills = React.lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Projects = React.lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Certifications = React.lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Blog = React.lazy(() => import('./components/Blog').then(m => ({ default: m.Blog })));
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Navigation = React.lazy(() => import('./components/Navigation').then(m => ({ default: m.Navigation })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop').then(m => ({ default: m.ScrollToTop })));
const LoadingScreen = React.lazy(() => import('./components/LoadingScreen').then(m => ({ default: m.LoadingScreen })));
const Logoloop = React.lazy(() => import('./components/pages/Logoloop'));
export default function App() {
    useEffect(() => {
        // Scroll to top on refresh
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        // Ensure smooth scroll behavior is set
        document.documentElement.style.scrollBehavior = 'smooth';
        // Polyfill for browsers that don't support smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = e.currentTarget.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }
                }
            });
        });
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);
    return (_jsxs(ThemeProvider, { children: [_jsx(SEO, {}), _jsxs(Suspense, { fallback: _jsx("div", { className: "w-full h-screen flex items-center justify-center", children: "Loading..." }), children: [_jsx(LoadingScreen, {}), _jsx(ToastContainer, {}), _jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300", children: [_jsx(Navigation, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Experience, {}), _jsx(Skills, {}), _jsx(Logoloop, {}), _jsx(Projects, {}), _jsx(Certifications, {}), _jsx(Testimonials, {}), _jsx(Blog, {}), _jsx(Contact, {})] }), _jsx(Footer, {}), _jsx(ScrollToTop, {})] })] })] }));
}
