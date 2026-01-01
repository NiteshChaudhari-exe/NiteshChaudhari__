import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Expert in React, TypeScript, and modern CSS frameworks',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust APIs and server-side applications',
    technologies: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Creating seamless experiences across all devices',
    technologies: ['Mobile-First', 'Flexbox', 'Grid', 'Accessibility'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces',
    technologies: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping'],
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing for speed and user experience',
    technologies: ['SEO', 'Core Web Vitals', 'Lazy Loading', 'Caching'],
  },
  {
    icon: Zap,
    title: 'Modern Tools',
    description: 'Leveraging the latest development tools',
    technologies: ['Git', 'Docker', 'CI/CD', 'Testing'],
  },
];

const skillLevels = [
  { name: 'React & TypeScript', level: 95 },
  { name: 'Node.js & Express', level: 90 },
  { name: 'CSS & Tailwind', level: 92 },
  { name: 'Database Design', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'DevOps & Cloud', level: 75 },
];

function ProgressBar({ level, isVisible, delay }: { level: number; isVisible: boolean; delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1500 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <h2 className={`text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>
            Skills & Expertise
          </h2>
          <p className={`text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '150ms' }}>
            A comprehensive set of skills to bring your ideas to life
          </p>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-1000 ease-out hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
                  style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Bars */}
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-gray-900 dark:text-white mb-6 text-center">Proficiency Levels</h3>
            <div className="space-y-6">
              {skillLevels.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <ProgressBar level={skill.level} isVisible={isVisible} delay={900 + index * 100} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
