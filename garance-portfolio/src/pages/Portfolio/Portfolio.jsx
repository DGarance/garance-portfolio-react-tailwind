import React from "react";
import projects from "../../data/projects.json";
import Card from "../../components/Card/Card";

export default function Portfolio() {
  return (
    <section className="my-16 bg-martinique-50 dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Portfolio</h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((item, index) => (
                <div key={index}>
                  <Card
                    cover={item.cover}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
