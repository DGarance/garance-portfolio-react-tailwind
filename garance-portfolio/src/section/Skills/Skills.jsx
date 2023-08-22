import React from "react";
import { ProgressCircle } from "../../components";
import skillsData from "../../data/skills.json";

export default function Skills() {
  return (
    <section className="py-10 dark:bg-martinique-950">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text dark:text-white">Mes compétences</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-2 place-self-center sm:grid-cols-none">
            {skillsData.map((skill, index) => (
              <ProgressCircle
                key={index}
                skillName={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
                darkTheme={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
