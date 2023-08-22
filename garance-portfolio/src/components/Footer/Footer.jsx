import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-martinique-100 dark:bg-martinique-400">
      <div className="text-center">
        <div>
          <Link
            className="flex-none text-xl font-semibold text-black dark:text-white"
            to="/"
            aria-label="Brand">
            Garance Defrel
          </Link>
        </div>
        <div className="mt-3">
          <p className="text-gray-500">garance.defrel@outlook.com</p>
          <p className="text-gray-500"> © 2023 Copyright Garance Defrel. Tous droit réservés.</p>
        </div>
        <div className="mt-3 space-x-2">
          <Link
            to="https://github.com/DGarance"
            className="icon-color">
            <FaGithub className="w-6 h-6"></FaGithub>
          </Link>
          <Link
            to="https://www.linkedin.com/in/garance-defrel-3b269b279/"
            className="icon-color">
            <FaLinkedin className="w-6 h-6"></FaLinkedin>
          </Link>{" "}
          <Link
            to="https://twitter.com/Akane9721"
            className="icon-color">
            <FaTwitter className="w-6 h-6"></FaTwitter>
          </Link>
        </div>
      </div>
    </footer>
  );
}
