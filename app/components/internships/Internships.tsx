'use client'

import { Clock, BookOpen, Award, ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const internships = [
  {
    id: 'frontend',
    title: 'Frontend Development Intern',
    mode: 'Remote',
    duration: '4 weeks',
  },
  {
    id: 'content-writing',
    title: 'Content Writing Intern',
    mode: 'Remote',
    duration: '3 weeks',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing Intern',
    mode: 'Remote',
    duration: '3 weeks',
  },
  {
    id: 'figma',
    title: 'Figma Design Intern',
    mode: 'Remote',
    duration: '2 weeks',
  },
  {
    id: 'backend',
    title: 'Backend Development Intern',
    mode: 'Remote',
    duration: '4 weeks',
  },
  {
    id: 'analytics',
    title: 'Google Analytics Intern',
    mode: 'Remote',
    duration: '2 weeks',
  },
]

export default function InternshipList() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="sr-only">Internships for Freshers | Freshertoday</h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Available Internships</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {internships.map((intern) => (
          <div
            key={intern.id}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{intern.title}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4" /> {intern.mode}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4" /> {intern.duration}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Award className="w-4 h-4" /> Certificate on completion
            </p>

            <Link
            target='_blank'
              href={`https://forms.gle/ELnj8pAZfzuuaS8y7`}
              title="Apply for the internship via Google Form"

              className="inline-block mt-4 text-sm font-semibold text-emerald-600 hover:underline"
            >
              Apply Now →
            </Link>
          </div>
        ))}
      </div>

      {/* 🚀 CTA BOTTOM SECTION */}
      <div className="mt-20 bg-gradient-to-br from-violet-100 via-sky-100 to-emerald-100 rounded-3xl p-10 text-center shadow-inner">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
          Not sure where to start?
        </h3>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Whether you&#39;re new to internships or exploring a career shift, Freshertoday is here to guide you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
  href="/coming-soon"
  title="Explore all internship opportunities at Freshertoday"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
>
  <ArrowRight className="w-4 h-4" />
  Browse All Internships
</Link>

<Link
  href="/coming-soon"
  title="Get internship and career guidance from Freshertoday"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 border border-emerald-600 hover:bg-gray-50 transition"
>
  <HelpCircle className="w-4 h-4" />
  Get Guidance
</Link>

        </div>
      </div>
    </section>
  )
}
