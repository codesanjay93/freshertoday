import { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "freshertoday | Internships & Jobs for Freshers in India",
  description:
    "freshertoday helps freshers in India find high-quality jobs and internships with ease. Apply directly or via trusted sources — curated, simple, and free.",
  keywords:
    "freshertoday, fresher jobs, internships India, entry-level jobs, college internships, job board, student careers",
  authors: [{ name: "freshertoday" }],
  robots: "index, follow",
  openGraph: {
    title: "freshertoday | Internships & Jobs for Freshers in India",
    siteName: "freshertoday",
    description:
      "Find your first job or internship with freshertoday. Curated listings, direct apply options, and zero clutter.",
    url: "https://freshertoday.in",


    type: "website",
    images: [
      {
        url: "https://freshertoday.in/logo.png",
        width: 1200,
        height: 630,
        alt: "freshertoday Job Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freshertoday",
    title: "freshertoday | Internships & Jobs for Freshers in India",
    description:
      "Browse quality internships and fresher jobs. Built for Indian students and early professionals.",
    images: ["https://freshertoday.in/logo.png"],
  },
  alternates: {
    canonical: "https://freshertoday.in",
    languages: {
      "en-IN": "https://freshertoday.in",
      "x-default": "https://freshertoday.in",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children } : {
    children: ReactNode;
}) {
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

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="UQAthmzrH5KlpQGz7+tKHg"
          strategy="beforeInteractive"
        />

        {/* Structured Data */}
        <Script
          type="application/ld+json"
          id="structured-data-org"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "freshertoday",
              url: "https://freshertoday.in",
              logo: "https://freshertoday.in/logo.png",
              description: metadata.description,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7676997759",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.linkedin.com/company/freshertoday",
                "https://www.instagram.com/freshertoday",
                "https://twitter.com/freshertoday",
              ],
            }),
          }}
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
