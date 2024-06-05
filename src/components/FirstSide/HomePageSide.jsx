import img from "../../assets/iconcha.svg";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export const HomePageSide = () => {
  // Fetching product data from Redux store
  const productData = useSelector((state) => state.cart.items[0].data);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === productData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [productData]);

  return (
    <div className="container">
      <div
        className="carousel mt-20 object-cover"
        style={{
          backgroundImage: `url(${productData[currentImageIndex]?.image_url})`, // Using product image URL for background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="flex justify-between">
          <div className="mt-20 left-10 relative">
            <p className="sm:text-xl text-[11px] text-gray-800 font-normal">
              Welcome to GreenShop
            </p>
            <h1 className="sm:text-7xl text-[26px] font-bold text-gray-800 mt-2 sm:w-[60%] w-[40%]">
              Let’s Make A Better <span className="text-green-600">Planet</span>
            </h1>
            <p className="mt-5 text-gray-500 leading-6 w-[54%] text-[12px] sm:text-[14px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <button className="hidden sm:block mt-10 bg-green-600 w-[140px] h-[40px] rounded-lg text-white text-[14px]">
              SHOP NOW
            </button>

            <button className="block sm:hidden mt-8 relative right-6 w-[140px] h-[40px] rounded-lg text-green-600 text-[12px]">
              SHOP NOW
              <ArrowForwardOutlinedIcon className="text-green-600" />
            </button>
          </div>
        </div>

        <div className="mt-16 ml-[560px]">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};
