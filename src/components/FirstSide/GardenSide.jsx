import React from "react";
import img9 from "../../assets/img9.svg";
import img10 from "../../assets/img10.svg";
import { GardenCard } from "./GardenCard";

export const GardenSide = () => {
  const cardGardenData = [
    {
      title: "Garden Care",
      content:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      imageUrl: img9,
    },
    {
      title: "Plant Renovation",
      content:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      imageUrl: img10,
    },
    {
      title: "Watering Graden",
      content:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      imageUrl: img9,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="mt-40 flex bg-gray-50">
          {cardGardenData.map((card, index) => (
            <GardenCard
              key={index}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
            />
          ))}
          <div className="relative left-24">
            <div>
              <h2 className="text-[22px] font-bold text-gray-800">
                Would you like to join newsletters?
              </h2>
            </div>

            <div className="flex mt-6">
              <label>
                <input
                  type="text"
                  placeholder="enter your email address..."
                  className="w-[324px] h-[40px] p-6 bg-white rounded-lg shadow-2xl"
                />
              </label>
              <button className="bg-green-600 rounded-lg text-white w-[85px] h-[45px] relative">
                Join
              </button>
            </div>

            <div className="mt-7">
              <p className="text-[#727272] w-[84%]">
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
