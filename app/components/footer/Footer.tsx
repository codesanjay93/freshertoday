'use client'

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-[#005250]">Freshertoday</h2>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Helping students and freshers find jobs, internships, and career opportunities that launch their future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-[#005250]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#005250]">Contact</a></li>
              <li><a href="/privacy" className="hover:text-[#005250]">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#005250]">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/jobs" className="hover:text-[#005250]">Browse Jobs</a></li>
              <li><a href="/internships" className="hover:text-[#005250]">Internships</a></li>
              <li><a href="/certificate" className="hover:text-[#005250]">Get Certificate</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-[#005250]"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-[#005250]"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-[#005250]"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-[#005250]"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Freshertoday. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
