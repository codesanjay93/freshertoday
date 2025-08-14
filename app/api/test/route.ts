// app/api/blogs/route.ts

import { NextResponse } from 'next/server';
import { db } from '../../lib/firebaseAdmin'; // adjust path if needed
import { BLOG_COLLECTION } from '@/app/constant/constant';

export async function GET() {
  try {
    const snapshot = await db.collection(BLOG_COLLECTION).get();

    const blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Firebase Error:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}


// export async function GET() {
//   try {
//     // const snapshot = await db.collection(BLOG_COLLECTION).get();

//     // const blogs = snapshot.docs.map(doc => ({
//     //   id: doc.id,
//     //   ...doc.data(),
//     // }));
//     run()
//     return NextResponse.json({   blogs : "s" });
//   } catch (error) {
//     console.error('Firebase Error:', error);
//     return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
//   }
// }


// async function run() {
//   for (const item of desc) {
//     const ref = db.collection(BLOG_COLLECTION).doc(item.id); // replace "blogs" with your BLOG_COLLECTION if constant
//     try {
//    await ref.update({
//   "seo.description": item.seoDescription,
//   "seo.twitter.description": item.seoDescription,
//   "seo.openGraph.description": item.seoDescription
// });

//       console.log(`✅ Updated: ${item.id}`);
//     } catch (err) {
//       console.error(`❌ Failed: ${item.id}`, err);
//     }
//   }
//   process.exit(0);
// }



// let desc = [
//   {
//     "id": "aptitude-test-preparation-freshers",
//     "seoDescription": "Aptitude test preparation for exams, placements & interviews – proven tips, strategies, and resources to boost fresher success in 2025 job selection."
//   },
//   {
//     "id": "best-job-portals-fresh-graduates",
//     "seoDescription": "Best job portals in India 2025 for fresh graduates – trusted sites, resume tips, and smart application strategies to land your first high-paying role."
//   },
//   {
//     "id": "best-job-websites-for-freshers",
//     "seoDescription": "Top fresher job websites for 2025 graduates – verified portals, resume tips, and career-starting application strategies to secure your first great job."
//   },
//   {
//     "id": "career-options-bca-bsc-grads",
//     "seoDescription": "Top 5 careers for BCA & BSc graduates – IT, analytics, design, teaching & freelancing with skills, salaries, and growth insights for a strong 2025 start."
//   },
//   {
//     "id": "certifications-that-get-jobs-freshers",
//     "seoDescription": "Best 2025 certifications for freshers – in-demand courses, skill benefits, industry recognition, and job-ready opportunities for graduate career growth."
//   },
//   {
//     "id": "communication-skills-freshers",
//     "seoDescription": "Boost communication skills for fresher interviews – speaking, listening, body language & confidence hacks to impress recruiters and win job offers."
//   },
//   {
//     "id": "compare-job-sites-freshers",
//     "seoDescription": "Compare top Indian fresher job sites – pros & cons of Naukri, LinkedIn, Indeed, and more to pick the best 2025 platform for your career search success."
//   },
//   {
//     "id": "crack-offcampus-drive-wipro-nykaa",
//     "seoDescription": "Crack Wipro, Nykaa & Infosys off-campus drives – aptitude, technical & HR interview tips with smart strategies to boost your 2025 selection chances."
//   },
//   {
//     "id": "direct-apply-vs-company-site",
//     "seoDescription": "Direct apply vs company website – key pros, cons, and tips to improve your fresher interview chances and secure the best job offers in the 2025 market."
//   },
//   {
//     "id": "first-internship-guide-2025",
//     "seoDescription": "How to get your first internship in 2025 – resume tips, application methods, networking hacks & interview prep for students and recent fresh graduates."
//   },
//   {
//     "id": "free-coding-youtube-channels",
//     "seoDescription": "Best free coding YouTube channels – beginner tutorials, real projects & career tips for aspiring programmers and computer science freshers in 2025."
//   },
//   {
//     "id": "free-python-courses-freshers",
//     "seoDescription": "Top free Python courses for freshers – best platforms, beginner projects, and coding tips to master skills and boost career opportunities in 2025."
//   },
//   {
//     "id": "fresher-vs-intern-differences",
//     "seoDescription": "Fresher vs intern – main role, pay, skill & career impact differences explained to help you choose the right starting point for your 2025 job journey."
//   },
//   {
//     "id": "government-internships-engineering-2025",
//     "seoDescription": "Top government internships for engineering students in 2025 – eligibility, application, stipend & skill benefits to boost career prospects fast."
//   },
//   {
//     "id": "how-many-internships-needed-freshers",
//     "seoDescription": "How many internships should freshers do before a job? Gain experience, industry exposure, and skills to boost your 2025 resume for better offers."
//   },
//   {
//     "id": "hr-questions-for-freshers-2025",
//     "seoDescription": "Common HR questions for freshers 2025 – sample answers, confidence tips, and body language advice to impress recruiters in campus or job interviews."
//   },
//   {
//     "id": "hr-round-interview-preparation",
//     "seoDescription": "HR interview round preparation – common questions, strong answer tips, and winning strategies to leave recruiters with a lasting 2025 impression."
//   },
//   {
//     "id": "internship-cover-letter-format",
//     "seoDescription": "Internship cover letter format with sample – structure tips, impactful writing advice & mistakes to avoid for fresher applications in 2025 job market."
//   },
//   {
//     "id": "internship-during-college-benefits",
//     "seoDescription": "Benefits of internships during college – skill growth, networking tips, and balancing academics with work to build career-ready experience by 2025."
//   },
//   {
//     "id": "internship-google-amazon-tcs-guide",
//     "seoDescription": "How to get internships at Google, Amazon & TCS – eligibility, application tips, and prep strategies for top tech roles as a fresher in the 2025 market."
//   },
//   {
//     "id": "internship-vs-fulltime-job",
//     "seoDescription": "Internship vs full-time job – key salary, skills, and career impact differences to guide freshers in choosing the right starting point in 2025."
//   },
//   {
//     "id": "internships-without-college-help",
//     "seoDescription": "How to find internships without college support – networking, freelance work & online applications to start your fresher career successfully in 2025."
//   },
//   {
//     "id": "interview-dress-code-freshers",
//     "seoDescription": "Fresher interview dress code – outfit ideas, grooming tips & style advice to make a professional first impression and boost hiring chances in 2025."
//   },
//   {
//     "id": "linkedin-profile-tips-freshers",
//     "seoDescription": "Best LinkedIn profile tips for freshers – headlines, summaries, skills & networking strategies to attract recruiter attention in the 2025 job market."
//   },
//   {
//     "id": "no-interview-calls-freshers-reasons",
//     "seoDescription": "Why you’re not getting interview calls – resume fixes, job application hacks, networking tips, and follow-up tactics to improve fresher results in 2025."
//   },
//   {
//     "id": "online-internships-freshers-2025",
//     "seoDescription": "Top online internships for freshers in 2025 – remote roles, skill-building opportunities, and companies hiring for work-from-home internship positions."
//   },
//   {
//     "id": "resume-format-for-freshers-pdf",
//     "seoDescription": "Sample fresher resume format PDF – recruiter-approved design, formatting tips, and content guidelines to make your 2025 CV stand out in job hunts."
//   },
//   {
//     "id": "resume-mistakes-for-freshers",
//     "seoDescription": "Top resume mistakes freshers make – how to fix them, key improvements, and strong examples to attract recruiters and secure interviews in 2025."
//   },
//   {
//     "id": "resume-no-experience-freshers",
//     "seoDescription": "How to write a fresher resume with no experience – skills-based format, project showcasing & writing tips to impress employers in the 2025 job market."
//   },
//   {
//     "id": "telephonic-interview-tips",
//     "seoDescription": "Telephonic interview tips for freshers – call etiquette, answer structure, and strategies to impress recruiters during 2025 phone-based hiring rounds."
//   },
//   {
//     "id": "tell-me-about-yourself-freshers",
//     "seoDescription": "How to answer 'Tell me about yourself' – fresher-friendly structure, sample replies, and confidence tips to stand out in 2025 job or campus interviews."
//   },
//   {
//     "id": "track-job-applications-freshers",
//     "seoDescription": "How to track job applications – best tools, organization tips & follow-up strategies to improve interview success and secure fresher job offers in 2025."
//   },
//   {
//     "id": "unpaid-internship-worth-it",
//     "seoDescription": "Is an unpaid internship worth it? Detailed pros, cons, skill benefits & career insights to decide if it adds value to your 2025 professional growth."
//   },
//   {
//     "id": "wfh-internships-for-freshers",
//     "seoDescription": "Work from home internships for freshers – benefits, application tips, and companies offering remote internship opportunities in 2025 job market."
//   }
// ]


