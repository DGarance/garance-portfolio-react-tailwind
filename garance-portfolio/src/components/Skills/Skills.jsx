import React from "react";
import { Progress } from "..";
import skillsData from "../../data/skills.json";

export default function Skills() {
  const frontendSkills = skillsData.filter((skill) => skill.category === "front-end");
  const backendSkills = skillsData.filter((skill) => skill.category === "backend");

  return (
    <div className="py-10 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text dark:text-black">Mes compétences</h1>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 text-center">
          <div className="text-center">
            {frontendSkills.map((skill, index) => (
              <Progress
                key={index}
                skillName={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
                darkTheme={true}
              />
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white dark:text-black mb-4">Back-end</h2>
            {backendSkills.map((skill, index) => (
              <Progress
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
    </div>
  );
}
