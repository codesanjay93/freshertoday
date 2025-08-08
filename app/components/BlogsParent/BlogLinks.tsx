import { getBlogsList } from "@/app/lib/blog/getBlogList";
import Link from "next/link";


export default async function BlogLinks() {

    const blogs = await getBlogsList();

  return (
    <div className="bg-white border-t border-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Explore Blog Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="text-sm text-black hover:underline"
            >
              {blog.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
