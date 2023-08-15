import React from "react";
import { Link } from "react-router-dom";
import { Profil } from "../../components";
import { FaArrowRight } from "react-icons/fa";

export default function Introduction() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-5 sm:mt-10">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Profil className="w-full dark:hidden" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Présentation</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Après avoir travaillé pendant de nombreuses années dans le secteur des services, j'ai choisi de me
            réorienter vers le développement web. Ma formation auprès d'OpenClassrooms a renforcé mon intérêt pour le
            développement front-end. Pour en savoir davantage sur mon parcours, je vous invite à télécharger mon CV pour
            une vue plus approfondie.
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
            Mon CV
            <FaArrowRight className="ml-2 -mr-1 w-5 h-5"></FaArrowRight>
          </Link>
        </div>
      </div>
    </section>
  );
}
