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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-900 to-teal-700 px-4">
      <div className="max-w-2xl text-center text-white py-16">
        <h1 className="text-4xl font-bold mb-6">About Freshertoday</h1>
        <p className="text-lg leading-relaxed opacity-90">
          Freshertoday is a bootstrapped startup founded by Sanjay with one mission: 
          to help freshers in India land real jobs and internships without all the noise.
          <br /><br />
          We carefully curate high-quality listings so you can filter, apply, and get hired fast — whether you re a student or recent graduate.
          <br /><br />
          Your career journey starts here. No fluff. Just real opportunities.
        </p>
      </div>
    </main>
  );
}
