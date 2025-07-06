'use client';
import Link from 'next/link';

export function CTA() {
  return (
    <div className="sticky bottom-4 z-30 w-full flex justify-center">
      <div className="bg-indigo-600 text-white rounded-xl shadow-lg px-6 py-4 mx-4 max-w-3xl w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left font-medium text-base">
          Start building your GitHub-powered portfolio with <span className="font-semibold">GitPeek</span> today!
        </p>
        <Link
          href="/"
          className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
