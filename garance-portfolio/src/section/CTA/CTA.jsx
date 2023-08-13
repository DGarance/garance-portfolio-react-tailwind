import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Découvrez mon portfolio et prenez contact avec moi !
        </h2>
        <div class="mt-6">
          <Link
            href="#"
            class="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <span class="mx-2">Mon Portfolio</span>
          </Link>

          <Link
            href="#"
            class="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <span class="mx-2">Contactez-moi</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
