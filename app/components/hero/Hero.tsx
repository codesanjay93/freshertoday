"use client"

import {
  Search,
  MapPin,
  Briefcase,
  Users,
  TrendingUp,
  Star,
  Zap,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")
  const [searchType, setSearchType] = useState("jobs") // "jobs" or "internships"

  const handleSearch = () => {
                alert("Coming soon!")

    // console.log("Searching for:", { jobTitle, location, searchType })
  }

  const popularTags = [
    "React Developer",
    "Data Entry",
    "Remote Work",
    "UI/UX Designer",
    "Python",
    "Digital Marketing",
    "Content Writing",
    "Full Stack",
  ]

  const internshipBenefits = [
    { icon: BookOpen, title: "Learn & Grow", desc: "Gain real-world experience" },
    { icon: Award, title: "Get Certified", desc: "Earn completion certificates" },
    { icon: Users, title: "Network", desc: "Connect with industry experts" },
    { icon: TrendingUp, title: "Career Boost", desc: "Fast-track your career" },
  ]

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-sky-50 to-emerald-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-transparent to-purple-100/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-200/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-violet-300/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br from-sky-300/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Enhanced Trust Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl text-slate-700 px-8 py-4 rounded-full text-sm font-medium border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex -space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="font-bold text-slate-900">4.9/5</span>
            <span className="text-slate-600">• Trusted by 50+ students</span>
            <Sparkles className="w-4 h-4 text-violet-500" />
          </div>
        </div>

        {/* Enhanced Main Headline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2  px-6 py-3 rounded-full text-sm font-semibold mb-8 underline">
            <Sparkles className="w-4 h-4" />
            Your dream career awaits
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900">
              Launch Your
            </span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-sky-600 to-emerald-600 mt-2">
              Dream Career
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            From{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-sky-600">
              5L+ jobs
            </span>{" "}
            to skill-building internships — your perfect opportunity awaits
          </p>
        </div>

        {/* Enhanced Modern Search Component */}
        <div className="max-w-5xl mx-auto mb-16">
        
          {/* Enhanced Modern Search Bar */}
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 hover:bg-white/90">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Enhanced Job Title Input */}
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-slate-400 group-focus-within:text-violet-500 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  placeholder={searchType === "jobs" ? "Job title, skills, or company" : "Skills you want to learn"}
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="block w-full pl-16 pr-6 py-6 text-lg rounded-2xl border-0 bg-gradient-to-r from-slate-50/80 to-white/80 focus:from-white focus:to-white focus:ring-4 focus:ring-violet-500/20 focus:outline-none transition-all duration-300 placeholder-slate-400 font-medium"
                />
              </div>

              {/* Enhanced Location Input */}
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <MapPin className="h-6 w-6 text-slate-400 group-focus-within:text-violet-500 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  placeholder="Location or Remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full pl-16 pr-6 py-6 text-lg rounded-2xl border-0 bg-gradient-to-r from-slate-50/80 to-white/80 focus:from-white focus:to-white focus:ring-4 focus:ring-violet-500/20 focus:outline-none transition-all duration-300 placeholder-slate-400 font-medium"
                />
              </div>

              {/* Enhanced Search Button */}
              <button
                onClick={handleSearch}
                className={`group px-12 py-6 rounded-2xl font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl lg:min-w-[200px] relative overflow-hidden ${
                  searchType === "jobs"
                    ? "bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 hover:from-violet-700 hover:via-purple-700 hover:to-violet-700"
                    : "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-700"
                }`}
              >
                <span className="relative z-10">{searchType === "jobs" ? "Find Jobs" : "Start Learning"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Popular Searches */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Trending Searches</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {popularTags.map((tag, index) => (
              <button
                key={tag}
                onClick={() => {alert("Coming soon!")}}
                className="group px-6 py-4 bg-white/70 backdrop-blur-sm hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 text-slate-700 hover:text-white rounded-full transition-all duration-300 border border-white/40 hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-base"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        

        {/* Enhanced Bottom Stats */}
        <div className="text-center">
          <div className="md:inline-flex items-center gap-8 bg-white/70 backdrop-blur-2xl px-12 py-6 rounded-3xl md:rounded-full shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-300">
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                100+
              </div>
              <div className="text-sm text-slate-600 font-medium">Active Jobs</div>
            </div>
            <div className="w-px h-12 md:bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                50+
              </div>
              <div className="text-sm text-slate-600 font-medium">Internships</div>
            </div>
            <div className="w-px h-12 md:bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                30+
              </div>
              <div className="text-sm text-slate-600 font-medium">Success Stories</div>
            </div>
          </div>
        </div>


        {/* Enhanced Prominent Internship Promotion */}
        <div className="max-w-6xl mx-auto my-16">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-600 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-40 translate-x-40 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full translate-y-32 -translate-x-32 blur-2xl"></div>

            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border border-white/30">
                  <Zap className="w-5 h-5" />
                  Skill Building Program
                </div>

                <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Lack Skills?
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Start with Internships!
                  </span>
                </h2>

                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Transform from beginner to job-ready professional through our structured internship programs
                </p>
              </div>

              {/* Enhanced Benefits Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {internshipBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-white/20"
                  >
                    <div className="bg-white/20 rounded-2xl p-3 w-fit mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-yellow-300" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-white/80">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center" 
                onClick={() => { alert("Coming soon!")}}
              
              >
                <button className="group bg-white text-emerald-600 font-bold px-10 py-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <BookOpen className="w-6 h-6" />
                  Browse Internships
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
