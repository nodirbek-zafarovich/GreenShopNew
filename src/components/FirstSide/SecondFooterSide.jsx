import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import twitter from "../../assets/Twitter.svg";
import link from "../../assets/Linkedin.svg";
import union from "../../assets/Union.svg";
import payme from "../../assets/payme.svg";

export const SecondFooterSide = () => {
  return (
    <>
      <div className="container">
        <div className="flex space-x-[160px] mt-8 ml-5">
          <div>
            <ul className="leading-9">
              <li>
                <NavLink className="font-bold text-gray-700 hover:text-gray-500">
                  My Account
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  My Account
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Our stores
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Specials
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="leading-9">
              <li>
                <NavLink className="font-bold text-gray-700 hover:text-gray-500">
                  Help & Guide
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  How to Buy
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Shipping & Delivery
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Product Policy
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  How to Return
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="leading-9">
              <li>
                <NavLink className="font-bold text-gray-700 hover:text-gray-500">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  House Plants
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Potter Plants
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Seeds
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Small Plants
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 hover:text-gray-950">
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="relative left-7">
            <ul className="leading-9">
              <li>
                <NavLink className="font-bold text-gray-700 hover:text-gray-500">
                  Social Media
                </NavLink>
              </li>

              <div className="flex space-x-2 mt-3">
                <div className="w-[30px] h-[30px] border border-green-200 rounded-lg">
                  <img src={facebook} alt="img" className="pt-[6px] pl-[9px]" />
                </div>
                <div className="w-[30px] h-[30px] border border-green-200 rounded-lg">
                  <img
                    src={instagram}
                    alt="img"
                    className="pt-[6px] pl-[6px]"
                  />
                </div>
                <div className="w-[30px] h-[30px] border border-green-200 rounded-lg">
                  <img src={twitter} alt="img" className="pt-[8px] pl-[6px]" />
                </div>
                <div className="w-[30px] h-[30px] border border-green-200 rounded-lg">
                  <img src={link} alt="img" className="pt-[6px] pl-[6px]" />
                </div>
                <div className="w-[30px] h-[30px] border border-green-200 rounded-lg">
                  <img src={union} alt="img" className="pt-[8px] pl-[5px]" />
                </div>
              </div>

              <li className="mt-5">
                <NavLink className="font-bold text-gray-700 hover:text-gray-500">
                  We accept
                </NavLink>
              </li>

              <div className="mt-3">
                <img src={payme} alt="img" />
              </div>
            </ul>
          </div>
        </div>
        <div className="w-[1160px] h-[1px] bg-gray-300 mt-7"></div>
        <div>
          <ul>
            <li>
              <NavLink className="text-[#3D3D3D] left-[470px] relative top-4 hover:text-gray-500">
                © 2021 GreenShop. All Rights Reserved.
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
