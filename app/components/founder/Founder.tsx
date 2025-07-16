'use client'

import Link from "next/link"

export default function FounderPage() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-emerald-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Meet the Founder
        </h1>

        <div className="bg-white shadow-xl border border-gray-200 rounded-3xl p-8 sm:p-10 text-left text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Sanjay Achari</h2>
          <p className="text-lg leading-relaxed mb-4">
            Sanjay Achari is the founder and driving force behind <strong>Freshertoday</strong>. As a self-taught developer and passionate problem-solver,
            Sanjay built Freshertoday to address a key challenge faced by millions of students and fresh graduates in India:
            access to genuine, clutter-free job and internship opportunities.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Coming from a humble background and navigating the early stages of his own career, Sanjay experienced first-hand how fragmented
            and overwhelming the job search ecosystem can be for freshers. Instead of complaining, he started coding. 
            The result is a startup built ground-up with zero external funding, designed with empathy for first-time job seekers.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            His vision is simple yet powerful: <em>&#39;Every fresher deserves a fair shot.&#39;</em> Whether you&#39;re a coder, a writer,
            a marketer, or someone figuring it all out — Freshertoday is here to support you.
          </p>

          <p className="text-lg leading-relaxed">
            Today, Sanjay continues to lead Freshertoday&#39;s growth as a solo founder, working on technology, partnerships, and user experience — all with a single focus:
            make career discovery easier, faster, and more transparent for India&#39;s next generation of professionals.
          </p>
        </div>

        <p className="mt-10 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Follow his journey on <Link href="https://www.linkedin.com/in/sanjayachari/"
          title="Who is Sanjay achari"
          target="_blank" className="text-emerald-700 font-medium hover:underline">LinkedIn</Link>.
        </p>
      </div>
    </section>
  )
}
