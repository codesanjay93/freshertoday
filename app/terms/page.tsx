import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

// pages/terms.tsx
export const metadata = {
  title: "Terms of Service – Freshertoday",
  description:
    "Read the terms of using Freshertoday. Understand your rights and responsibilities as a job seeker or visitor on our platform.",
  keywords:
    "Terms of Service, Freshertoday Terms, job board terms, internship platform terms",
  alternates: {
    canonical: "https://freshertoday.in/terms",
  },
};

export default function TermsPage() {
  return (
   <>
   <Navbar />

    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-4">
        Welcome to Freshertoday. By accessing or using our website, you agree to be bound by the following Terms of Service.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-4">
        By using Freshertoday, you acknowledge that you’ve read, understood, and accepted these terms. If you don’t agree, please do not use our site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. Use of Platform</h2>
      <p className="text-gray-600 mb-4">
        Our platform is strictly for students and freshers seeking internships and jobs. Misuse of the platform may lead to termination of access.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. Intellectual Property</h2>
      <p className="text-gray-600 mb-4">
        All content, logos, and designs are the property of Freshertoday and may not be reused without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. Changes to Terms</h2>
      <p className="text-gray-600 mb-4">
        We reserve the right to update these Terms at any time. Continued use of the site means you accept the new terms.
      </p>

      <p className="text-gray-600 mt-8">Last updated: July 2025</p>
    </main>
   <Footer />
   </>
  );
}