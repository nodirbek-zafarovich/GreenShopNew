import React from "react";
import EastIcon from "@mui/icons-material/East";

export const Card = ({ title, content, imageUrl, about }) => {
  return (
    <>
      <div className="w-full bg-gray-50">
        <img src={imageUrl} alt={title} className="w-full" />
        <p className="text-green-600 font-semibold text-center mt-2 relative right-[3px]">
          {title}
        </p>
        <h2 className="font-bold w-[60%] text-gray-800 ml-2 mt-1">{content}</h2>
        <p className="ml-2 mt-2 text-[#727272] font-normal">{about}</p>
        <div className="flex mt-2 ml-2">
          <p className="text-[#3D3D3D] font-semibold hover:text-green-600">
            Read More
          </p>
          <EastIcon className="w-[5px] h-[4px] text-[#3D3D3D] ml-2 mt-[1px] hover:text-green-600" />
        </div>
      </div>
    </>
  );
};
