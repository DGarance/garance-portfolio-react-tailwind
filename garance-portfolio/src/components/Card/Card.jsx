import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";

export default function Card({ cover, title, description, item }) {
  return (
    <div className="card-wrapper">
      <img
        className="card-image"
        src={cover}
        alt="projet"
      />
      <div className="p-5">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description} </p>
        <Button
          to={item}
          color="transparent"
          text="En savoir plus"
          icon={<FaArrowRight className="w-5 h-5 ml-2 -mr-1" />}
        />
      </div>
    </div>
  );
}
