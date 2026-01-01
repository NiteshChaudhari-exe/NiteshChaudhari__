import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Parallax Background Element */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <h2 className={`text-gray-900 dark:text-gray-100 mb-12 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-95'}`} style={{ transitionDelay: '200ms' }}>
              <img
                src="/src/assets/me.jpg"
                alt="Workspace"
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            
            <div className={`space-y-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-gray-900 dark:text-gray-100 mb-4">Crafting Secure & Impactful Digital Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I’m a full stack developer and cyber security enthusiast, passionate about building seamless, high-performance web applications that are as secure as they are beautiful. My experience spans startups, agencies, and enterprise teams, delivering everything from interactive landing pages to robust SaaS platforms—with security and privacy always top of mind.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I thrive at the intersection of design, engineering, and security—translating ideas into pixel-perfect, accessible, and scalable products. I’m equally at home performing ethical hacking, penetration testing, and implementing best practices to safeguard users and data.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Beyond code, I’m passionate about mentoring, open source, and collaborating with diverse teams. Whether architecting a new feature, optimizing performance, or conducting a security audit, I bring curiosity, empathy, and a relentless drive for quality to every project.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Outside of tech, you’ll find me exploring new security challenges, participating in CTFs, or sharing knowledge with the developer and cyber security community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}