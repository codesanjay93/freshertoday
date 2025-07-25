// app/api/blogs/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../lib/firebaseAdmin'; // adjust if path differs

type Blog = {
  title: string;
  slug: string;
};

export async function POST(req: NextRequest) {
  try {
    const blogs: Blog[] = await req.json();

    if (!Array.isArray(blogs)) {
      return NextResponse.json({ error: 'Payload must be an array' }, { status: 400 });
    }

    const batch = db.batch();
    const collectionRef = db.collection('BLOGS-COLLECTION');

    blogs.forEach((blog) => {
      const docRef = collectionRef.doc(blog.slug); // use slug as doc ID
      batch.set(docRef, blog);
    });

    await batch.commit();

    return NextResponse.json({ message: 'Blogs created successfully' });
  } catch (error) {
    console.error('Firebase Error:', error);
    return NextResponse.json({ error: 'Failed to create blogs' }, { status: 500 });
  }
}
