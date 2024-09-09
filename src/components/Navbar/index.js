import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaSuitcase, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-custom-color">
      <nav className="w-full sm:w-3/4 mx-auto border border-gray-300 rounded-full px-4 sm:px-10 py-4">
        <div className="container flex justify-between items-center">
          {/* Hamburger icon for mobile - now on the left */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Links for larger screens, centered */}
          <div className="hidden sm:flex flex-1 justify-center">
            <ul className="flex space-x-10">
              <li>
                <Link
                  href="/"
                  className="text-black text-lg hover:text-gray-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black text-lg hover:text-gray-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-black text-lg hover:text-gray-500"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu, conditionally rendered */}
          {isOpen && (
            <ul className="sm:hidden absolute top-16 left-0 w-full bg-custom-color rounded-lg p-4 space-y-4">
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="text-black text-lg hover:text-gray-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="text-black text-lg hover:text-gray-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  onClick={toggleMenu}
                  className="text-black text-lg hover:text-gray-500"
                >
                  Resume
                </Link>
              </li>
            </ul>
          )}

          {/* LinkedIn and Resume icons, placed to the right on all screens */}
          <div className="flex justify-end space-x-4">
            <a
              href="https://www.linkedin.com/in/gaurav-sinha-89b57116a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="/Gaurav-Resume.pdf"
              download="Gaurav-Resume.pdf"
              className="text-gray-500 hover:text-green-600 transition duration-300"
            >
              <FaSuitcase size={20} />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
