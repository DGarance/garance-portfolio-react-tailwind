import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/programmer.svg";
import { Button } from "../../components";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 mt-5 sm:mt-10">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl">
            Bonjour 👋! <br /> Garance Defrel
          </p>
          <h1 className="max-w-2xl mb-4 text-2xl font-bold md:text-4xl xl:text-5xl dark:text-white">
            Développeuse Web Fullstack
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            En quêtes de nouvelles opprtunités en développement Front-end
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:text-white">
            Mon CV
            <FaArrowRight className="w-5 h-5 ml-2 -mr-1 font-light"></FaArrowRight>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Mon Portfolio
          </Link>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={heroImg}
            alt="hero banner"
          />
        </div>
        <Button>Contacter moi</Button>
      </div>
    </section>
  );
}
