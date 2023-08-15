import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import Tag from "../../components/Tag/Tag";

export default function Projects() {
  const { id } = useParams();
  const work = projects.find((work) => work.id === id);
  const tags = work && work.tags;

  if (!work) {
    return <div>Projet non trouvé</div>; // Gère le cas où le projet n'est pas trouvé
  }

  return (
    <div className="w-full px-6 py-12 mx-auto dark:bg-martinique-900">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">{work.title}</h1>
        <div className="mt-2 space-x-2"><img
          className="object-cover w-full rounded-lg h-96"
          src={work.cover}
          alt={work.title}
        />
          {tags.map((tags) => (
            <Tag
              key={tags}
              tag={tags}></Tag>
          ))}
        </div>
      </div>
      <div className="mt-8">
        
      </div>
      <div className="mt-8">
        <p className="text-gray-700 dark:text-gray-300">{work.description}</p>
      </div>
      <div className="mt-8 text-center">
        <a
          href={work.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline">
          Lien GitHub
        </a>
        <span className="mx-2 text-gray-500 dark:text-gray-300">|</span>
        <a
          href={work.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline">
          Lien Live
        </a>
      </div>
    </div>
  );
}
