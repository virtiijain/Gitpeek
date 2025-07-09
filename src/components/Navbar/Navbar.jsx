"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import DarkModeToggle from "./DarkModeToggle";
import MobileMenu from "./MobileMenu";
import useNavbar from "../../hooks/useNavbar";

export default function Navbar() {
  const { isOpen, toggleMenu, closeMenu } = useNavbar();

  return (
    <nav
      className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          >
            GitPeek
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              | GitHub Explorer
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <DarkModeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="transition-opacity duration-300 ease-in-out opacity-100">
          <MobileMenu onClose={closeMenu} />
        </div>
      )}
    </nav>
  );
}
