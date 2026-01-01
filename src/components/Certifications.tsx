import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-12345',
    link: '#',
    icon: '☁️',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-67890',
    link: '#',
    icon: '🌐',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: '2022',
    credentialId: 'META-54321',
    link: '#',
    icon: '⚛️',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2022',
    credentialId: 'MONGO-11111',
    link: '#',
    icon: '🍃',
  },
  {
    title: 'Professional Scrum Master',
    issuer: 'Scrum.org',
    date: '2021',
    credentialId: 'PSM-22222',
    link: '#',
    icon: '🎯',
  },
  {
    title: 'GitHub Actions Certification',
    issuer: 'GitHub',
    date: '2023',
    credentialId: 'GH-33333',
    link: '#',
    icon: '🚀',
  },
];

const awards = [
  {
    title: 'Best Developer Award',
    organization: 'Tech Conference 2023',
    year: '2023',
    description: 'Recognized for outstanding contribution to open source',
  },
  {
    title: 'Innovation Prize',
    organization: 'Hackathon XYZ',
    year: '2022',
    description: 'First place for innovative web application',
  },
  {
    title: 'Employee of the Year',
    organization: 'Tech Company Inc.',
    year: '2022',
    description: 'Outstanding performance and leadership',
  },
];

export function Certifications() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <h2 className={`text-gray-900 dark:text-white mb-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>
            Certifications & Awards
          </h2>
          <p className={`text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '150ms' }}>
            Professional certifications and recognitions
          </p>

          {/* Certifications Grid */}
          <div className="mb-16">
            <h3 className={`text-gray-900 dark:text-white mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-1000 ease-out group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{cert.icon}</div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="View certificate"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <h4 className="text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-500">{cert.date}</span>
                    {cert.credentialId && (
                      <span className="text-gray-400 dark:text-gray-600 text-xs">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className={`text-gray-900 dark:text-white mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
              Awards & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Award className="text-yellow-500 mb-4" size={32} />
                  <h4 className="text-gray-900 dark:text-white mb-2">{award.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{award.organization}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{award.year}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
