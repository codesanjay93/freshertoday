// app/api/update-blog/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../lib/firebaseAdmin'; // Admin SDK, correct!

function generateSEO(blog: {
  slug: string;
  title: string;
  description?: string;
  ogImage?: string;
  content?: string;
}) {
  const description = blog.description || `Read this blog on ${blog.title}`;
  const ogImage = blog.ogImage || 'https://freshertoday.in/logo.png';

  return {
    title: blog.title,
    description,
    openGraph: {
      title: blog.title,
      description,
      url: `https://freshertoday.in/blog/${blog.slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://freshertoday.in/blog/${blog.slug}`,
    },
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { slug, content: newContent } = body;

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const docRef = db.collection('BLOGS-COLLECTION').doc(slug);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const blog = docSnap.data() as {
      slug: string;
      title: string;
      description?: string;
      ogImage?: string;
      content?: string;
    };

    // Optional: override content if provided in POST body
    if (newContent) {
      blog.content = newContent;
    }

    const seo = generateSEO(blog);

    await docRef.set({ seo, ...(newContent ? { content: newContent } : {}) }, { merge: true });

    return NextResponse.json({ message: 'SEO and content updated successfully' });
  } catch (error) {
    console.error('Update SEO Error:', error);
    return NextResponse.json(
      { error: 'Failed to update SEO' },
      { status: 500 }
    );
  }
}
