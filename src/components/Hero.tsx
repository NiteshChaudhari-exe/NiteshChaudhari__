import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightRays from './LightRays';

const roles = ['Full Stack Developer', 'Cyber Security Specialist', 'Problem Solver', 'Tech Innovator'];

export function Hero() {
    // Scroll to #home on mount to ensure home page appears on refresh
    useEffect(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'auto' });
      }
    }, []);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const updateText = () => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timeout = setTimeout(updateText, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 relative overflow-hidden">
      {/* LightRays background */}
      <div style={{ width: '100%', height: '950px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-15 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="mb-8"
            >
           
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1.5, delay: 3.2, ease: 'easeOut' }}
              className="text-gray-900 dark:text-white mb-4"
            >
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"></span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1.5, delay: 3.5, ease: 'easeIn' }}
              className="mb-8"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-2 min-h-[2rem] text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {displayText}
                </span>
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg pt-20">
              <span className='text-2xl'>IN A WORLD FULL OF NOISE,</span> I Build Systems That Stay Silent, Fast, And Never Betraying The User—-<br/>
              Crafted with the precision of a tailor in Palermo and the discipline of a Shelby plan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.9, delay: 3.0, ease: 'easeOut' }}
              className="flex items-center justify-center gap-4 pt-10"
            >
              <a
                href="#contact"
                className="px-8 py-3 text-white rounded-lg transition-all duration-900 hover:scale-105 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg,rgba(99, 207, 235, 1) 0%, rgba(118, 187, 222, 1) 10%, rgba(6, 29, 87, 1) 50%, rgba(100, 149, 176, 1) 90%, rgba(0, 212, 255, 1) 100%)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '0% 50%',
                  boxShadow: '0 0 0 transparent',
                  transition: 'background-position 0.8s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundPosition = '100% 50%';
                  e.currentTarget.style.boxShadow = '0 0 24px 4px rgba(99,207,235,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundPosition = '0% 50%';
                  e.currentTarget.style.boxShadow = '0 0 0 transparent';
                }}
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-500 hover:scale-105 relative overflow-hidden"
                style={{
                  transition: 'border-color 0.5s, background 0.5s, box-shadow 0.4s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#63CFEB';
                  e.currentTarget.style.background = 'rgba(99,207,235,0.08)';
                  e.currentTarget.style.boxShadow = '0 0 18px 2px rgba(99,207,235,0.18)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                View Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 2.5, ease: 'easeOut' }}
              className="flex items-center justify-center gap-6 pt-10"
            >
              <a 
                href="https://github.com/NiteshChaudhari-exe/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-125"
                aria-label="GitHub"
              >
                <Github size={26} />
              </a>
              <a 
                href="https://www.linkedin.com/in/chaudhariniteshraj/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin size={26} />
              </a>
              <a 
                href="https://www.instagram.com/oyee_nitesh__/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-125"
                aria-label="Instagram"
              >
                <Instagram size={26} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 4.5, ease: 'easeOut' }}
              className="pt-10"
            >
              <a href="#about" className="inline-block text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-5" aria-label="Scroll to about section">
                <ArrowDown size={32} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
