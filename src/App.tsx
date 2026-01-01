import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
// import { StatsCounter } from './components/StatsCounter';
import { ToastContainer } from './components/Toast';
import { SEO } from './components/SEO';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import  Logoloop  from './components/pages/Logoloop';

export default function App() {
  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // Ensure smooth scroll behavior is set
    document.documentElement.style.scrollBehavior = 'smooth';

    // Polyfill for browsers that don't support smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e: Event) {
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      });
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <SEO />
      <LoadingScreen />
      <ToastContainer />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Logoloop />
          <Projects />
          <Certifications />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}