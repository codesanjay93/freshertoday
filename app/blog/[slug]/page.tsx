import { notFound } from "next/navigation";
import { db } from "../../lib/firebaseAdmin";
import Script from "next/script";
import Navbar from "@/app/components/navbar/Navbar";
import { BlogData, BlogsRenderer } from "@/app/components/blog/BlogsRenderer";
import Footer from "@/app/components/footer/Footer";
import { BLOG_COLLECTION } from "@/app/constant/constant";

export async function generateStaticParams() {
  return [
    { slug: "first-internship-guide-2025" },
    { slug: "resume-mistakes-for-freshers" },
    { slug: "best-job-websites-for-freshers" },
    { slug: "telephonic-interview-tips" },
    { slug: "internship-vs-fulltime-job" },
    { slug: "resume-no-experience-freshers" },
    { slug: "career-options-bca-bsc-grads" },
    { slug: "hr-questions-for-freshers-2025" },
    { slug: "wfh-internships-for-freshers" },
    { slug: "fresher-vs-intern-differences" },
    { slug: "best-job-portals-fresh-graduates" },
    { slug: "direct-apply-vs-company-site" },
    { slug: "compare-job-sites-freshers" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const snapshot = await db.collection(BLOG_COLLECTION).doc(slug).get();
    if (!snapshot.exists) return {};
    const blog = snapshot.data();
    const title = blog?.seo?.title || blog?.title;
    const description = blog?.seo?.description || "";
    const ogImage = blog?.seo?.ogImage || "";
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://www.freshertoday.in/blog/${slug}`,
        images: [ogImage],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
      alternates: {
        canonical: `https://www.freshertoday.in/blog/${slug}`,
      },
    };
  } catch (err) {
    console.error("Metadata Error:", err);
    return {};
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const snapshot = await db.collection(BLOG_COLLECTION).doc(slug).get();
    if (!snapshot.exists) return notFound();
    const blog = snapshot.data() as BlogData;
    if (!blog) return notFound();
    const publishedAt = blog.publishedAt || "2025-01-01";
    const updatedAt = blog.updatedAt || publishedAt;
    const ogImage = blog.seo?.ogImage || "";
    return (
      <article>
        {/* BlogPosting Structured Data */}
        <Script
          id="structured-data-blog"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.seo?.description || "",
              image: ogImage,
              author: {
                "@type": "Person",
                name: "Sanjay Achari",
              },
              datePublished: publishedAt,
              dateModified: updatedAt,
              publisher: {
                "@type": "Organization",
                name: "Freshertoday",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.freshertoday.in/logo.png",
                },
              },
              url: `https://www.freshertoday.in/blog/${slug}`,
            }),
          }}
        />
        {/* Breadcrumb Structured Data */}
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.freshertoday.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://www.freshertoday.in/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: blog.title,
                  item: `https://www.freshertoday.in/blog/${slug}`,
                },
              ],
            }),
          }}
        />
        <Navbar />
        <BlogsRenderer blog={blog} />
        <Footer />
      </article>
    );
  } catch (err) {
    console.error("Blog Page Error:", err);
    return notFound();
  }
}
