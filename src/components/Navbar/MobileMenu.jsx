import Link from "next/link";
import { ExternalLink } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function MobileMenu({ onClose }) {
  return (
    <nav
      role="menu"
      aria-label="Mobile navigation"
      className="md:hidden absolute top-16 inset-x-0 z-40 bg-white dark:bg-gray-900 px-4 pb-6 pt-4 shadow-lg space-y-3"
    >
      <Link
        href="/"
        className="block text-gray-800 dark:text-gray-200"
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="block text-gray-800 dark:text-gray-200"
        onClick={onClose}
      >
        About
      </Link>

      <div className="flex justify-between items-center">
        <a
          href="https://github.com/virtiijain/Gitpeek"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 dark:text-gray-300 hover:text-indigo-700 transition-colors duration-200"
        >
          <span>GitHub</span>
          <ExternalLink size={14} />
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
