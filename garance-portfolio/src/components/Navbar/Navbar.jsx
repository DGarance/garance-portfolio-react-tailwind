import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow fixed top-0 w-full z-50 lg:flex lg:justify-around">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <span className="text-xl font-semibold dark:text-white">Garance Defrel</span>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400  dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`w-full ${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto`}>
        <div className="text-center lg:text-left text-sm lg:flex-grow lg:flex lg:justify-center  dark:text-white">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4">
            Accueil
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 ">
            A Propos de moi
          </Link>
          <Link
            to="/portfolio"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 ">
            Projets
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 ">
            Contact
          </Link>
        </div>
        <div className="flex lg:flex-shrink-0 justify-center lg:justify-start items-center mt-4 lg:mt-0">
          <img
            className="w-6 h-6 self-center"
            onClick={props.toggleDarkMode}
            src={props.darkMode ? Sun : Moon}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}
