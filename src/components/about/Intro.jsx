import { FaGithub } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="relative min-h-screen w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 items-center h-full">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Peek into GitHub profiles <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              smarter and faster.
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            GitPeek helps developers, recruiters, and curious minds explore
            GitHub profiles with rich insights languages, activity, starred
            repos, and more.
          </p>
        </div>

        <div className="flex justify-center sm:justify-end">
          <div className="hidden lg:flex relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center shadow-2xl animate-pulse-slow">
            <FaGithub className="text-white text-5xl md:text-7xl" />
            <div className="absolute -inset-1 rounded-full bg-white dark:bg-gray-900 opacity-10 blur-lg" />
          </div>
          <div className="flex lg:hidden items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <FaGithub className="text-white dark:text-white text-3xl" />
            <span className="ml-2 text-white font-medium dark:text-gray-200">
              GitPeek
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
