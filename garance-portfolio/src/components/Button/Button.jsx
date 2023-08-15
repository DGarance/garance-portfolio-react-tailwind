import React from "react";
import { Link } from "react-router-dom";

export default function Button({text,color}) {
  return (
    <button
      type="button"
      className={`btn-${color}`}>
      {text}
    </button>
  );
}