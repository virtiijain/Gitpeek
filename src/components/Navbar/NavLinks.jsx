import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function NavLinks() {
  return (
    <>
      <Link
        href="/"
        className="text-gray-800 dark:text-gray-200 hover:text-indigo-700"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-gray-800 dark:text-gray-200 hover:text-indigo-700"
      >
        About
      </Link>
      <a
        href="https://github.com/virtiijain/Gitpeek"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 dark:text-gray-300 hover:text-indigo-700"
      >
        <span>GitHub</span>
        <ExternalLink size={16} />
      </a>
    </>
  );
}
