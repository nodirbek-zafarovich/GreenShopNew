import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import kaktus from "../../assets/Super.png";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export const Categories = () => {
  const [value1, setValue1] = React.useState([0, 77]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [priceRange, setPriceRange] = useState({ min: 39, max: 1230 });

  const getRandomPriceRange = () => {
    const minLimit = 10;
    const maxLimit = 1500;
    const newMin = Math.floor(Math.random() * (maxLimit - minLimit)) + minLimit;
    const newMax =
      Math.floor(Math.random() * (maxLimit - newMin)) + newMin + 50;
    return { min: newMin, max: newMax };
  };

  const handleFilter = () => {
    const newPriceRange = getRandomPriceRange();
    setPriceRange(newPriceRange);
  };

  return (
    <>
      <div className="container w-[310px] hidden sm:block">
        <h2 className="text-gray-700 font-bold text-xl">Categories</h2>

        <div className="flex space-x-[100px] ml-4 mt-3 w-full">
          <div>
            <ul className="leading-10">
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  House Plants
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Potter Plants
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Seeds
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Small Plants
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Big Plants
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Succulents
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Trerrariums
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Gardening
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="leading-10">
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (33)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (12)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (65)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (39)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (23)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (17)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (19)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (13)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-semibold font-semibold text-[#3D3D3D] hover:text-green-600">
                  (18)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-gray-700 font-bold text-xl mt-10">Price Range</h2>

        <Box sx={{ width: 230, marginTop: "20px", marginLeft: "24px" }}>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            sx={{ color: "green" }}
          />
        </Box>

        <p>
        Price:
        <span className="text-green-600 font-semibold">
          ${priceRange.min} - ${priceRange.max}
        </span>
      </p>
      <button
        className="w-[90px] h-[35px] bg-green-600 rounded-lg font-bold text-white mt-7 ml-4"
        onClick={handleFilter}
      >
        Filter
      </button>

        <h2 className="text-gray-700 font-bold text-xl mt-14">Size</h2>

        <div className="flex space-x-[140px] ml-4 mt-3">
          <div>
            <ul className="leading-10">
              <li>
                <NavLink className="hover:font-bold text-[#3D3D3D] font-bold hover:text-green-600">
                  Small
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-bold text-[#3D3D3D] font-bold hover:text-green-600">
                  Medium
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-bold text-[#3D3D3D] font-bold hover:text-green-600">
                  Large
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="leading-10">
              <li>
                <NavLink className="hover:font-bold font-bold text-[#3D3D3D] hover:text-green-600">
                  (119)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-bold font-bold text-[#3D3D3D] hover:text-green-600">
                  (86)
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:font-bold font-bold text-[#3D3D3D] hover:text-green-600">
                  (78)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative right-2 top-6">
          <img src={kaktus} alt="img" className="h-[410px] object-cover" />
        </div>
      </div>
    </>
  );
};
