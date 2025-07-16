
import React from 'react'

export default function About() {
  return (
    <section className="bg-gradient-to-br from-violet-100 via-sky-100 to-emerald-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
          About Freshertoday
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
          Freshertoday is a bootstrapped startup founded by <strong>Sanjay Achari</strong> — with a focused mission:
          to help freshers in India find real, quality internships and jobs. No spam, no clutter. Just transparent opportunities tailored to your growth.
        </p>

        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow p-6 sm:p-10 text-left text-gray-700 space-y-5">
          <p>
            🚀 We&#39;re more than a job board. Freshertoday is powered by a smart curation process that
            adapts to job-seeker demand. Our listings are carefully selected using a hybrid of manual screening
            and lightweight algorithmic filters — ensuring you only see relevant roles worth your time.
          </p>
          <p>
            🔍 Whether you&#39;re just starting out, switching fields, or trying to land your first remote opportunity —
            our system prioritizes the intent of the applier and matches them with the best-fit internships and jobs.
          </p>
          <p>
            🎯 We don&#39;t expose every internal workflow, but our goal is simple: reduce the guesswork for freshers
            navigating their early careers.
          </p>
        </div>

        <p className="mt-10 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Your career journey starts here. Curated roles. Fair listings. Zero distractions.
        </p>
      </div>
    </section>
  )
}
