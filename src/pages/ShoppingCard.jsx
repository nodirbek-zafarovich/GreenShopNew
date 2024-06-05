import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { SecondShop } from "../components/SecondShop";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../products/productData";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import face from "../assets/face.svg";
import twit from "../assets/twit.svg";
import link from "../assets/link.svg";
import mes from "../assets/mes.svg";
import { SecondCarousel } from "./SecondCarousel";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

export const ShoppingCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [attr, setAttr ] = useState(0);

  const Increase=()=>{
    setAttr(attr + 1)
  }

  const Decrease = () => {
    setAttr(attr - 1);
  };

  // Fetch the specific item data based on the id
  const selectedItem = productData.find((item) =>
    item.data.some((data) => data.id === parseInt(id)),
  );
  // Parse the selected item's data
  const {
    common_name,
    scientific_name,
    image_url,
    genus,
    genus_id,
    family,
    synonyms,
    bibliography,
    slug,
    lorem,
  } = selectedItem.data.find((data) => data.id === parseInt(id));

  return (
    <>
      <div className="container">
        <div className="mt-[106px]">
          <div className="ml-4 sm:right-4 relative">
            <NavLink to="/" className="text-[#3D3D3D]  hover:font-bold">
              Home
            </NavLink>
            <NavLink to="/shop" className="text-[#3D3D3D] hover:font-bold">
              / Shop
            </NavLink>
          </div>

          <div className="sm:flex block justify-between">
            <div className="hidden sm:block">
              <div>
                <img
                  src={image_url}
                  alt="img"
                  className="w-[100px] h-[100px] mt-4 object-cover"
                />
              </div>
              <div>
                <img
                  src={image_url}
                  alt="img"
                  className="w-[100px] h-[100px] mt-4 object-cover"
                />
              </div>
              <div>
                <img
                  src={image_url}
                  alt="img"
                  className="w-[100px] h-[100px] mt-4 object-cover"
                />
              </div>
              <div>
                <img
                  src={image_url}
                  alt="img"
                  className="w-[100px] h-[100px] mt-4 object-cover"
                />
              </div>
            </div>

            <div className="mt-12 ml-5">
              <div className="sm:hidden block bg-white w-[35px] h-[35px] relative top-16 left-3 rounded-[50%] pt-1 pl-1">
                <NavLink to="/">
                  <ArrowBackIosOutlinedIcon className="text-[#46A358]" />
                </NavLink>
              </div>
              <img
                src={image_url}
                alt="Plant"
                className="sm:w-[404px] w-[356px] h-[356px] sm:h-[404px] object-cover"
              />
              <div className="sm:hidden block bg-white w-[35px] h-[35px] relative bottom-80 left-72 rounded-[50%] pt-1 pl-1">
                <FavoriteBorderOutlinedIcon className="text-[#46A358]" />
              </div>
            </div>

            <div className="relative right-8 top-4 hidden sm:block">
              <SearchIcon className="text-[#3D3D3D]" />
            </div>

            <div className="mt-1 w-[512px] ml-6">
              <h1 className="font-bold text-[#3D3D3D] sm:text-2xl text-[20px]">
                {common_name}
              </h1>
              <div className="flex space-x-60 mt-3 w-[110%]">
                <h4 className="text-[#46A358] font-semibold text-[18px] hidden sm:block">
                  $ {genus_id}
                </h4>
                <div className="flex space-x-2 sm:mt-[4px] relative bottom-8 sm:top-1">
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <p className="text-[15px] text-[#3D3D3D] relative bottom-1">
                    {bibliography}
                  </p>
                </div>
              </div>

              <div className="w-[510px] h-[1px] bg-green-100 mt-2"></div>

              <div>
                <h2 className="font-semibold text-[#3D3D3D] mt-3 hidden sm:block">
                  Short Description:
                </h2>
                <p className="text-[#727272] mt-2">{lorem}</p>
                <h2 className="font-semibold text-[#3D3D3D] mt-5">Size:</h2>

                <div className="flex space-x-3 mt-3">
                  <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                    S
                  </div>
                  <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                    M
                  </div>
                  <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                    L
                  </div>
                  <div className="border-[#727272] hover:border-[#46A358] text-[#727272] hover:text-[#46A358] w-[28px] h-[28px] border-[1px] rounded-[50%] text-center font-bold">
                    XL
                  </div>
                </div>

                <div className="leading-7 mt-5 block sm:hidden">
                  <p className="text-[#727272]">
                    <span className="text-slate-400">SKU:</span> {id}
                  </p>
                  <p className="text-[#727272]">
                    <span className="text-slate-400">Categories:</span>
                    {scientific_name}
                  </p>
                  <p className="text-[#727272]">
                    <span className="text-slate-400">Tags:</span> {slug}
                  </p>
                </div>

                <div className="flex space-x-7 mt-7">
                  <div>
                    <button
                      onClick={Decrease}
                      className="sm:w-[33px] w-[12px] h-[16px] sm:h-[38px] pb-2  sm:bg-[#46A358] bg-[#A5A5A5] text-[10px] sm:text-2xl text-white rounded-[50%] text-center"
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <p className="sm:text-xl text-[18px] text-[#3D3D3D] mt-1 sm:mt-2">{attr}</p>
                  </div>
                  <div>
                    <button
                      onClick={Increase}
                      className="sm:w-[33px] w-[12px] h-[16px] sm:h-[38px] pb-2 sm:bg-[#46A358] bg-[#A5A5A5] text-[10px] sm:text-2xl text-white rounded-[50%] text-center"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex space-x-3">
                    <div>
                      <button className="bg-[#46A358] text-white w-[130px] h-[40px] sm:rounded-lg rounded-[40px]">
                        BUY NOW
                      </button>
                    </div>

                    <div>
                      <button className="border-[#46A358] hidden sm:block border-[1px] text-[#46A358] text-[14px] w-[130px] h-[40px] rounded-lg font-semibold">
                        ADD TO CART
                      </button>
                    </div>

                    <div className="w-[40px] hidden sm:block h-[40px] border-[#46A358] border-[1px] rounded-lg">
                      <FavoriteBorderIcon className="text-[#46A358] mt-2 ml-[6px]" />
                    </div>
                  </div>
                </div>

                <div className="leading-7 mt-5 sm:block hidden">
                  <p className="text-[#727272]">
                    <span className="text-slate-400">SKU:</span> {id}
                  </p>
                  <p className="text-[#727272]">
                    <span className="text-slate-400">Categories:</span>
                    {scientific_name}
                  </p>
                  <p className="text-[#727272]">
                    <span className="text-slate-400">Tags:</span> {slug}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="flex mt-3">
                    <div>
                      <h2 className="text-[#3D3D3D] font-semibold">
                        Share this products:
                      </h2>
                    </div>
                    <div className="flex space-x-5 ml-4 mt-1">
                      <div>
                        <img src={face} alt="img" />
                      </div>
                      <div className="mt-[2px]">
                        <img src={twit} alt="img" />
                      </div>
                      <div>
                        <img src={link} alt="img" />
                      </div>
                      <div>
                        <img src={mes} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <p>Synonyms: {synonyms.join(", ")}</p> */}
          </div>
          <div className="hidden sm:block">
            <SecondShop />
          </div>
          <div className="mt-24 hidden sm:block">
            <h2 className="text-[#46A358] text-[17px] font-semibold">
              Releted Products
            </h2>
            <SecondCarousel />
          </div>
        </div>
      </div>
    </>
  );
};
