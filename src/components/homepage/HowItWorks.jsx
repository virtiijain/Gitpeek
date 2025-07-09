import { steps } from "../../content/homeContent";

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-5">
            How GitPeek Works
          </h2>
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            A simple, efficient 3-step process that helps you get valuable
            GitHub insights within seconds. Just clean
            data.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start border-l-4 border-indigo-600 pl-4"
            >
              <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-1">
                {step.keyword}
              </span>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-300 mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
