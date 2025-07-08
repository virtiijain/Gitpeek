import { User, Briefcase, Users } from "lucide-react";

export function Audience() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Who is GitPeek for?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          GitPeek is built for anyone who wants to explore GitHub profiles
          quickly and clearly whether you're showcasing your own work,
          reviewing candidates, or getting inspired.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <User className="w-6 lg:w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2">
              Developers
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Showcase your GitHub portfolio, highlight your skills, and share a
              clean developer snapshot with peers or employers.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Briefcase className="w-6 lg:w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2">
              Recruiters
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Instantly evaluate a candidate’s GitHub activity, top projects,
              and real-world skills — no deep digging required.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Users className="w-6 lg:w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2">
              Students & Interns
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Build your presence, share your coding journey, and impress
              potential mentors or interviewers with clear, visual GitHub data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}