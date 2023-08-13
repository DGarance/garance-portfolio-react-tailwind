import React from "react";
import { FaAward, FaUserGraduate, FaRegFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Profil } from "../../components";

export default function About() {
  return (
    <section className="py-4">
      <span className="section__subtitle">Ma Présentation</span>
      <h2 className="section__title">À propos de moi</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Profil/>
        <div className="text-center md:text-left">
          <div className="about__info grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-2">
              <FaAward className="text-2xl mb-2" />
              <h3 className="text-base text-center">Formation</h3>
              <span className="text-xs text-center">Diplômée en Développement Web</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-2">
              <FaRegFileCode className="text-2xl mb-2" />
              <h3 className="text-base text-center">Projets réalisés</h3>
              <span className="text-xs text-center">6 et d'autres en cours</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-2">
              <FaUserGraduate className="bx bxs-graduation about__icon text-primary text-2xl mb-2" />
              <h3 className="text-base text-center">École</h3>
              <span className="text-xs text-center">OpenClassrooms</span>
            </div>
          </div>
          <p className="mb-4">
            Bonjour 👋! Je suis Garance Defrel, récemment diplômée en développement web Fullstack 🎉 et en quête
            d'opportunités pour approfondir mes compétences.
            <br />
            Au-delà de mes compétences solides en HTML, CSS et JavaScript, je me spécialise actuellement dans le
            framework ReactJS pour créer des interfaces utilisateur dynamiques et modernes.
            <br />
            Attirée par le développement front-end, j'adore donner vie aux maquettes en design UI/UX et les coder pour
            voir concrètement le résultat de mon travail.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
