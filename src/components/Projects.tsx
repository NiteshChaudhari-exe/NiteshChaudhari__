import { ExternalLink, Github, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

interface Project {
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

const projects: Project[] = [
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto" ref={ref}>
            <h2 className={`text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>
              Featured Projects
            </h2>
            <p className={`text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '150ms' }}>
              A selection of recent work that showcases my skills and creativity
            </p>

            {/* Category Filter */}
            <div className={`flex justify-center gap-4 mb-12 flex-wrap transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-1000 ease-out border border-gray-200 dark:border-gray-700 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 -rotate-2'}`}
                  style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : '0ms' }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-gray-900 dark:text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.longDescription}</p>
              
              <div className="mb-6">
                <h3 className="text-gray-900 dark:text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
