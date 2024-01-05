import React, { useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <section>
      <nav className="flex justify-between p-5 cursor-pointer bg-custom-color relative">
        <h1
          className="font-burtons"
          onClick={() => {
            router.push("/");
          }}
        >
          Gaurav Sinha's work
        </h1>

        <div
          className={`lg:hidden cursor-pointer ${
            menuOpen ? "text-blue-500" : "text-white"
          }`}
          onClick={handleMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden cursor-pointer text-white absolute top-5 right-5"
            onClick={handleMenuClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
        <ul
          className={`lg:flex lg:items-center ${
            menuOpen
              ? "flex flex-col items-center absolute top-16 left-0 w-full z-40 bg-white"
              : "hidden"
          }`}
        >
          <li
            className={`mr-5 cursor-pointer ${
              menuOpen ? "border-t border-gray-300 pt-2" : ""
            }`}
          >
            <a
              onClick={() => handleNavLinkClick("/skills")}
              className="text-black"
            >
              Skills
            </a>
          </li>
          <li
            className={`mr-5 cursor-pointer ${
              menuOpen ? "border-t border-gray-300 pt-2" : ""
            }`}
          >
            <a
              onClick={() => handleNavLinkClick("/education")}
              className="text-black"
            >
              Qualifications
            </a>
          </li>
          <li
            className={`mr-5 cursor-pointer ${
              menuOpen ? "border-t border-gray-300 pt-2" : ""
            }`}
          >
            <a
              onClick={() => handleNavLinkClick("/workex")}
              className="text-black"
            >
              Work Experience
            </a>
          </li>
          <li
            className={`mr-5 cursor-pointer ${
              menuOpen ? "border-t border-gray-300 pt-2" : ""
            }`}
          >
            <a
              onClick={() => handleNavLinkClick("/projects")}
              className="text-black"
            >
              Software Projects
            </a>
          </li>
          <li
            className={`mr-5 cursor-pointer ${
              menuOpen ? "border-t border-gray-300 pt-2" : ""
            }`}
          >
            <a
              onClick={() => handleNavLinkClick("/contact")}
              className="text-black"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Index;
