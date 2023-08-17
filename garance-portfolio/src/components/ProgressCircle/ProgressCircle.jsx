import React from "react";

const ProgressCircle = ({ skillName, percentage, icon }) => {
  const circumference = 20 * 2 * Math.PI;
  const dashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center">
        <div className="relative w-32 h-32">
          <svg className="absolute w-full h-full">
            <circle
              className="text-gray-300"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="50%"
              cy="50%"
            />
            <circle
              className="text-martinique-700"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="50%"
              cy="50%"
            />
          </svg>
        </div>
      </div>
      <div className="mr-2">
        <img
        
          src={icon}
          alt="icon"
        />
      </div>
      <div className="ml-2">
        <p className="text-lg font-medium text-gray-600">{skillName}</p>
      </div>
    </div>
  );
};

export default ProgressCircle;
