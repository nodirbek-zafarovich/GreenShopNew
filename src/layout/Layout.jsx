import React from "react";
import {
  FirstFooterSide,
  GardenSide,
  Header,
  SecondFooterSide,
} from "../components/FirstSide";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
        <div className="hidden sm:block">
          <GardenSide />
          <FirstFooterSide />
          <SecondFooterSide />
        </div>
      </div>
    </>
  );
};
