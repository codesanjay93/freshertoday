'use client'

import Link from "next/link"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"



export default function ComingSoonPage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#005250] mb-4">
          🚧 Coming Soon
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-xl mb-8">
          We&#39;re working hard behind the scenes to bring something amazing. Stay tuned — it&#39;s worth the wait!
        </p>

        <div className="bg-white shadow-md rounded-full px-6 py-3 border border-gray-200 text-gray-500 text-sm">
          <span>Have questions? </span>
          <Link href="/contact"
          title="contact us"
          className="text-[#005250] font-semibold hover:underline">Contact us →</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
