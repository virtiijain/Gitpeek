"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

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
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900">
          <Link href="/" className="block text-gray-800 dark:text-gray-200">
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-800 dark:text-gray-200"
          >
            About
          </Link>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              className="text-gray-600 dark:text-gray-300"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
