import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import { FaWifi, FaGithub, FaCheckCircle } from "react-icons/fa";
import { Tag, Button } from "../../components";

export default function Projects() {
  const params = useParams();
  const work = projects.find((work) => work.id === params.id);
  const tags = work && work.tags;
  const competences = work && work.competences;
  const listCompetences =
    work &&
    competences.map((item, index) => (
      <li
        className="flex gap-x-3"
        key={index}>
        <FaCheckCircle
          className="mt-1 h-5 w-5 flex-none text-martinique-600"
          aria-hidden="true"
        />{" "}
        {item}
      </li>
    ));

  if (!work) {
    return <div>Projet non trouvé</div>; // Gère le cas où le projet n'est pas trouvé
  }

  return (
    work && (
      <div
        key={params.id}
        className="w-full px-6 py-12 mx-auto dark:bg-martinique-900">
        <div className="relative isolate overflow-hidden bg-martinique-50 dark:bg-martinique-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-martinique-600">
                    Parcours Développeur Web OpenClassrooms
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{work.title}</h1>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight ">Contexte</h2>
                  <p className="mt-6 text-xl leading-8 text-gray-700">{work.contexte}</p>
                  <div>
                    {tags.map((tags) => (
                      <Tag
                        key={tags}
                        tags={tags}></Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-full h-full max-w-full rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 sm:w-full"
                src={work.brand}
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <h2 className="mt-8 text-2xl font-bold tracking-tight">Objectifs d'apprentissage</h2>
                  <p>{work.apprentissage}</p>
                  <h2 className="mt-8 text-2xl font-bold tracking-tight">Compétences évaluées</h2>
                  <ul className="mt-8 space-y-8 text-gray-600">{listCompetences}</ul>
                  <h2 className="mt-8 text-2xl font-bold tracking-tight">Bilan</h2>
                  <p className="mt-8">{work.bilan}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to={work.github}
              target="_blank"
              rel="noopener noreferrer">
              <Button
                className="btn-hover hover:underline"
                color="hover"
                text="Github"
                icon={<FaGithub className="w-5 h-5 ml-2 -mr-1" />}
              />
            </Link>

            <Link
              to={work.live}
              target="_blank"
              rel="noopener noreferrer">
              <Button
                className="btn-hover hover:underline"
                color="hover"
                text="Live"
                icon={<FaWifi className="w-5 h-5 ml-2 -mr-1" />}
              />
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
