import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";

export default function Card({ cover, title, description, item }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-martinique-600 dark:border-martinique-900 w-full h-full">
      <img
        className="rounded-t-lg"
        src={cover}
        alt="projet"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-martinique-50">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-martinique-50">{description} </p>

        <Link to={item}>
          <Button
            className="btn-transparent"
            color="transparent"
            text="En savoir plus"
            icon={<FaArrowRight className="w-5 h-5 ml-2 -mr-1" />}
          />
        </Link>
      </div>
    </div>
  );
}
