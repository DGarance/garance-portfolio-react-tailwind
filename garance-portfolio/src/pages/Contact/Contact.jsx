import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaRegEnvelope, FaRegUser, FaAddressCard } from "react-icons/fa";
import profil from "../../assets/Garance-profil.jpg";
import { Button } from "../../components";

export default function Contact() {
  return (
    <section className="py-8 min-h-screen bg-white dark:bg-martinique-950">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold capitalize dark:text-white lg:text-3xl">Parlons ensemble</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Dites-moi tout !</p>
            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm">Nom et Prénom</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:placeholder-martinique-50 dark:bg-martinique-900 dark:text-martinique-300 dark:border-martinique-700 focus:border-martinique-400 dark:focus:border-martinique-400 focus:ring-martinique-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm">Votre adresse mail</label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:placeholder-martinique-50 dark:bg-martinique-900 dark:text-martinique-300 dark:border-martinique-700 focus:border-martinique-400 dark:focus:border-martinique-400 focus:ring-martinique-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2  bg-white border border-gray-200 rounded-md dark:placeholder-martinique-50 dark:bg-martinique-900 dark:text-martinique-300 dark:border-martinique-700 focus:border-martinique-400 dark:focus:border-martinique-400 focus:ring-martinique-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"></textarea>
              </div>
              <Link mailto="mailto:garance.defrel@outlook.com">
                <Button
                  onClick={() => (window.location = " mailto:garance.defrel@outlook.com")}
                  className="btn-contact"
                  color="contact"
                  text="Contactez-moi"
                />
              </Link>
            </form>
          </div>
          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src={profil}
              alt=""
            />
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <FaRegUser className="w-6 h-6 mx-2 text-martinique-500 dark:text-martinique-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Garance Defrel</span>
              </p>
              <p className="flex items-start -mx-2">
                <FaAddressCard className="w-6 h-6 mx-2 text-martinique-500 dark:text-martinique-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Créteil - France</span>
              </p>
              <p className="flex items-start -mx-2">
                <FaRegEnvelope className="w-6 h-6 mx-2 text-martinique-500 dark:text-martinique-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">garance.defrel@outlook.com</span>
              </p>
            </div>
            <div className="mt-6 w-80 md:mt-8">
              <h3>Mes réseaux sociaux</h3>
              <div className="flex mt-4 -mx-1.5 ">
                <Link
                  className="icon-color"
                  href="#">
                  <FaLinkedin className="w-8 h-8" />
                </Link>
                <Link
                  className="icon-color"
                  href="#">
                  <FaGithub className="w-8 h-8" />
                </Link>
                <Link
                  className="icon-color"
                  href="#">
                  <FaTwitter className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
