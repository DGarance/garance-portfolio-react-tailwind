import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, color, icon, margin,to }) {
  return (
    <Link
      to={to}
      className={`btn-${color} ${margin}`}>
      {text}
      {icon}
    </Link>
  );
}
