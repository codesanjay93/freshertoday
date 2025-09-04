// app/blogs/page.tsx

import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import BlogsList from "../components/BlogsParent/BlogsList";
import { getBlogsList } from "../lib/blog/getBlogList";

// ✅ Static metadata for /blogs
export const metadata = {
  title: "Freshertoday Blog | Career Tips, Job Insights & Guides",
  description:
    "Explore Freshertoday's blog for the latest career tips, job search strategies, and guides to help freshers succeed in their careers.",
    openGraph: {
      title: "Freshertoday Blog | Career Tips, Job Insights & Guides",
      siteName: "freshertoday",
    description:
      "Explore Freshertoday's blog for the latest career tips, job search strategies, and guides to help freshers succeed in their careers.",
    url: "https://freshertoday.in/blogs",
    type: "website",
    images: ["https://freshertoday.in/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freshertoday Blog | Career Tips, Job Insights & Guides",
    site: "@freshertodayin", // ✅ Your Twitter handle

    description:
      "Explore Freshertoday's blog for the latest career tips, job search strategies, and guides to help freshers succeed in their careers.",
    images: ["https://freshertoday.in/logo.jpg"],
  },
  alternates: {
    canonical: "https://freshertoday.in/blogs",
  },
    publisher: {
    name: "Freshertoday",
    url: "https://freshertoday.in",
    logo: "https://freshertoday.in/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

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
