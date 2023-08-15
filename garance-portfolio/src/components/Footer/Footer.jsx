import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto dark:bg-martinique-900">
      <div className="text-center">
        <div>
          <Link
            className="flex-none text-xl font-semibold text-black dark:text-white"
            to="/"
            aria-label="Brand">
            Garance Defrel
          </Link>
        </div>
        <div class="mt-3">
          <p class="text-gray-500">garance.defrel@outlook.com</p>
          <p class="text-gray-500"> © 2023 Copyright Garance Defrel. Tous droit réservés.</p>
        </div>
        <div class="mt-3 space-x-2">
          <Link className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
            <FaGithub className="w-3.5 h-3.5"></FaGithub>
          </Link>
          <Link className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
            <FaLinkedin className="w-3.5 h-3.5"></FaLinkedin>
          </Link>{" "}
          <Link className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
            <FaTwitter className="w-3.5 h-3.5"></FaTwitter>
          </Link>
        </div>
      </div>
    </footer>
  );
}
