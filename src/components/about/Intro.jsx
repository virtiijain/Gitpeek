import { FaGithub } from "react-icons/fa";

export function Intro() {
  return (
    <section className="relative w-full px-6 py-24 dark:from-gray-900 dark:to-black">
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs rounded-full uppercase tracking-wider font-semibold mb-4">
            <FaGithub className="text-base" />
            Built for Developers
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Peek into GitHub profiles <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              smarter and faster.
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            Git Peek helps developers, recruiters, and curious minds explore
            GitHub profiles with rich insights languages, activity, starred
            repos, and more.
          </p>
        </div>

        {/* Right Side Icon / Visual */}
        <div className="flex justify-center sm:justify-end">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl animate-pulse-slow">
            <FaGithub className="text-white text-5xl md:text-7xl" />
            <div className="absolute -inset-1 rounded-full bg-white dark:bg-gray-900 opacity-10 blur-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
