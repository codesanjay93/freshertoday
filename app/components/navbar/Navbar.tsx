"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Blogs",
      href: "/blogs",
      title: "Read latest career blogs on Freshertoday",
    },
    { name: "Internships", href: "/coming-soon", title: "Coming soon" },
    { name: "For Companies", href: "/coming-soon", title: "Coming soon" },
    {
      name: "Login",
      href: "/login",
      title: "Login to your Freshertoday account",
    },
  ];

  return (
    <>
      {/* 📢 Announcement (Hidden on /internships) */}
      {pathname !== "/internships" && (
        <div className="w-full bg-[#fef9c3] text-[#1f2937] text-sm sm:text-base text-center py-2 px-4 border-b border-yellow-300 font-medium flex justify-center items-center gap-2">
          <span className="delayed-wiggle-bell text-red-500 font-bold text-lg">
            🔔
          </span>
          <span>We&#39;re hiring interns!</span>
          <Link
            href="/internships"
            title="Apply for internships now"
            className="ml-2 text-yellow-900 font-bold underline underline-offset-4 hover:text-yellow-700 transition-colors"
          >
            Apply now →
          </Link>
        </div>
      )}

      {/* Navbar */}
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 sm:px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            title="Go to Freshertoday homepage"
            className="flex items-center gap-2 text-2xl font-semibold text-[#27508d] cursor-pointer"
          >
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Freshertoday Logo"
                title="Freshertoday Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            freshertoday
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6 text-sm sm:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                title={link.title}
                className="text-gray-700 hover:text-[#005250] transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/register"
              title="Sign up on Freshertoday"
              className="text-white bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 px-5 py-1.5 rounded-full hover:opacity-90"
            >
              Signup
            </Link>
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
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-2xl transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <div className="text-xl font-bold text-[#27508d] flex gap-2">
            <Image
              src="/logo.png"
              alt="Freshertoday Logo"
              width={30}
              height={30}
              title="Freshertoday Logo"
              className="object-contain"
              priority
            />
            freshertoday
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 text-gray-700 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              title={link.title}
              onClick={() => setIsOpen(false)}
              className="text-left hover:text-[#005250] transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/coming-soon"
            title="Signup for Freshertoday"
            onClick={() => setIsOpen(false)}
            className="underline rounded-full hover:opacity-90"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
