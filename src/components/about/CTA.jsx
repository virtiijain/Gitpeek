'use client';
import Link from 'next/link';

export function CTA() {
  return (
    <div className="sticky bottom-4 z-30 w-full flex justify-center px-4 sm:px-6">
      <div className="bg-indigo-600 text-white rounded-xl shadow-lg px-6 py-4 max-w-3xl w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center text-base lg:text-base sm:text-left font-normal">
          Uncover GitHub profiles in seconds with <span className="font-semibold">GitPeek</span>.
        </p>
        <Link
          href="/"
          className="text-indigo-600 text-sm font-normal px-4 py-2 rounded-md bg-gray-100"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}
