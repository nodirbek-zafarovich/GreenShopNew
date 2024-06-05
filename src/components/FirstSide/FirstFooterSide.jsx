import React from "react";
import logo from "../../assets/img1.svg";
import location from "../../assets/Location.svg";
import message from "../../assets/Message.svg";
import Calling from "../../assets/Calling.svg";
import { NavLink } from "react-router-dom";

export const FirstFooterSide = () => {
  return (
    <>
      <div className="container">
        <div className="h-[88px] mt-10 bg-blue-50 border border-blue-100">
          <div className="flex space-x-20 relative bottom-1 left-4">
            <div className="flex">
              <img src={logo} alt="img" className="mt-5" />
              <h1 className="font-bold text-green-600 mt-10 ml-2">GREENSHOP</h1>
            </div>

            <div className="flex mt-7 space-x-3">
              <div className="mt-3">
                <img src={location} alt="img" />
              </div>
              <li className="list-none">
                <NavLink className="text-[#3D3D3D]">
                  70 West Buckingham Ave. <br /> Farmingdale, NY 11735
                </NavLink>
              </li>
            </div>

            <div className="flex mt-7 space-x-3">
              <div className="mt-1">
                <img src={message} alt="img" />
              </div>
              <li className="list-none">
                <NavLink className="text-[#3D3D3D]">
                  contact@greenshop.com
                </NavLink>
              </li>
            </div>

            <div className="flex mt-7 space-x-3">
              <div className="mt-1">
                <img src={Calling} alt="img" />
              </div>
              <li className="list-none">
                <NavLink className="text-[#3D3D3D]">+88 01911 717 490</NavLink>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
