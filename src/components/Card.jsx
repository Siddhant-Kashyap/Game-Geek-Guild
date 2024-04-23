import React from "react";

const Card = (props) => {
  const handleClick = () => {
    // Handle click event here
    console.log("Card clicked!");
  };

  return (
    <div
      className="py-8 px-6 max-w-md h-3/5 bg-purple-400 bg-opacity-30 rounded-lg shadow-purpleshade backdrop-blur-sm backdrop-filter cursor-pointer "
      onClick={handleClick}
    >
      <h1 className="text-2xl font-kodemono text-center text-yellow-400 mb-5">{props.play}</h1>
      <p className="text-lg text-center text-white mb-8">{props.detail}</p>
    </div>
  );
};

export default Card;
