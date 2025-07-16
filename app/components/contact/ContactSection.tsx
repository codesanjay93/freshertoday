'use client'

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg opacity-90 mb-10">
          We’d love to hear from you! Whether it’s feedback, a question, or a partnership inquiry — drop us a message.
        </p>

        <ul className="space-y-6 text-lg">
          <li>
            📧 Email:{' '}
            <a
              href="mailto:codesanjay93@gmail.com"
              className="underline hover:text-teal-200"
            >
              codesanjay93@gmail.com
            </a>
          </li>
          <li>📍 Location: Bengaluru, India</li>
          {/* <li>
            💬 WhatsApp:{' '}
            <a
              href="https://wa.me/917676997759"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-200"
            >
              +91 7676997759
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  )
}
