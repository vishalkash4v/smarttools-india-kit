
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://fyntools.com';

const routes = [
  '/',
  '/tools',
  '/about',
  '/contact',
  '/simple-calculator',
  '/word-counter',
  '/qr-code-generator',
  '/text-case-converter',
  '/password-generator',
  '/json-formatter',
  '/whitespace-remover',
  '/duplicate-line-remover',
  '/text-reverser',
  '/regex-tester',
  '/color-picker-tool',
  '/todo-list',
  '/stopwatch',
  '/countdown-timer',
  '/age-calculator',
  '/date-difference-calculator',
  '/bmi-calculator',
  '/percentage-calculator',
  '/currency-converter',
  '/live-preview',
  '/javascript-minifier',
  '/table-to-json-converter',
  '/gst-calculator',
  '/emi-calculator',
  '/base64-converter',
  '/sip-calculator',
  '/ppf-calculator',
  '/fd-calculator',
  '/income-tax-calculator',
  '/temperature-converter',
  '/unit-converter',
  '/lorem-ipsum-generator',
  '/ai-text-rewriter',
  '/ip-lookup',
  '/list-randomizer',
  '/url-slug-generator',
  '/barcode-generator',
  '/text-to-handwriting',
  '/notes',
  '/social-media-link-generator',
  '/url-shortener',
  '/hashtag-generator',
  '/social-media-planner',
  '/text-font-changer',
  '/url-wrapper',
  '/typing-tutor',
  '/typing-test',
  '/typing-games',
  '/typing-competition'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : route === '/tools' ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
