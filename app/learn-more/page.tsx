import React from 'react'
import LearnMoreArticle from '../components/learnMoreArticle/LearnMoreArticle'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export const metadata = {
  title: "Why Internships Matter for Freshers | Learn More | Freshertoday",
  description:
    "Understand how internships help freshers gain experience, build networks, and land jobs. A must-read for students starting their careers.",
  keywords:
    "importance of internships, internships for students, career tips for freshers, how internships help, Freshertoday learn more, student career guide",
  author: "Freshertoday",
  robots: "index, follow",
  openGraph: {
    title: "Why Internships Matter for Freshers | Learn More | Freshertoday",
    description:
      "Explore the long-term benefits of internships for freshers. Real-world skills, certificates, and clarity — all start with internships.",
    url: "https://freshertoday.in/learn-more",
    type: "article",
    images: [
      {
        url: "https://freshertoday.in/logo.png",
        width: 1200,
        height: 630,
        alt: "freshertoday Career Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Freshertoday",
    title: "Why Internships Matter for Freshers | Learn More | Freshertoday",
    description:
      "Learn how internships shape a fresher’s career. Real-world exposure, skills, and confidence — all in one guide.",
    image: "https://freshertoday.in/logo.png",
  },
  publisher: {
    "@type": "Organization",
    name: "freshertoday",
    logo: {
      "@type": "ImageObject",
      url: "https://freshertoday.in/logo.png",
    },
  },
  alternates: {
    canonical: "https://freshertoday.in/learn-more",
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
                <LearnMoreArticle />
                <Footer />
    </div>
  )
}

export default page