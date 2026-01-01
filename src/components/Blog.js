import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const blogPosts = [
    {
        title: 'Building Scalable React Applications',
        excerpt: 'Learn best practices for structuring large-scale React applications with proper state management and component architecture.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
        category: 'React',
        date: 'Dec 15, 2024',
        readTime: '8 min read',
        link: '#',
    },
    {
        title: 'Modern CSS Techniques for 2024',
        excerpt: 'Explore the latest CSS features including container queries, cascade layers, and advanced animations.',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
        category: 'CSS',
        date: 'Dec 10, 2024',
        readTime: '6 min read',
        link: '#',
    },
    {
        title: 'TypeScript Tips and Tricks',
        excerpt: 'Advanced TypeScript patterns and techniques to write more type-safe and maintainable code.',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
        category: 'TypeScript',
        date: 'Dec 5, 2024',
        readTime: '10 min read',
        link: '#',
    },
    {
        title: 'Optimizing Web Performance',
        excerpt: 'Practical strategies for improving website speed and performance metrics including Core Web Vitals.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        category: 'Performance',
        date: 'Nov 28, 2024',
        readTime: '12 min read',
        link: '#',
    },
    {
        title: 'GraphQL vs REST: Making the Right Choice',
        excerpt: 'A comprehensive comparison of GraphQL and REST APIs to help you choose the right approach for your project.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
        category: 'APIs',
        date: 'Nov 20, 2024',
        readTime: '9 min read',
        link: '#',
    },
    {
        title: 'Serverless Architecture Patterns',
        excerpt: 'Understanding serverless computing and implementing scalable serverless architectures with AWS Lambda.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
        category: 'Cloud',
        date: 'Nov 15, 2024',
        readTime: '11 min read',
        link: '#',
    },
];
export function Blog() {
    const { ref, isVisible } = useScrollAnimation(0.2);
    return (_jsx("section", { id: "blog", className: "py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden", children: _jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "max-w-6xl mx-auto", ref: ref, children: [_jsx("h2", { className: `text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`, children: "Latest Blog Posts" }), _jsx("p", { className: `text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: '150ms' }, children: "Thoughts, tutorials, and insights about web development" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPosts.map((post, index) => (_jsxs("article", { className: `bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-1000 ease-out group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`, style: { transitionDelay: `${200 + index * 100}ms` }, children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }), _jsx("span", { className: "absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-sm rounded-full", children: post.category })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors", children: post.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4 line-clamp-3", children: post.excerpt }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Calendar, { size: 14 }), post.date] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { size: 14 }), post.readTime] })] }), _jsxs("a", { href: post.link, className: "inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors group-hover:gap-3", children: ["Read More", _jsx(ArrowRight, { size: 16 })] })] })] }, index))) }), _jsx("div", { className: `text-center mt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`, style: { transitionDelay: '800ms' }, children: _jsx("a", { href: "#", className: "inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105", children: "View All Posts" }) })] }) }) }));
}
