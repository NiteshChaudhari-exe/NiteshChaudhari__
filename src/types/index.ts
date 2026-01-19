/**
 * Navigation Types
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Project Types
 */
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  longDescription: string;
  features: string[];
  tech: string[];
}

/**
 * Testimonial Types
 */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

/**
 * Blog Post Types
 */
export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
}

/**
 * Experience Types
 */
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

/**
 * Skill Types
 */
export interface SkillCategory {
  category: string;
  skills: string[];
}

/**
 * Toast Types
 */
export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

/**
 * Form Types
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Theme Types
 */
export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

/**
 * SEO Props Types
 */
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
}
