// app/components/BlogsParent/BlogsList.tsx

import Link from "next/link"

export default function BlogsList({ blogs }: { blogs: { slug: string, title: string}[] }) {
  return (
    <div className="space-y-6">
      {blogs.map((blog) => (
        <article key={blog.slug} className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <Link href={`/blog/${blog.slug}`}>
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">{blog.title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
