import React from "react";
import Navbar from "../components/navbar/Navbar";
import FounderPage from "../components/founder/Founder";
import Footer from "../components/footer/Footer";
import Script from "next/script";

// app/sanjay-achari/page.tsx
export const metadata = {
  title: "Sanjay Achari – Founder of Freshertoday",
  description:
    "Sanjay Achari is the founder & CEO of Freshertoday, a startup helping freshers in India land jobs and internships with ease. Learn more about his vision, journey, and mission.",
  keywords:
    "Sanjay Achari, Freshertoday founder, CEO Freshertoday, Sanjay Achari startup, job board India, internships for students",
  openGraph: {
    title: "Sanjay Achari – Founder of Freshertoday",
    description:
      "Discover the story of Sanjay Achari, the founder behind Freshertoday — India's emerging platform for fresher jobs and internships.",
    url: "https://freshertoday.in/sanjay-achari",
    type: "profile",
    images: [
      {
        url: "https://freshertoday.in/sanjay-achari-cover.jpeg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Sanjay Achari - Founder of Freshertoday",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Freshertoday",
    title: "Sanjay Achari – Founder & CEO of Freshertoday",
    description:
      "Sanjay Achari is building Freshertoday to help students find quality internships and jobs across India.",
    images: ["https://freshertoday.in/sanjay-achari-cover.jpeg"], // Replace with actual image
  },
  alternates: {
    canonical: "https://freshertoday.in/sanjay-achari",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const page = () => {
  return (
    <div>
      <Script
        id="structured-data-sanjay"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sanjay Achari",
            url: "https://freshertoday.in/sanjay-achari",
            image: "https://freshertoday.in/sanjay-achari-cover.jpeg",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "Freshertoday",
              url: "https://freshertoday.in",
            },
            sameAs: [
              "https://www.linkedin.com/in/sanjayachari",
              "https://www.instagram.com/freshertoday.in",
              "https://twitter.com/Freshertoday",
            ],
          }),
        }}
      />
      <Navbar />
      <FounderPage />
      <Footer />
    </div>
  );
};

export default page;
