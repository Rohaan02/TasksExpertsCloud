import React from "react";

const DifficultyIndicator = ({ difficulty }) => {
  const getCircleClass = (circle) => {
    switch (difficulty) {
      case "Easy":
        return circle === 1 ? "bg-green-400" : "bg-transparent border";
      case "Normal":
        return circle === 2 ? "bg-yellow-400" : "bg-transparent border";
      case "Hard":
        return circle === 3 ? "bg-red-400" : "bg-transparent border";
      default:
        return "bg-transparent border";
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="py-2 font-bold text-2xl">Difficulty:</span>
      <div
        className={`w-6 h-6 rounded-full border-2 ${getCircleClass(1)}`}
      ></div>
      <div
        className={`w-6 h-6 rounded-full border-2 ${getCircleClass(2)}`}
      ></div>
      <div
        className={`w-6 h-6 rounded-full border-2 ${getCircleClass(3)}`}
      ></div>
    </div>
  );
};

export default DifficultyIndicator;
