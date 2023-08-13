import React from "react";
import { ProgressCircle } from "../../components";
import skillsData from "../../data/skills.json";

export default function Skills() {
  const frontendSkills = skillsData.filter((skill) => skill.category === "front-end");
  const backendSkills = skillsData.filter((skill) => skill.category === "backend");

  return (
    <section className="py-10 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text dark:text-white">Mes compétences</h1>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 text-center justify-center">
          <div className="text-center">
            {frontendSkills.map((skill, index) => (
              <ProgressCircle
                key={index}
                skillName={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
                darkTheme={true}
              />
            ))}
          </div>
          <div className="text-center">
            {backendSkills.map((skill, index) => (
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
