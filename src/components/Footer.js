import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';
export function Footer() {
    const currentYear = new Date().getFullYear();
    const footerLinks = {
        navigation: [
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
        ],
        resources: [
            { label: 'Blog', href: '#blog' },
            { label: 'Experience', href: '#experience' },
            { label: 'Certifications', href: '#certifications' },
            { label: 'Testimonials', href: '#testimonials' },
        ],
    };
    const socialLinks = [
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
        { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
    ];
    return (_jsx("footer", { className: "bg-gray-900 dark:bg-black text-gray-300 py-12", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "grid md:grid-cols-4 gap-8 mb-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white", children: ["N", _jsx(Heart, { size: 15, className: "text-red-500 fill-red-500" })] }), _jsx("p", { className: "text-gray-400 mb-4 hover:text-white transition-color hover:scale-105 duration-1000", children: "Building amazing digital experiences with passion and precision." }), _jsx("div", { className: "flex gap-4", children: socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (_jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110", "aria-label": social.label, children: _jsx(Icon, { size: 18 }) }, index));
                                    }) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white mb-4", children: "Navigation" }), _jsx("ul", { className: "space-y-2", children: footerLinks.navigation.map((link, index) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-gray-400 hover:text-white transition-colors hover:scale-105 duration-800", children: link.label }) }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white mb-4", children: "Resources" }), _jsx("ul", { className: "space-y-2", children: footerLinks.resources.map((link, index) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-gray-400 hover:text-white transition-colors hover:scale-105 duration-800", children: link.label }) }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white mb-4", children: "Get In Touch" }), _jsx("p", { className: "text-gray-400 mb-2 hover:scale-105 duration-1000 hover:text-white transition-colors", children: "chaudharinitesh485@gmail.com" }), _jsx("p", { className: "text-gray-400 mb-2 hover:scale-105 duration-1000 hover:text-white transition-colors", children: "+977 9821750929" }), _jsx("p", { className: "text-gray-400 hover:scale-105 duration-1000 hover:text-white transition-colors", children: "Kathmandu, Nepal (Asia)" })] })] }), _jsxs("div", { className: "pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4", children: [_jsxs("p", { className: "text-sm flex items-center gap-1 text-gray-400 hover:text-white transition-colors", children: ["\u00A9 ", currentYear, " Nitesh Chaudhari."] }), _jsxs("p", { className: "text-gray-400 text-sm flex items-center gap-1 hover:text-white transition-colors", children: ["Made with ", _jsx(Heart, { size: 16, className: "text-red-500 fill-red-500" }), " and lots of coffee."] }), _jsxs("div", { className: "flex gap-6 text-sm text-gray-400 hover:text-white transition-colors", children: [_jsx("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: "Privacy Policy" }), _jsx("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors ", children: "Terms of Service" })] })] })] }) }));
}
