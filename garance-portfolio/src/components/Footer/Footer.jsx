import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 px-8 md:py-10 lg:py-8">
      <div className="max-w-4xl mx-auto flex items-center flex-col lg:flex-row lg:justify-between">
        <p className="text-white underline">garance.defrel@outlook.com</p>
        <div class="flex my-4 lg:order-3">
          <Link
            href="#"
            target="_blank"
            className="text-white p-2">
            <FaGithub></FaGithub>
          </Link>
          <Link
            href="https://www.linkedin.com/in/garance-defrel-3b269b279/"
            target="_blank"
            className="text-white p-2">
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-white p-2">
            <FaTwitter></FaTwitter>
          </Link>
        </div>
        <Link href="/" className="text-white text-base">© Copyright Garance Defrel. Tous droit réservés.</Link>
      </div>
    </footer>
  );
}
