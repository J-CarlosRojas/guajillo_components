import React from "react";

function ButtonSection({ text, textColor, textSize, background, onClick }) {
  return (
    <div
      className="relative w-screen flex items-center cursor-pointer"
      onClick={onClick}
    >
      <h1
        className={`font-bold uppercase leading-[.8] text-center ${textColor} ${textSize} ${background}`}
      >
        {text}
      </h1>
    </div>
  );
}

export default ButtonSection;
