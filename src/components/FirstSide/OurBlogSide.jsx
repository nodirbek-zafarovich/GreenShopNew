import React from "react";
import { Card } from "./Card";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";

export const OurBlogSide = () => {
  const cardData = [
    {
      title: "September 12  I Read in 6 minutes",
      content: "Cactus & Succulent Care Tips",
      about:
        "Cacti are succulents are easy care plants for any home or patio. ",
      imageUrl: img5,
    },
    {
      title: "September 13  I Read in 2 minutes",
      content: "Top 10 Succulents for Your Home",
      about: "Best in hanging baskets. Prefers medium to high light.",
      imageUrl: img6,
    },
    {
      title: "September 15  I Read in 3 minutes",
      content: "Cacti & Succulent Care Tips",
      about: "Cacti and succulents thrive in containers and because most are..",
      imageUrl: img7,
    },
    {
      title: "September 15  I Read in 2 minutes",
      content: "Best Houseplants Room by Room",
      about: "The benefits of houseplants are endless. In addition to..",
      imageUrl: img8,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="text-center mt-20">
          <h2 className="font-bold text-2xl text-gray-700">Our Blog Posts</h2>
          <p className="mt-3 text-gray-500">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>

        <div className="mt-10 flex space-x-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
              about={card.about}
            />
          ))}
        </div>
      </div>
    </>
  );
};
