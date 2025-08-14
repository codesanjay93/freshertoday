"use client";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 md:pt-20">
      <div className="max-w-7xl mx-auto md:px-0 px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-[#005250]">Freshertoday</h2>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Helping students and freshers find jobs, internships, and career
              opportunities that launch their future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  title="Learn more about Freshertoday"
                  className="hover:text-[#005250]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sanjay-achari"
                  title="Meet the founder Sanjay Achari"
                  className="hover:text-[#005250]"
                >
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  title="Contact Freshertoday team"
                  className="hover:text-[#005250]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  title="Privacy Policy of Freshertoday"
                  className="hover:text-[#005250]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  title="Terms of Service for using Freshertoday"
                  className="hover:text-[#005250]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/coming-soon"
                  title="Browse jobs for freshers"
                  className="hover:text-[#005250]"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/internships"
                  title="Explore internship listings"
                  className="hover:text-[#005250]"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  title="Get your internship certificate"
                  className="hover:text-[#005250]"
                >
                  Get Certificate
                </Link>
              </li>
              <li>
                <Link
                  href="/learn-more"
                  title="Why internships are important for freshers"
                  className="hover:text-[#005250]"
                >
                  Why Internships Matter
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                title="Follow us on Facebook"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                title="Follow us on Twitter"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                title="Follow us on Instagram"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="/go/linkedin"
                title="Connect with us on LinkedIn"
                className="text-gray-500 hover:text-[#005250]"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Freshertoday. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
