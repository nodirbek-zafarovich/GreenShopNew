import React from "react";

export const GardenCard = ({ title, content, imageUrl }) => {
  return (
    <div>
      <div className="w-full flex right-7 relative space-x-9">
        <div className="relative left-9">
          <img src={imageUrl} alt={title} className="ml-6" />
          <p className="font-bold mt-4 text-xl ml-2 text-gray-800">{title}</p>
          <h2 className="w-full text-gray-800 ml-2 mt-2">{content}</h2>
        </div>

        <div className="w-[1px] h-[187px] bg-gray-200 relative left-6"></div>
      </div>
    </div>
  );
};
