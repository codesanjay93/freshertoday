import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "freshertoday | Internships & Jobs for Freshers in India",
  description:
    "Freshertoday helps freshers in India find high-quality jobs and internships with ease. Apply directly or via trusted sources — curated, simple, and free.",
  keywords:
    "Freshertoday, fresher jobs, internships India, entry-level jobs, college internships, job board, student careers",
  author: "Freshertoday",
  robots: "index, follow",
  openGraph: {
    title: "Freshertoday | Internships & Jobs for Freshers in India",
    description:
      "Find your first job or internship with Freshertoday. Curated listings, direct apply options, and zero clutter.",
    url: "https://www.fresherstoday.in",
    type: "website",
    images: [
      {
        url: "https://www.fresherstoday.in/logo.png",
        width: 1200,
        height: 630,
        alt: "freshertoday Job Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Freshertoday",
    title: "Freshertoday | Internships & Jobs for Freshers in India",
    description:
      "Browse quality internships and fresher jobs. Built for Indian students and early professionals.",
    image: "https://www.fresherstoday.in/logo.png",
  },
  publisher: {
    "@type": "Organization",
    name: "freshertoday",
    logo: {
      "@type": "ImageObject",
      url: "https://www.fresherstoday.in/logo.png",
    },
  },
  alternates: {
    canonical: "https://www.fresherstoday.in",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="SvrjJ8IGUCQMNuQE6DEjL8pqkfvS6IR6-b3b9hKvLiY"
        />

        {/* ✅ Favicon & App Icons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        <link
          rel="alternate"
          href="https://www.fresherstoday.in/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.fresherstoday.in/"
          hrefLang="en-IN"
        />
        <link
          rel="alternate"
          href="https://www.fresherstoday.in/"
          hrefLang="x-default"
        />

        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Freshertoday",
              url: "https://www.fresherstoday.in",
              logo: "https://www.fresherstoday.in/logo.png",
              description: metadata.description,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7676997759",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.instagram.com/fresherstoday.in",
                "https://twitter.com/Freshertoday",
              ],
            }),
          }}
        />

        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4MNK2647KX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4MNK2647KX');
          `}
        </Script>
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
