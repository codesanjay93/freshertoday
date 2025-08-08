// app/blogs/page.tsx

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import BlogsList from "../components/BlogsParent/BlogsList";
import { getBlogsList } from "../lib/blog/getBlogList";


export default async function BlogsPage() {

      const blogs = await getBlogsList();
  

  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Freshertoday Blog
        </h1>
        <BlogsList blogs={blogs} />
      </section>
      <Footer />
    </div>
  );
}
