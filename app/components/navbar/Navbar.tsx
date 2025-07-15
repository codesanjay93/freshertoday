'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Discover', href: '/discover' },
    { name: 'For Job Seekers', href: '/for-job-seekers' },
    { name: 'For Companies', href: '/for-companies' },
    { name: 'Login', href: '/login' },
  ]

  return (
    <>
      {/* 📢 Announcement */}
      <div className="w-full bg-[#f1f5f9] text-[#005250] text-sm sm:text-base text-center py-2 px-4 border-b border-gray-200">
        🚀 Freshertoday is launching soon — Stay tuned for updates!
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 sm:px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-semibold text-[#005250] cursor-pointer"
            onClick={() => router.push('/')}
          >
            freshertoday.in
          </div>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6 text-sm sm:text-base">
        {navLinks.map((link) => (
  <button
    key={link.name}
    onClick={() => {
      alert("Coming soon!")
      // router.push(link.href)
    }}
    className="text-gray-700 hover:text-[#005250] transition"
  >
    {link.name}
  </button>
))}

            <button
              // onClick={() => router.push('/signup')}
              onClick={() => {
                alert("Coming soon!")
              }}
              className="text-white bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 px-5 py-1.5 rounded-full hover:opacity-90"
            >
              Signup
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="sm:hidden text-gray-700"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Overlay + Slide-in Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-2xl transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <div className="text-xl font-bold text-[#005250]">freshertoday.in</div>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 text-gray-700 text-base">
          {navLinks.map((link) => (
  <button
    key={link.name}
    onClick={() => {
      alert("Coming soon!")
      // router.push(link.href)
      setIsOpen(false)
    }}
    className="text-left hover:text-[#005250] transition"
  >
    {link.name}
  </button>
))}


          <button
            onClick={() => {
      alert("Coming soon!")

              // router.push('/signup')
              // setIsOpen(false)
            }}
            className="mt-6 w-full text-white bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 py-2 rounded-full hover:opacity-90"
          >
            Signup
          </button>
        </div>
      </div>
    </>
  )
}
