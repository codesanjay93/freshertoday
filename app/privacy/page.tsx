import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

// pages/privacy.tsx
export const metadata = {
  title: "Privacy Policy – Freshertoday",
  description:
    "Learn how Freshertoday collects, uses, and protects your data when you visit our job and internship platform.",
  keywords:
    "Privacy Policy, Freshertoday privacy, data protection, student privacy, job seeker data",
  alternates: {
    canonical: "https://freshertoday.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
    <Navbar />
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        Your privacy matters to us. This policy explains how we collect and handle your data when you visit Freshertoday.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        We may collect your name, email address, resume details, and other information when you apply or sign up.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. How We Use Your Information</h2>
      <p className="text-gray-600 mb-4">
        We use your information to match you with internships, notify you about new opportunities, and improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. Third-Party Sharing</h2>
      <p className="text-gray-600 mb-4">
        We do not sell your data. We may share your information with trusted companies only to help you get placed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. Cookies</h2>
      <p className="text-gray-600 mb-4">
        Our website uses cookies for analytics and personalization. You can disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">5. Data Security</h2>
      <p className="text-gray-600 mb-4">
        We implement security measures to protect your data. However, no system is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">6. Contact</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions about this Privacy Policy, email us at:
        <a href="mailto:codesanjay93@gmail.com" className="text-blue-600 underline ml-1">codesanjay93@gmail.com</a>
      </p>

      <p className="text-gray-600 mt-8">Last updated: July 2025</p>
    </main>
    <Footer />
    </>
  );
}
