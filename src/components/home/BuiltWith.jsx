"use client";
import { stack } from "../../content/homeContent"

export default function BuiltWith() {
  return (
    <section className="max-w-7xl mx-auto py-15 px-6 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-3">Built With</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center mx-auto mb-10 text-sm sm:text-base">
        GitPeek is built with a modern tech stack including React, Next.js, and
        Tailwind CSS to deliver a sleek, responsive experience. It uses the
        GitHub API to bring you real-time, easy-to-read insights, making profile
        exploration intuitive and fast.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {stack.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Icon className="text-3xl sm:text-4xl md:text-5xl" />
            <span className="text-sm lg:text-base font-normal">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <a
          href="https://github.com/virtiijain"
          className="text-indigo-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>
    </section>
  );
}
