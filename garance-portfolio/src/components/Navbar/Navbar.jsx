import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex items-center justify-center flex-shrink-0 h-16 text mr-6 lg:mr-72">
        {/* Your logo or brand content */}
        <span className="text-xl font-semibold">Your Logo</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
          {/* Mobile menu button icons */}
        </button>
      </div>
      <div className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
        <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
          <Link
            to="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 lg:mt-0">
            First Link
          </Link>
          <Link
            to="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 lg:mt-0">
            Second Link
          </Link>
          <Link
            to="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 lg:mt-0">
            Third Link
          </Link>
          <Link
            to="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4 lg:mt-0">
            Fourth Link
          </Link>
        </div>
        <div className="flex items-center lg:mt-0">
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
