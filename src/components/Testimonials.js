import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const testimonials = [
    {
        name: 'John Smith',
        role: 'CEO',
        company: 'Tech Startup',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        rating: 5,
        text: 'Outstanding developer! Delivered our project on time and exceeded all expectations. The attention to detail and code quality was exceptional.',
    },
    {
        name: 'Sarah Johnson',
        role: 'Product Manager',
        company: 'Digital Agency',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
        rating: 5,
        text: 'A pleasure to work with. Great communication skills and technical expertise. Always goes the extra mile to ensure client satisfaction.',
    },
    {
        name: 'Michael Chen',
        role: 'CTO',
        company: 'E-commerce Co.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        rating: 5,
        text: 'Highly skilled and professional. Built a complex web application that transformed our business. Would definitely hire again!',
    },
    {
        name: 'Emily Davis',
        role: 'Marketing Director',
        company: 'Creative Studio',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        rating: 5,
        text: 'Incredible work! Not only technically proficient but also understands the business side. Our website traffic increased by 200%.',
    },
    {
        name: 'David Wilson',
        role: 'Founder',
        company: 'SaaS Platform',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        rating: 5,
        text: 'Best developer we\'ve worked with. Created a scalable architecture that handles millions of users. Truly exceptional talent.',
    },
    {
        name: 'Lisa Anderson',
        role: 'Head of Design',
        company: 'Design Firm',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
        rating: 5,
        text: 'Perfect collaboration between design and development. Brought our vision to life with pixel-perfect precision and smooth animations.',
    },
];
export function Testimonials() {
    const { ref, isVisible } = useScrollAnimation(0.2);
    return (_jsx("section", { id: "testimonials", className: "py-20 bg-white dark:bg-gray-900 overflow-hidden", children: _jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "max-w-6xl mx-auto", ref: ref, children: [_jsx("h2", { className: `text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`, children: "Client Testimonials" }), _jsx("p", { className: `text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: '150ms' }, children: "What clients say about working with me" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: `bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-1000 ease-out group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`, style: { transitionDelay: `${200 + index * 100}ms` }, children: [_jsx(Quote, { className: "text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300", size: 32 }), _jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: testimonial.rating }).map((_, i) => (_jsx(Star, { size: 16, className: "text-yellow-400 fill-yellow-400" }, i))) }), _jsxs("p", { className: "text-gray-600 dark:text-gray-400 mb-6 italic", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-12 h-12 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-900 dark:text-white", children: testimonial.name }), _jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-500", children: [testimonial.role, ", ", testimonial.company] })] })] })] }, index))) })] }) }) }));
}
