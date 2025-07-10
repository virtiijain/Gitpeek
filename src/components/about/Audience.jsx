import { audience } from "../../content/aboutContent";

export default function Audience() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Who is GitPeek for?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          GitPeek is built for anyone who wants to explore GitHub profiles
          quickly and clearly whether you're showcasing your own work, reviewing
          candidates, or getting inspired.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {audience.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <Icon className="w-6 lg:w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
