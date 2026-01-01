import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import '../components/customTransitions.css';
import { ExternalLink, Github, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with payment integration',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
        tags: ['React', 'Node.js', 'Stripe'],
        category: 'Web',
        github: '#',
        demo: '#',
        longDescription: 'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
        features: ['Shopping cart', 'Payment integration', 'Admin dashboard', 'Real-time inventory', 'Order tracking'],
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redis'],
    },
    {
        title: 'Task Management App',
        description: 'Collaborative project management tool with real-time updates',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        tags: ['TypeScript', 'Firebase', 'Tailwind'],
        category: 'Web',
        github: '#',
        demo: '#',
        longDescription: 'A powerful task management application enabling teams to collaborate effectively with real-time synchronization and intuitive drag-and-drop interfaces.',
        features: ['Real-time collaboration', 'Drag & drop', 'Team workspaces', 'File attachments', 'Activity tracking'],
        tech: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Weather Dashboard',
        description: 'Beautiful weather app with forecasts and location search',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800',
        tags: ['React', 'API', 'Charts'],
        category: 'Mobile',
        github: '#',
        demo: '#',
        longDescription: 'An elegant weather dashboard providing detailed forecasts, historical data visualization, and location-based weather alerts.',
        features: ['7-day forecast', 'Hourly predictions', 'Weather maps', 'Location search', 'Weather alerts'],
        tech: ['React', 'OpenWeather API', 'Recharts', 'Geolocation API'],
    },
    {
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        tags: ['Next.js', 'Analytics', 'Charts'],
        category: 'Web',
        github: '#',
        demo: '#',
        longDescription: 'Comprehensive social media analytics platform tracking engagement metrics across multiple platforms with beautiful data visualizations.',
        features: ['Multi-platform tracking', 'Engagement analytics', 'Post scheduling', 'Competitor analysis', 'Custom reports'],
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'Tailwind CSS'],
    },
    {
        title: 'Portfolio Generator',
        description: 'Create stunning portfolios with customizable templates',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
        tags: ['React', 'Design', 'CMS'],
        category: 'Design',
        github: '#',
        demo: '#',
        longDescription: 'A portfolio creation tool allowing designers and developers to quickly build professional portfolios with drag-and-drop customization.',
        features: ['Template library', 'Drag & drop builder', 'Custom domains', 'SEO optimization', 'Analytics'],
        tech: ['React', 'Styled Components', 'Contentful', 'Next.js', 'Vercel'],
    },
    {
        title: 'Fitness Tracker',
        description: 'Track workouts and monitor fitness progress',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
        tags: ['Mobile', 'React Native', 'Health'],
        category: 'Mobile',
        github: '#',
        demo: '#',
        longDescription: 'Mobile-first fitness tracking application with workout logging, progress visualization, and personalized recommendations.',
        features: ['Workout logging', 'Progress charts', 'Exercise library', 'Goal setting', 'Social sharing'],
        tech: ['React Native', 'Expo', 'Firebase', 'HealthKit API', 'Redux'],
    },
];
const categories = ['All', 'Web', 'Mobile', 'Design'];
export function Projects() {
    const { ref, isVisible } = useScrollAnimation(0.2);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);
    return (_jsxs(_Fragment, { children: [_jsx("section", { id: "projects", className: "py-20 bg-white dark:bg-gray-900 overflow-hidden", children: _jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "max-w-6xl mx-auto", ref: ref, children: [_jsx("h2", { className: `text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`, children: "Featured Projects" }), _jsx("p", { className: `text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-out fade-delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, children: "A selection of recent work that showcases my skills and creativity" }), _jsx("div", { className: `flex justify-center gap-4 mb-12 flex-wrap transition-all duration-1000 ease-out fade-delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, children: categories.map((category) => (_jsx("button", { onClick: () => setSelectedCategory(category), className: `px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`, children: category }, category))) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProjects.map((project, index) => (_jsxs("div", { className: `bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-1000 ease-out border border-gray-200 dark:border-gray-700 group cursor-pointer fade-delay-var ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 -rotate-2'}`, style: (isVisible ? { '--custom-delay': `${300 + index * 150}ms` } : { '--custom-delay': '0ms' }), onClick: () => setSelectedProject(project), children: [_jsxs("div", { className: "relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" }), _jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center", children: _jsx("span", { className: "text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: "View Details" }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors", children: project.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map((tag, i) => (_jsx("span", { className: "px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm", children: tag }, i))) }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors", onClick: (e) => e.stopPropagation(), "aria-label": "View GitHub repository", children: _jsx(Github, { size: 20 }) }), _jsx("a", { href: project.demo, target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors", onClick: (e) => e.stopPropagation(), "aria-label": "View live demo", children: _jsx(ExternalLink, { size: 20 }) })] })] })] }, index))) })] }) }) }), selectedProject && (_jsx("div", { className: "fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 animate-fade-in", onClick: () => setSelectedProject(null), children: _jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "relative h-64 md:h-96", children: [_jsx("img", { src: selectedProject.image, alt: selectedProject.title, className: "w-full h-full object-cover" }), _jsx("button", { onClick: () => setSelectedProject(null), className: "absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors", "aria-label": "Close modal", children: _jsx(X, { size: 24 }) })] }), _jsxs("div", { className: "p-8", children: [_jsx("h2", { className: "text-gray-900 dark:text-white mb-4", children: selectedProject.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: selectedProject.longDescription }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-gray-900 dark:text-white mb-3", children: "Key Features" }), _jsx("ul", { className: "space-y-2", children: selectedProject.features.map((feature, i) => (_jsxs("li", { className: "flex items-start gap-2 text-gray-600 dark:text-gray-400", children: [_jsx("span", { className: "text-blue-500 mt-1", children: "\u2022" }), _jsx("span", { children: feature })] }, i))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-gray-900 dark:text-white mb-3", children: "Technologies Used" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedProject.tech.map((tech, i) => (_jsx("span", { className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg", children: tech }, i))) })] }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("a", { href: selectedProject.github, target: "_blank", rel: "noopener noreferrer", className: "flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 text-center flex items-center justify-center gap-2", children: [_jsx(Github, { size: 20 }), "View Code"] }), _jsxs("a", { href: selectedProject.demo, target: "_blank", rel: "noopener noreferrer", className: "flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2", children: [_jsx(ExternalLink, { size: 20 }), "Live Demo"] })] })] })] }) }))] }));
}
