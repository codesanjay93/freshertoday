'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9] dark:bg-[#121212] px-4">
      <div className="text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#005250] dark:text-white">
          🚧 freshertoday.in is Coming Soon
        </h1>
        <p className="text-base sm:text-lg text-[#333] dark:text-[#aaa]">
          We’re building something awesome for freshers in India.
          <br />
          Stay tuned. Launching soon!
        </p>
        <p className="text-sm text-[#666] dark:text-[#666] italic">
          — Team @ Freshertoday
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <button
            onClick={() => router.push('/about')}
            className="bg-[#005250] hover:bg-[#007b7b] text-white px-6 py-2 rounded-full transition"
          >
            About Us
          </button>
          <button
            onClick={() => router.push('/contact')}
            className="bg-[#005250] hover:bg-[#007b7b] text-white px-6 py-2 rounded-full transition"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
