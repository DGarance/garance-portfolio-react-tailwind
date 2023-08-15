import React from "react";
import { Link } from "react-router-dom";
import profil from "../../assets/Garance-profil.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function Introduction() {
  return (
    <section className=" dark:bg-martinique-900">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src={profil}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100 dark:bg-martinique-200">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 "></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">Présentation</h2>

              <p className="mt-4 text-gray-600">
                Après avoir travaillé pendant de nombreuses années dans le secteur des services, j'ai choisi de me
                réorienter vers le développement web. Ma formation auprès d'OpenClassrooms a renforcé mon intérêt pour
                le développement front-end. Pour en savoir davantage sur mon parcours, je vous invite à télécharger mon
                CV pour une vue plus approfondie.
              </p>

              <Link
                href="#"
                className="inline-flex items-center text-white bg-martinique-700 hover:bg-martinique-800 focus:ring-4 focus:ring-martinique-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-martinique-900">
                Mon CV
                <FaArrowRight className="ml-2 -mr-1 w-5 h-5"></FaArrowRight>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
