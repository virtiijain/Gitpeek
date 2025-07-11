"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="sticky bottom-4 z-30 w-full flex justify-center px-4 sm:px-6">
      <div className="bg-indigo-600 text-white rounded-xl shadow-lg px-6 py-4 max-w-3xl w-full flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
        <p className="text-sm sm:text-base font-normal">
          Uncover GitHub profiles in seconds with{" "}
          <span className="font-semibold">GitPeek</span>.
        </p>
        <Link
          href="/"
          className="text-indigo-600 text-sm font-medium px-4 py-2 rounded-md bg-white hover:bg-gray-100 transition whitespace-nowrap"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
