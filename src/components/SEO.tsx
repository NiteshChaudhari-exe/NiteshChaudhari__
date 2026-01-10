import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = 'Nitesh Chaudhari - Full Stack Developer',
  description = 'Professional portfolio showcasing web development projects, skills, and experience. Specializing in React, TypeScript, Node.js, and modern web technologies.',
  keywords = 'web developer, full stack developer, react developer, typescript, portfolio, frontend, backend, UI/UX',
  author = 'Nitesh Chaudhari',
  image = '/og-image.jpg',
  url = 'https://niteshchaudhari.vercel.app',
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3b82f6' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: author,
      url: url,
      jobTitle: 'Full Stack Developer',
      description: description,
      image: image,
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, author, image, url]);

  return null;
}
