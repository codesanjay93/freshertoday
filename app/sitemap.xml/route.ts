import { db } from '@/app/lib/firebaseAdmin';
import { BLOG_COLLECTION } from '../constant/constant';

export async function GET() {
  const baseUrl = 'https://www.freshertoday.in';
  
  // To include local timezone offset like +05:30, we need to format manually
  function toLocalISOStringWithOffset(date: Date) {
    const pad = (num: number) => String(num).padStart(2, '0');
    const padMs = (num: number) => String(num).padStart(3, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const milliseconds = padMs(date.getMilliseconds());

    const timezoneOffset = -date.getTimezoneOffset();
    const offsetSign = timezoneOffset >= 0 ? '+' : '-';
    const offsetHours = pad(Math.floor(Math.abs(timezoneOffset) / 60));
    const offsetMinutes = pad(Math.abs(timezoneOffset) % 60);

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
  }

  const nowLocal = toLocalISOStringWithOffset(new Date());

  const staticRoutes = [
    '', // homepage
    'about',
    'register',
    'login',
    'blogs',
    'contact',
    'internships',
    'learn-more',
    'privacy',
    'terms',
    'sanjay-achari',
    'coming-soon',
    'fresher-jobs-in-bengaluru',
  ];

  try {
    const snapshot = await db.collection(BLOG_COLLECTION).get();

    const blogSlugs = snapshot.docs.map(doc => {
      const data = doc.data();
      return data.slug || doc.id;
    });

    const urls = [
      // Homepage highest priority
      `
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`,

      // fresher-jobs-in-bengaluru priority 0.9, above blogs
      `
  <url>
    <loc>${baseUrl}/fresher-jobs-in-bengaluru</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`,

      // Blog pages with priority 0.9
      ...blogSlugs.map((slug) => `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`),

      // sanjay-achari with priority 0.9
      `
  <url>
    <loc>${baseUrl}/sanjay-achari</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`,

      // Other static routes excluding homepage, fresher-jobs-in-bengaluru, sanjay-achari
      ...staticRoutes
        .filter(slug => slug !== '' && slug !== 'fresher-jobs-in-bengaluru' && slug !== 'sanjay-achari')
        .map((slug) => `
  <url>
    <loc>${baseUrl}/${slug}</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`)
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'X-Robots-Tag': 'index, follow',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Fallback sitemap with updated priorities
    const fallbackUrls = [
      `
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`,
      `
  <url>
    <loc>${baseUrl}/fresher-jobs-in-bengaluru</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`,
      `
  <url>
    <loc>${baseUrl}/sanjay-achari</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`,
      ...staticRoutes
        .filter(slug => slug !== '' && slug !== 'fresher-jobs-in-bengaluru' && slug !== 'sanjay-achari')
        .map((slug) => `
  <url>
    <loc>${baseUrl}/${slug}</loc>
    <lastmod>${nowLocal}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`)
    ];

    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${fallbackUrls.join('\n')}
</urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'X-Robots-Tag': 'index, follow',
      },
      status: 200,
    });
  }
}
