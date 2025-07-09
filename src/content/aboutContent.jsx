import {
  BarChart3,
  FolderGit2,
  Brain,
  CalendarDays,
  User,
  Briefcase,
  Users,
} from "lucide-react";

export const audience = [
  {
    icon: User,
    title: "Developers",
    description:
      "Showcase your GitHub portfolio, highlight your skills, and share a clean developer snapshot with peers or employers.",
  },
  {
    icon: Briefcase,
    title: "Recruiters",
    description:
      "Instantly evaluate a candidate’s GitHub activity, top projects, and real-world skills — no deep digging required.",
  },
  {
    icon: Users,
    title: "Students & Interns",
    description:
      "Build your presence, share your coding journey, and impress potential mentors or interviewers with clear, visual GitHub data.",
  },
];

export const features = [
  {
    title: "Instant GitHub Insights",
    description:
      "Get clean, fast, and focused views of any developer’s GitHub profile.",
    icon: BarChart3,
  },
  {
    title: "Top Repos & Languages",
    description:
      "See what matters most: starred repos, most-used languages, and code trends at a glance.",
    icon: FolderGit2,
  },
  {
    title: "Developer Type Detection",
    description:
      "We analyze the tech stack and behavior to guess whether someone is a frontend, backend, or full-stack dev.",
    icon: Brain,
  },
  {
    title: "Contribution Activity",
    description:
      "Check if someone is active, and explore their yearly commit heatmap visually and clearly.",
    icon: CalendarDays,
  },
];
