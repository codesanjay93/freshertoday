// app/blogs/page.tsx

import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import BlogsList from '../components/BlogsParent/BlogsList'

// app/constants/blogList.ts

const staticBlogs = [
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

export default function BlogsPage() {
  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Freshertoday Blog</h1>
        <BlogsList blogs={staticBlogs} />
      </section>
      <Footer />
    </div>
  )
}
