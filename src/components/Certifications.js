import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const certifications = [
    {
        title: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2023',
        credentialId: 'AWS-12345',
        link: '#',
        icon: '☁️',
    },
    {
        title: 'Google Cloud Professional',
        issuer: 'Google Cloud',
        date: '2023',
        credentialId: 'GCP-67890',
        link: '#',
        icon: '🌐',
    },
    {
        title: 'Meta Front-End Developer',
        issuer: 'Meta',
        date: '2022',
        credentialId: 'META-54321',
        link: '#',
        icon: '⚛️',
    },
    {
        title: 'MongoDB Certified Developer',
        issuer: 'MongoDB University',
        date: '2022',
        credentialId: 'MONGO-11111',
        link: '#',
        icon: '🍃',
    },
    {
        title: 'Professional Scrum Master',
        issuer: 'Scrum.org',
        date: '2021',
        credentialId: 'PSM-22222',
        link: '#',
        icon: '🎯',
    },
    {
        title: 'GitHub Actions Certification',
        issuer: 'GitHub',
        date: '2023',
        credentialId: 'GH-33333',
        link: '#',
        icon: '🚀',
    },
];
const awards = [
    {
        title: 'Best Developer Award',
        organization: 'Tech Conference 2023',
        year: '2023',
        description: 'Recognized for outstanding contribution to open source',
    },
    {
        title: 'Innovation Prize',
        organization: 'Hackathon XYZ',
        year: '2022',
        description: 'First place for innovative web application',
    },
    {
        title: 'Employee of the Year',
        organization: 'Tech Company Inc.',
        year: '2022',
        description: 'Outstanding performance and leadership',
    },
];
export function Certifications() {
    const { ref, isVisible } = useScrollAnimation(0.2);
    return (_jsx("section", { id: "certifications", className: "py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden", children: _jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "max-w-6xl mx-auto", ref: ref, children: [_jsx("h2", { className: `text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`, children: "Certifications & Awards" }), _jsx("p", { className: `text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: '150ms' }, children: "Professional certifications and recognitions" }), _jsxs("div", { className: "mb-16", children: [_jsx("h3", { className: `text-gray-900 dark:text-white mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: '200ms' }, children: "Professional Certifications" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: certifications.map((cert, index) => (_jsxs("div", { className: `bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-1000 ease-out group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`, style: { transitionDelay: `${300 + index * 100}ms` }, children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("div", { className: "text-4xl", children: cert.icon }), cert.link && (_jsx("a", { href: cert.link, target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-blue-500 transition-colors", "aria-label": "View certificate", children: _jsx(ExternalLink, { size: 20 }) }))] }), _jsx("h4", { className: "text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors", children: cert.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-2", children: cert.issuer }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "text-gray-500 dark:text-gray-500", children: cert.date }), cert.credentialId && (_jsxs("span", { className: "text-gray-400 dark:text-gray-600 text-xs", children: ["ID: ", cert.credentialId] }))] })] }, index))) })] }), _jsxs("div", { children: [_jsx("h3", { className: `text-gray-900 dark:text-white mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: '400ms' }, children: "Awards & Recognition" }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: awards.map((award, index) => (_jsxs("div", { className: `bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: `${600 + index * 100}ms` }, children: [_jsx(Award, { className: "text-yellow-500 mb-4", size: 32 }), _jsx("h4", { className: "text-gray-900 dark:text-white mb-2", children: award.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-2", children: award.organization }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-500 mb-2", children: award.year }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: award.description })] }, index))) })] })] }) }) }));
}
