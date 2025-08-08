import { BLOG_COLLECTION } from '@/app/constant/constant';
import { db } from '@/app/lib/firebaseAdmin';

export async function getBlogsList() {
  try {
    const snapshot = await db.collection(BLOG_COLLECTION).get();

    const blogs = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        slug: data.slug || doc.id,
        title: data.title || "Untitled",
      };
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs list:", error);
    return [];
  }
}
