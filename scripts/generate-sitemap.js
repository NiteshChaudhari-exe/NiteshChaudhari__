// vite-plugin-sitemap-generator.js
// This generates a sitemap.xml during build

import fs from 'fs';
import path from 'path';

/**
 * Generates sitemap.xml for better SEO
 * Run this after build with: node scripts/generate-sitemap.js
 */

const siteUrl = 'https://niteshchaudhari.vercel.app';
const outputPath = path.join(process.cwd(), 'dist', 'sitemap.xml');

const routes = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/#about', priority: 0.8, changefreq: 'monthly' },
  { url: '/#projects', priority: 0.9, changefreq: 'weekly' },
  { url: '/#experience', priority: 0.7, changefreq: 'monthly' },
  { url: '/#skills', priority: 0.7, changefreq: 'monthly' },
  { url: '/#certifications', priority: 0.6, changefreq: 'monthly' },
  { url: '/#testimonials', priority: 0.6, changefreq: 'monthly' },
  { url: '/#blog', priority: 0.8, changefreq: 'weekly' },
  { url: '/#contact', priority: 0.8, changefreq: 'monthly' },
];

function generateSitemap() {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Ensure dist directory exists
  const distDir = path.dirname(outputPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, sitemapContent);
  console.log('✅ Sitemap generated:', outputPath);
}

generateSitemap();
