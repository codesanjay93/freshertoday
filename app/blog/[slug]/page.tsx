import { notFound } from "next/navigation";
import { db } from "../../lib/firebaseAdmin";
import Script from "next/script";
import Navbar from "@/app/components/navbar/Navbar";
import { BlogData, BlogsRenderer } from "@/app/components/blog/BlogsRenderer";
import Footer from "@/app/components/footer/Footer";
import { BLOG_COLLECTION } from "@/app/constant/constant";
import BlogLinks from "@/app/components/BlogsParent/BlogLinks";

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

    // Ensure dates are ISO strings with timezone
    const publishedAt = blog.publishedAt
      ? new Date(blog.publishedAt).toISOString()
      : new Date("2025-01-01").toISOString();

    const updatedAt = blog.updatedAt
      ? new Date(blog.updatedAt).toISOString()
      : publishedAt;

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
              image: ogImage || undefined,
              author: {
                "@type": "Person",
                name: "Sanjay Achari",
                url: "https://www.freshertoday.in/sanjay-achari",
                // image: "https://www.freshertoday.in/path-to-author-image.jpg" // optional
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
        <BlogLinks />
        <Footer />
      </article>
    );
  } catch (err) {
    console.error("Blog Page Error:", err);
    return notFound();
  }
}
