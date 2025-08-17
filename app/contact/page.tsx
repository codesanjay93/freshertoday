import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

// app/contact/page.tsx
export const metadata = {
  title: "Contact Us – Freshertoday",
  description:
    "Need help or have a partnership query? Contact Freshertoday – your trusted job and internship platform for freshers in India.",
  keywords:
    "Freshertoday contact, contact job board, internship queries, fresher helpdesk, support freshertoday, partnership Freshertoday, fresher job contact",
    siteName: "freshertoday",
    openGraph: {
    title: "Contact Freshertoday | Support for Jobs & Internships",
    description:
      "Get in touch with Freshertoday for support, feedback, and collaboration opportunities. We're here to help freshers succeed.",
    url: "https://freshertoday.in/contact",
    type: "website",
    images: [
      {
        url: "https://freshertoday.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Freshertoday Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Freshertoday",
    title: "Contact Freshertoday | Help & Partnerships",
    description:
      "Questions or feedback? Contact the Freshertoday team for support, partnerships, or career inquiries.",
    images: ["https://freshertoday.in/logo.png"],
  },
  publisher: {
    "@type": "Organization",
    name: "Freshertoday",
    logo: {
      "@type": "ImageObject",
      url: "https://freshertoday.in/logo.png",
    },
  },
  alternates: {
    canonical: "https://freshertoday.in/contact",
  },
};


export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactSection />
      <Footer />

    </div>
  );
}
