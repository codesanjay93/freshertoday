export async function GET() {
  const baseUrl = 'https://www.fresherstoday.in';
  const now = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    '', // homepage
    'about',
    'contact',
    'internships',
    'learn-more',
    'privacy',
    'terms',
    'sanjay-achari',
    'coming-soon',
  ];

  const urls = staticRoutes.map((slug) => {
    const path = slug ? `/${slug}` : '';
    const priority = slug === '' ? '1.0' : '0.8';
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Robots-Tag': 'index, follow', // ✅ SEO-friendly header
    },
  });
}
