import React from "react";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Portfolio</h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((item, index) => (
                <div
                  key={index}
                  id={item.category}>
                  <img
                    className="object-cover w-full rounded-lg h-96"
                    src={item.cover}
                    alt={item.title}
                  />
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{item.title}</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">{item.tags}</p>
                  <div className="mt-2 space-x-2">
                    <Link
                      to={`/projects/${item.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-300 hover:underline">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
