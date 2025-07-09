import { features } from "../../content/homeContent";

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
          What GitPeek Offers
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          GitPeek delivers smart, clean GitHub profile insights from developer
          type detection to contribution activity, with zero clutter.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition bg-white/80 dark:bg-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              {feature.icon}
              <h3 className="text-base lg:text-lg font-semibold">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
