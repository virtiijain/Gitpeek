import {
  UserCircle,
  FolderGit2,
  Brain,
  Activity,
  CalendarDays,
  ServerCog,
} from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Clean Profile Overview",
      icon: <UserCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      desc: "Name, bio, avatar, followers, and real-time GitHub stats.",
    },
    {
      title: "Repository Stats",
      icon: (
        <FolderGit2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      ),
      desc: "Analyze stars, forks, most used languages, and top repos.",
    },
    {
      title: "Developer Type Detection",
      icon: <Brain className="w-6 h-6 text-green-600 dark:text-green-400" />,
      desc: "Guess the developer's role based on their tech stack.",
    },
    {
      title: "GitHub Activity Check",
      icon: (
        <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      ),
      desc: "Find out if the user is active this month or inactive.",
    },
    {
      title: "Contribution Visuals",
      icon: (
        <CalendarDays className="w-6 h-6 text-orange-500 dark:text-orange-300" />
      ),
      desc: "Contribution heatmap to track yearly activity at a glance.",
    },
    {
      title: "Real-Time API Integration",
      icon: <ServerCog className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
      desc: "Powered by GitHub’s live API for up-to-date user data.",
    },
  ];

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
