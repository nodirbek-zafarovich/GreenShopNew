import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SecondCarousel = () => {
  const items = useSelector((state) => state.cart.items[0].data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="mt-2 relative right-5">
          <div className="w-[1100px] h-[1px] bg-slate-100"></div>
          <div className="relative left-6 top-3">
            <Slider {...settings}>
              {items.map((item) => (
                <div className="mt-10" key={item.id}>
                  <img
                    src={item.image_url}
                    alt="img"
                    className="w-[250px] h-[250px] object-cover"
                  />
                  <div className="mt-6">
                    <p className="text-[#3D3D3D] text-xl">
                      {item.scientific_name}
                    </p>
                    <h2 className="text-[#46A358] font-bold">
                      ${item.genus_id}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
