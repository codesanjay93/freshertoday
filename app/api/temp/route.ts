// app/api/blogs/get-all-slugs/route.ts

import { db } from '@/app/lib/firebaseAdmin';
import { NextResponse } from 'next/server';

const BLOG_COLLECTION = 'BLOGS-COLLECTION';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9393';

export async function GET() {
  try {
    const snapshot = await db.collection(BLOG_COLLECTION).get();

    const totalCount = snapshot.size; // total documents count

    if (snapshot.empty) {
      return NextResponse.json({ results: [], totalCount: 0 }, { status: 200 });
    }

    const results = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const data = doc.data();
        const slug = data.slug || doc.id;
        try {
          const res = await fetch(`${BASE_URL}/blog/${slug}`, {
            method: 'GET',
          });
          return { slug, status: res.status };
        } catch (err) {
          return { slug, status: 'fetch_error' };
        }
      })
    );

    return NextResponse.json({ results, totalCount });
  } catch (error) {
    console.error('Error checking slugs:', error);
    return NextResponse.json({ error: 'Failed to fetch slugs' }, { status: 500 });
  }
}
