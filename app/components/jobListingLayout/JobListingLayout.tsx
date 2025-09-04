"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const jobListings = [
  {
    id: 1,
    title: "Senior Backend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "Senior",
    description:
      "We're looking for a senior frontend developer to join our team and build amazing user experiences...",
    tags: ["React", "TypeScript", "Next.js"],
    postedTime: "2 days ago",
    logo: "/logo.png",
  },
  {
    id: 2,
    title: "Senior Backend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "Senior",
    description:
      "We're looking for a senior frontend developer to join our team and build amazing user experiences...",
    tags: ["React", "TypeScript", "Next.js"],
    postedTime: "2 days ago",
    logo: "/logo.png",
  },
  {
    id: 3,
    title: "Senior Backend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "Senior",
    description:
      "We're looking for a senior frontend developer to join our team and build amazing user experiences...",
    tags: ["React", "TypeScript", "Next.js"],
    postedTime: "2 days ago",
    logo: "/logo.png",
  },
  {
    id: 4,
    title: "Senior Backend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "Senior",
    description:
      "We're looking for a senior frontend developer to join our team and build amazing user experiences...",
    tags: ["React", "TypeScript", "Next.js"],
    postedTime: "2 days ago",
    logo: "/logo.png",
  },
  {
    id: 5,
    title: "Senior Backend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "Senior",
    description:
      "We're looking for a senior frontend developer to join our team and build amazing user experiences...",
    tags: ["React", "TypeScript", "Next.js"],
    postedTime: "2 days ago",
    logo: "/logo.png",
  },
  {
    id: 6,
    title: "Senior Backend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "Senior",
    description:
      "We're looking for a senior frontend developer to join our team and build amazing user experiences...",
    tags: ["React", "TypeScript", "Next.js"],
    postedTime: "2 days ago",
    logo: "/logo.png",
  },

  // More job listings...
];

const topCompanies = [
  { name: "Google", logo: "/logo.png", jobs: 45 },
  { name: "Microsoft", logo: "/logo.png", jobs: 38 },
  // More companies...
];

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);

  const handleCheckboxChange = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
    checked: boolean
  ) => {
    setList(checked ? [...list, value] : list.filter((item) => item !== value));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2"
            title="Freshertoday"
          >
            <h1 className="text-2xl font-semibold text-gray-800">
              freshertoday
            </h1>
          </Link>
          <div className="space-x-3 hidden sm:block">
            <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">
              Post a Job
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 space-y-6 sticky top-20 self-start h-fit md:block hidden">
          <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Filters
            </h2>

            {/* Search Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-600">
                Search Jobs
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                  placeholder="Job title, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Job Types */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-600">
                Job Type
              </label>
              {[
                "Full-time",
                "Part-time",
                "Contract",
                "Freelance",
                "Internship",
              ].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 text-sm text-gray-700 py-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedJobTypes.includes(type)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        selectedJobTypes,
                        setSelectedJobTypes,
                        type,
                        e.target.checked
                      )
                    }
                    className="accent-gray-800"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            {/* Experience */}
            <div className="mb-2">
              <label className="block mb-1 text-sm text-gray-600">
                Experience Level
              </label>
              {["Entry-level", "Mid-level", "Senior", "Executive"].map(
                (level) => (
                  <label
                    key={level}
                    className="flex items-center space-x-2 text-sm text-gray-700 py-1"
                  >
                    <input
                      type="checkbox"
                      checked={selectedExperience.includes(level)}
                      onChange={(e) =>
                        handleCheckboxChange(
                          selectedExperience,
                          setSelectedExperience,
                          level,
                          e.target.checked
                        )
                      }
                      className="accent-gray-800"
                    />
                    <span>{level}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {jobListings.length} Jobs Found
            </h2>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="salary-high">Salary: High to Low</option>
              <option value="salary-low">Salary: Low to High</option>
            </select>
          </div>

          {/* Job Cards */}
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-4 hover:shadow-md transition"
            >
              <div className="flex gap-4">
                <div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {job.title}
                    </h3>
                    <span className="bg-gray-100 text-sm px-2 py-0.5 rounded-full text-gray-600">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" /> {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.postedTime}
                    </span>
                  </div>
                  <p className="text-sm mt-2 text-gray-700 line-clamp-2">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs border border-gray-300 bg-gray-50 px-2 py-0.5 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col gap-2">
                <Link
                  href="/register"
                  className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
                >
                  Apply
                </Link>
                <Link
                  href="/register"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  Save
                </Link>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition">
              Load More Jobs
            </button>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="lg:col-span-1 space-y-6 sticky top-20 self-start h-fit">
          {/* Top Companies */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Top Companies
            </h2>
            {topCompanies.map((company) => (
              <div
                key={company.name}
                className="flex justify-between items-center mb-3"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={32} // h-8 = 32px
                    height={32} // w-8 = 32px
                    className="rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    {company.name}
                  </span>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                  {company.jobs} jobs
                </span>
              </div>
            ))}
            <button className="mt-4 w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition">
              View All
            </button>
          </div>

          {/* Insights */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Market Insights
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2 text-blue-800 font-medium mb-1">
                  <Star className="w-4 h-4" /> Hot Skill
                </div>
                <p className="text-sm text-blue-700">
                  React developers are in high demand
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <div className="flex items-center gap-2 text-green-800 font-medium mb-1">
                  <TrendingUp className="w-4 h-4" /> Salary Trend
                </div>
                <p className="text-sm text-green-700">
                  Tech salaries up 12% this year
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl">
                <div className="flex items-center gap-2 text-purple-800 font-medium mb-1">
                  <Users className="w-4 h-4" /> Remote Work
                </div>
                <p className="text-sm text-purple-700">
                  65% of jobs offer remote options
                </p>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-2">Job Alerts</h2>
            <p className="text-sm text-gray-600 mb-3">
              Get notified about new jobs matching your interests.
            </p>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-3 py-2 text-sm rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <button className="w-full bg-gray-900 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
