import React from "react";
export default function Button({ text, color, icon }) {
  return (
    <button
      type="button"
      className={`btn-${color} my-6`}>
      {text}
      {icon}
    </button>
  );
}
