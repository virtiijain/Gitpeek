"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun, ExternalLink } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 transition-all duration-300"
          >
            GitPeek
            <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide">
              | GitHub Explorer
            </span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
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
              className="inline-flex items-center gap-1 dark:text-gray-300 hover:text-indigo-700 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink size={16} strokeWidth={2} />
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-40 bg-white dark:bg-gray-900 px-4 pb-6 pt-4 shadow-lg space-y-3">
          <Link
            href="/"
            className="block text-gray-800 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-800 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/virtiijain/Gitpeek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 dark:text-gray-300 hover:text-indigo-700 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink size={14} strokeWidth={2} />
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
