// Import necessary modules
import React, { useState } from "react";
import img1 from "../../assets/img1.svg";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import { Login } from "../Login/Login";
import CloseIcon from "@mui/icons-material/Close";
import {SearchPhone} from "./SearchPhone";

// Style for modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 630,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const Header = () => {
  const { list } = useSelector((state) => state.cart);
  console.log(list);

  // State to control modal open/close
  const [open, setOpen] = useState(false);

  // Function to handle modal open
  const handleOpen = () => setOpen(true);

  // Function to handle modal close
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="container fixed top-0 w-full z-10 bg-white">
        <div className="flex justify-between">
          <NavLink to="/ " className="hidden sm:block">
            <div className="flex">
              <img src={img1} alt="img" className="mt-6" />
              <h1 className="font-bold text-green-600 mt-8 ml-2">GREENSHOP</h1>
            </div>
          </NavLink>

          <div className="mt-8 hidden sm:block">
            <ul className="flex space-x-12">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-[#8bd199] text-[#3D3D3D] font-semibold pb-3 border-b-1 hover:border-b-[#46A358] hover:border-b-4"
                >
                  Home
                </NavLink>

                {/* <div className="w-[50px] h-[2px] relative top-3 bg-green-900"></div> */}
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="hover:text-[#8bd199] text-[#3D3D3D] pb-3 border-b-1 font-semibold hover:border-b-[#46A358] hover:border-b-4"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/plant"
                  className="hover:text-[#8bd199] text-[#3D3D3D] pb-3 border-b-1 font-semibold hover:border-b-[#46A358] hover:border-b-4"
                >
                  Plant Care
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className="hover:text-[#8bd199] text-[#3D3D3D] pb-3 border-b-1 font-semibold hover:border-b-[#46A358] hover:border-b-4"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Navigation links */}

          {/* Icons */}
          <div className="flex space-x-7 mt-6 relative right-20">
            {/* Search icon */}
            <div className="hidden sm:block">
              <SearchIcon />
            </div>
            {/* Cart icon */}
            <div>
              <NavLink to="/shop" className="hidden sm:block">
                <LocalGroceryStoreOutlinedIcon />
              </NavLink>
              <div className="w-[15px] hidden sm:block h-[13px] rounded-[50%] bg-green-600 relative bottom-7 left-4">
                <span className="text-white text-[11px] left-[5px] relative bottom-2">
                  {list?.length}
                </span>
              </div>
            </div>
            {/* Login button */}
            <div className="hidden sm:block">
              <button
                className="w-[100px] h-[35px] bg-green-600 rounded-lg text-white"
                onClick={handleOpen}
              >
                <AutoGraphOutlinedIcon className="relative right-2" />
                Login
              </button>
            </div>
            {/* Login button */}
          </div>
          {/* Icons */}
        </div>

        <div className="block sm:hidden relative right-[10px]">
          <SearchPhone />
        </div>
        {/* Divider */}
        <div className="w-[1100px] h-[1px] bg-gray-100 mt-2 hidden sm:block "></div>
        {/* Divider */}

        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* Close button */}
            <Button onClick={handleClose}>
              <div className="relative left-[410px] bottom-8">
                <CloseIcon className="text-[#46A358]" />
              </div>
            </Button>
            <Login />
          </Box>
        </Modal>
      </div>
    </>
  );
};
