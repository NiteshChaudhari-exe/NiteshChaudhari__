import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const timeline = [
    {
        type: 'work',
        title: 'Senior Full Stack Developer',
        organization: 'Tech Company Inc.',
        location: 'San Francisco, CA',
        period: '2022 - Present',
        description: 'Leading development of enterprise web applications using React, Node.js, and AWS.',
        achievements: [
            'Architected and built scalable microservices infrastructure',
            'Led a team of 5 developers on major product releases',
            'Improved application performance by 40%',
        ],
    },
    {
        type: 'work',
        title: 'Full Stack Developer',
        organization: 'Digital Agency',
        location: 'New York, NY',
        period: '2020 - 2022',
        description: 'Developed custom web applications and e-commerce solutions for various clients.',
        achievements: [
            'Built 20+ successful client projects',
            'Implemented CI/CD pipelines reducing deployment time by 60%',
            'Mentored junior developers',
        ],
    },
    {
        type: 'education',
        title: 'Bachelor of Computer Science',
        organization: 'University Name',
        location: 'Location',
        period: '2016 - 2020',
        description: 'Focused on software engineering, algorithms, and web technologies.',
        achievements: [
            'GPA: 3.8/4.0',
            'Dean\'s List all semesters',
            'Led university coding club',
        ],
    },
    {
        type: 'work',
        title: 'Junior Web Developer',
        organization: 'Startup XYZ',
        location: 'Remote',
        period: '2019 - 2020',
        description: 'Part-time role developing responsive websites and web applications.',
        achievements: [
            'Developed company\'s main product landing pages',
            'Collaborated with design team on UI/UX improvements',
        ],
    },
];
export function Experience() {
    const { ref, isVisible } = useScrollAnimation(0.2);
    return (_jsx("section", { id: "experience", className: "py-20 bg-white dark:bg-gray-900 overflow-hidden", children: _jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "max-w-6xl mx-auto", ref: ref, children: [_jsx("h2", { className: `text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`, children: "Experience & Education" }), _jsx("p", { className: `text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: '150ms' }, children: "My professional journey and educational background" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400" }), _jsx("div", { className: "space-y-12", children: timeline.map((item, index) => {
                                    const Icon = item.type === 'work' ? Briefcase : GraduationCap;
                                    const isLeft = index % 2 === 0;
                                    return (_jsxs("div", { className: `relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: `${200 + index * 150}ms` }, children: [_jsxs("div", { className: "md:hidden pl-16", children: [_jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700", children: [_jsx("span", { className: `inline-block px-3 py-1 text-xs rounded-full mb-3 ${item.type === 'work'
                                                                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                                                    : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'}`, children: item.period }), _jsx("h3", { className: "text-gray-900 dark:text-white mb-1", children: item.title }), _jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-1", children: item.organization }), _jsx("p", { className: "text-gray-500 dark:text-gray-400 text-sm mb-3", children: item.location }), _jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: item.description }), item.achievements && (_jsx("ul", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: item.achievements.map((achievement, i) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0", children: "\u2022" }), _jsx("span", { children: achievement })] }, i))) }))] }), _jsx("div", { className: "absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg z-10", children: _jsx(Icon, { size: 24 }) })] }), _jsxs("div", { className: "hidden md:grid md:grid-cols-2 md:gap-8", children: [_jsx("div", { className: `${isLeft ? 'text-right pr-8' : 'order-2 pl-8'}`, children: _jsx("div", { className: `transition-all duration-1000 ease-out ${isVisible
                                                                ? 'opacity-100 translate-x-0'
                                                                : `opacity-0 ${isLeft ? 'translate-x-12' : '-translate-x-12'}`}`, style: { transitionDelay: `${300 + index * 150}ms` }, children: _jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700", children: [_jsx("div", { className: `flex ${isLeft ? 'justify-end' : 'justify-start'} mb-3`, children: _jsx("span", { className: `px-3 py-1 text-xs rounded-full ${item.type === 'work'
                                                                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                                                                : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'}`, children: item.period }) }), _jsx("h3", { className: "text-gray-900 dark:text-white mb-1", children: item.title }), _jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-1", children: item.organization }), _jsx("p", { className: "text-gray-500 dark:text-gray-400 text-sm mb-3", children: item.location }), _jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: item.description }), item.achievements && (_jsx("ul", { className: `space-y-1 text-sm text-gray-600 dark:text-gray-400 ${isLeft ? 'text-right' : 'text-left'}`, children: item.achievements.map((achievement, i) => (_jsxs("li", { className: `flex items-start gap-2 ${isLeft ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: "text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0", children: "\u2022" }), _jsx("span", { children: achievement })] }, i))) }))] }) }) }), _jsx("div", { className: isLeft ? 'order-2' : '' }), _jsx("div", { className: "absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white dark:border-gray-900", children: _jsx(Icon, { size: 24 }) })] })] }, index));
                                }) }), _jsx("div", { className: `mt-12 flex justify-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`, style: { transitionDelay: '800ms' }, children: _jsx("div", { className: "w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg" }) })] })] }) }) }));
}
