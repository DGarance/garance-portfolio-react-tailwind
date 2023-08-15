import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/programmer.svg";
import { Button } from "../../components";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="bg-martinique-50 dark:bg-martinique-900 pt-24 mx-auto px-4 items-center lg:flex md:px-8 text-center">
      <div className="space-y-4 flex-1 text-center sm:text-center">
        <p className="dark:text-martinique-50">Bonjour 👋! je suis</p>
        <h2 className="dark:text-martinique-50">Garance Defrel,</h2>
        <h1 className="font-bold text-4xl xl:text-5xl dark:text-martinique-50 ">
          Développeuse Web
          <span className="text-martinique-900 dark:text-martinique-300"> Fullstack</span>
        </h1>
        <p className="text-gray-600 max-w-xl leading-relaxed sm:mx-auto ">
          En quêtes de nouvelles opportunités en développement Front-end
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-y-0 lg:justify-start">
          <Button
            className="btn-blue items-center"
            color="blue"
            text="Mon Cv"
            icon={<FiArrowRight className="w-5 h-5 ml-2 -mr-1" />}></Button>
          <Button
            className="btn-transparent"
            color="transparent"
            text="Mon Portfolio"
          />
        </div>
        <div className="flex-1 items-center mt-7 lg:mt-0 lg:ml-3">
          <img
            className="w-96 h-96 mx-auto sm:w-10/12"
            src={heroImg}
            alt="hero banner"
          />
        </div>
      </div>
    </section>
  );
}
