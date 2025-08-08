import React from 'react'
import InternshipList from '../components/internships/Internships'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BlogLinks from '../components/BlogsParent/BlogLinks';

export const metadata = {
  title: "Internships for Freshers in India | Freshertoday",
  description:
    "Apply to real, verified internships built for students and freshers. Gain skills, experience, and certificates with remote, short-term internships.",
  keywords:
    "internships India, remote internships, internships for freshers, online internships, free internships, certificate internships, student internships, Freshertoday",
  author: "Freshertoday",
  robots: "index, follow",
  openGraph: {
    title: "Internships for Freshers in India | Freshertoday",
    description:
      "Get access to industry-ready internships. No clutter, no spam — just career-building internships for freshers.",
    url: "https://www.freshertoday.in/internships",
    type: "website",
    images: [
      {
        url: "https://www.freshertoday.in/logo.png",
        width: 1200,
        height: 630,
        alt: "freshertoday Internships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Freshertoday",
    title: "Internships for Freshers in India | Freshertoday",
    description:
      "Apply to skill-building internships and get certified. Perfect for students and freshers looking to grow their careers.",
    image: "https://www.freshertoday.in/logo.png",
  },
  publisher: {
    "@type": "Organization",
    name: "freshertoday",
    logo: {
      "@type": "ImageObject",
      url: "https://www.freshertoday.in/logo.png",
    },
  },
  alternates: {
    canonical: "https://www.freshertoday.in/internships",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const page = () => {
    
  return (
    <div>
        <Navbar />
        <InternshipList />
        <BlogLinks />
        <Footer />
    </div>
  )
}

export default page