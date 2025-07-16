import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

// app/about/page.tsx
export const metadata = {
  title: "About Us – Freshertoday",
  description:
    "Learn about Freshertoday – a bootstrapped platform helping Indian freshers find curated jobs and internships easily.",
  keywords:
    "Freshertoday, about Freshertoday, fresher jobs, internships India, student careers, job board, entry-level jobs, campus recruitment, freshers startup",
  openGraph: {
    title: "About Freshertoday | India’s Job & Internship Platform for Freshers",
    description:
      "Freshertoday is a startup helping freshers get their first job or internship. Learn about our mission and story.",
    url: "https://www.fresherstoday.in/about",
    type: "website",
    images: [
      {
        url: "https://www.fresherstoday.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Freshertoday Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Freshertoday",
    title: "About Freshertoday | India’s Job & Internship Platform",
    description:
      "We help students and fresh graduates get discovered by the right companies. Learn who we are.",
    images: ["https://www.fresherstoday.in/logo.png"],
  },
  publisher: {
    "@type": "Organization",
    name: "Freshertoday",
    logo: {
      "@type": "ImageObject",
      url: "https://www.fresherstoday.in/logo.png",
    },
  },
  alternates: {
    canonical: "https://www.fresherstoday.in/about",
  },
};


export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
