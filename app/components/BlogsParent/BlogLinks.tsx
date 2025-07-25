import Link from "next/link"

export const staticBlogs = [
  {
    slug: 'first-internship-guide-2025',
    title: 'How to Get Your First Internship in 2025',
    description: 'A step-by-step guide for Indian freshers to land their first internship with confidence.',
  },
  {
    slug: 'resume-mistakes-for-freshers',
    title: 'Top 5 Resume Mistakes Freshers Must Avoid',
    description: 'Your resume is your first impression. Avoid these common blunders in 2025.',
  },
  {
    slug: 'best-job-websites-for-freshers',
    title: 'Best Job Portals for Freshers in India',
    description: 'We compare Naukri, LinkedIn, and Freshertoday to help you find fresher-friendly jobs.',
  },
  {
    slug: 'telephonic-interview-tips',
    title: 'Telephonic Interview Tips for Freshers',
    description: 'Crucial preparation strategies to crack your next phone interview with confidence.',
  },
  {
    slug: 'internship-vs-fulltime-job',
    title: 'Internship vs Full-time Job – What Should You Choose?',
    description: 'Understand the key differences and what’s better for your career in 2025.',
  },
  {
    slug: 'resume-no-experience-freshers',
    title: 'How to Make a Resume with No Experience',
    description: 'You can still build a powerful resume. Here’s how to showcase your skills smartly.',
  },
  {
    slug: 'career-options-bca-bsc-grads',
    title: 'Career Paths After BCA/BSc for Freshers',
    description: 'Explore trending tech and non-tech opportunities for BCA/BSc graduates.',
  },
  {
    slug: 'hr-questions-for-freshers-2025',
    title: 'Most Asked HR Questions for Freshers in 2025',
    description: 'Prepare smart answers to common HR questions during your first job hunt.',
  },
  {
    slug: 'wfh-internships-for-freshers',
    title: 'Top Work-from-Home Internships for Freshers',
    description: 'Remote internships are booming. Here’s how to find and apply for them effectively.',
  },
]

export default function BlogLinks() {
  return (
   <div className="bg-white border-t border-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Explore Blog Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {staticBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="text-sm text-black hover:underline"
            >
              {blog.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
