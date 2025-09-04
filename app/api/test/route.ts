// app/api/blogs/route.ts

import { NextResponse } from 'next/server';
import { db } from '../../lib/firebaseAdmin'; // adjust path if needed
import { BLOG_COLLECTION } from '@/app/constant/constant';

export async function GET() {
  try {
    const snapshot = await db.collection(BLOG_COLLECTION).get();

    const blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Firebase Error:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}


// export async function GET() {
//   try {
//     // const snapshot = await db.collection(BLOG_COLLECTION).get();

//     // const blogs = snapshot.docs.map(doc => ({
//     //   id: doc.id,
//     //   ...doc.data(),
//     // }));
//     run()
//     return NextResponse.json({   blogs : "s" });
//   } catch (error) {
//     console.error('Firebase Error:', error);
//     return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
//   }
// }


// async function run() {
//   for (const item of desc) {
//     const ref = db.collection(BLOG_COLLECTION).doc(item.id); // replace "blogs" with your BLOG_COLLECTION if constant
//     try {
//    await ref.update({
//   "seo.description": item.seoDescription,
//   "seo.twitter.description": item.seoDescription,
//   "seo.openGraph.description": item.seoDescription
// });

//       console.log(`✅ Updated: ${item.id}`);
//     } catch (err) {
//       console.error(`❌ Failed: ${item.id}`, err);
//     }
//   }
//   process.exit(0);
// }


// SUPABASE
// import { NextResponse } from 'next/server'
// import { supabase } from '../../lib/supabaseServer/supabaseServer'
// import { BLOG_COLLECTION } from '@/app/constant/constant'

// // GET blogs
// export async function GET() {
//   try {
//     const { data: blogs, error } = await supabase
//       .from('blogs')
//       .select('*')

//     if (error) {
//       console.error('Supabase Error:', error.message)
//       return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
//     }

//     return NextResponse.json({ blogs })
//   } catch (error) {
//     console.error('Unexpected Error:', error)
//     return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
//   }
// }


// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { data, error } = await supabase
//       .from("blogs")
//       .insert([{ name: body.name }])
//       .select(); // ensures data is returned after insert

//     if (error || !data) {
//       console.error("Supabase Insert Error:", error?.message);
//       return NextResponse.json({ error: "Failed to add blog" }, { status: 500 });
//     }

//     return NextResponse.json({ blog: data[0] }); // safe now
//   } catch (error) {
//     console.error("Unexpected Error:", error);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }