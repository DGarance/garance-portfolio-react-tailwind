import React from "react";

export default function CardIntro({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full h-full">
      <i className="text-2xl my-3 text-martinique-600">{icon}</i>
      <h3 className="mb-2 text-base text-center font-bold tracking-tight text-martinique-900 dark:text-white">{title}</h3>
      <span className="mb-2 text-xs text-center text-gray-700 dark:text-gray-400">{subtitle} </span>
    </div>
  );
}
