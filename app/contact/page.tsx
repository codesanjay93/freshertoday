// app/contact/page.tsx
export const metadata = {
  title: "Contact Us – Freshertoday",
  description:
    "Need help or have a partnership query? Contact Freshertoday – your trusted job and internship platform for freshers in India.",
  keywords:
    "Freshertoday contact, contact job board, internship queries, fresher helpdesk, support freshertoday, partnership Freshertoday, fresher job contact",
  openGraph: {
    title: "Contact Freshertoday | Support for Jobs & Internships",
    description:
      "Get in touch with Freshertoday for support, feedback, and collaboration opportunities. We're here to help freshers succeed.",
    url: "https://www.fresherstoday.in/contact",
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
    title: "Contact Freshertoday | Help & Partnerships",
    description:
      "Questions or feedback? Contact the Freshertoday team for support, partnerships, or career inquiries.",
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
    canonical: "https://www.fresherstoday.in/contact",
  },
};


export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-900 to-teal-700 px-4">
      <div className="max-w-2xl text-center text-white py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg opacity-90 mb-10">
          We’d love to hear from you! Whether it’s feedback, a question, or a partnership inquiry — drop us a message.
        </p>

        <ul className="space-y-6 text-lg">
          <li>
            📧 Email: <a href="mailto:codesanjay93@gmail.com" className="underline text-white hover:text-teal-200">codesanjay93@gmail.com</a>
          </li>
          <li>
            📍 Location: Bengaluru, India
          </li>
          <li>
            💬 WhatsApp: <a href="https://wa.me/917676997759" target="_blank" className="underline text-white hover:text-teal-200">+91 7676997759</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
