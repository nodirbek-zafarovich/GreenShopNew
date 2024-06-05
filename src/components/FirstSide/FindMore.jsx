import React from "react";
import flower1 from "../../assets/flower1.png";
import flower2 from "../../assets/flower2.png";
import flower from "../../assets/flower.png";
import EastIcon from "@mui/icons-material/East";

export const FindMore = () => {
  return (
    <>
      <div className="container">
        <div className="flex mt-20">
          <div className="flex">
            <div className="flex">
              {/* <img src={flower} alt="img" className="relative right-40" /> */}
              <img
                src={flower1}
                alt="img"
                className="relative w-[342px] h-[292px]"
              />
            </div>

            <div className="relative right-[60px] top-16">
              <h2 className="font-bold text-gray-700 text-2xl text-right relative ">
                Summer cactus <br /> & succulents
              </h2>
              <p className="text-right w-[89%] text-[#727272] mt-3 left-10 relative ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <button className="w-[140px] left-[215px] relative h-[40px] mt-8 bg-green-600 rounded-lg text-white ">
                Find More
                <EastIcon className="ml-2" />
              </button>
            </div>
          </div>

          <div className="flex">
            <div className="flex">
              {/* <img src={flower} alt="img" className="relative right-[90px]" /> */}
              <img
                src={flower2}
                alt="img"
                className="relative left-5 w-[362px] h-[292px]"
              />
            </div>

            <div className="relative top-16 right-6">
              <h2 className="font-bold text-gray-700 text-2xl text-right relative ">
                Styling Trends <br /> & much more
              </h2>
              <p className="text-right text-[#727272] w-[89%] mt-3 left-10 relative">
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <button className="w-[140px] relative left-[150px] h-[40px] mt-8 ml-16 bg-green-600 rounded-lg text-white ">
                Find More
                <EastIcon className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
