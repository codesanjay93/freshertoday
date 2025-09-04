import { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Freshertoday | Fresher Jobs & Internships in India",
  description:
    "Discover the latest fresher jobs and internships across IT, Marketing, Engineering, and more. Apply directly or via trusted companies — simple, curated, and free with Freshertoday.",
  
  // ❌ Google ignores this, but if you want to keep it, reduce stuffing
  keywords:
    "fresher jobs, internships India, entry-level jobs, graduate jobs, campus placement, student careers, IT fresher jobs, engineering jobs, marketing internships, paid internships, work from home internships",

  authors: [{ name: "Freshertoday" }],
  robots: "index, follow",

  openGraph: {
    title: "Freshertoday | Fresher Jobs & Internships in India",
    siteName: "Freshertoday",
    description:
      "Find your first job or internship in India with Freshertoday. Curated listings, direct apply options, and zero clutter.",
    url: "https://freshertoday.in",
    type: "website",
    images: [
      {
        url: "https://freshertoday.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Freshertoday Job Board",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@freshertoday",
    title: "Freshertoday | Fresher Jobs & Internships in India",
    description:
      "Browse quality fresher jobs and internships in India. Built for students and early professionals.",
    images: ["https://freshertoday.in/logo.png"],
  },

  alternates: {
    canonical: "https://freshertoday.in",
    languages: {
      "en-IN": "https://freshertoday.in",
      "x-default": "https://freshertoday.in",
    },
  },

  // ✅ Updated publisher (modern, not Google+ legacy)
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

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://freshertoday.in/#organization",
        "name": "freshertoday",
        "url": "https://freshertoday.in",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://freshertoday.in/#logo",
          "url": "https://freshertoday.in/logo.png",
          "width": 1200,
          "height": 630
        },
        "description": metadata.description,
        "sameAs": [
          "https://www.linkedin.com/company/freshertoday",
          "https://www.instagram.com/freshertoday",
          "https://twitter.com/freshertoday"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-7676997759",
            "contactType": "customer service"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://freshertoday.in/#website",
        "url": "https://freshertoday.in",
        "name": "freshertoday",
        "alternateName": metadata.title,
        "publisher": { "@id": "https://freshertoday.in/#organization" }
      },
      {
        "@type": "WebPage",
        "@id": "https://freshertoday.in/#webpage",
        "url": "https://freshertoday.in",
        "name": metadata.title,
        "isPartOf": { "@id": "https://freshertoday.in/#website" },
        "primaryImageOfPage": { "@id": "https://freshertoday.in/#logo" },
        "description": metadata.description,
        "publisher": { "@id": "https://freshertoday.in/#organization" }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="SvrjJ8IGUCQMNuQE6DEjL8pqkfvS6IR6-b3b9hKvLiY"
        />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Ahrefs Analytics (keeps using next/script) */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="UQAthmzrH5KlpQGz7+tKHg"
          strategy="beforeInteractive"
        />

        {/* <-- SERVER-SIDE JSON-LD: plain <script> so it appears in initial HTML --> */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Analytics */}
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

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "szuxm9hj84");`,
          }}
        />

        {/* ADSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-2924366410962579"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
