import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { FiSend } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="dark:bg-martinique-950">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight xl:text-3xl dark:text-white">
          Découvrez mon portfolio et prenez contact avec moi !
        </h2>
        <div className="mt-6">
          <Link to="/portfolio">
            <Button
              className="btn-transparent"
              color="transparent"
              text="Mon Portfolio"
            />
          </Link>
          <Link to="/contact">
            <Button
              className="btn-hover items-center"
              color="hover"
              text="Contactez-moi"
              icon={<FiSend className="w-5 h-5 ml-2 -mr-1" />}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
