import {
  UserCircle,
  FolderGit2,
  Brain,
  Activity,
  CalendarDays,
  ServerCog,
} from "lucide-react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const features = [
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

export const stack = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: FaReact, label: "React" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: FaGithub, label: "GitHub API" },
];

export const steps = [
  {
    keyword: "1. Search",
    title: "Enter GitHub Username",
    description: "Type a valid GitHub username to start discovering insights.",
  },
  {
    keyword: "2. Fetch",
    title: "Retrieve Data Instantly",
    description: "Using GitHub’s API, we pull in real-time profile data.",
  },
  {
    keyword: "3. Visualize",
    title: "Explore Developer Insights",
    description:
      "Dive into graphs, repo activity, languages, and stats effortlessly.",
  },
];
