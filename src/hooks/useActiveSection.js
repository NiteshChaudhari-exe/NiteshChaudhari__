import { useEffect, useState } from 'react';
export function useActiveSection() {
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'testimonials', 'blog', 'contact'];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-50% 0px -50% 0px',
        });
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });
        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);
    return activeSection;
}
