import React, { useState } from "react";
import {
  HomePageSide,
  OurBlogSide,
  All,
  FindMore,
  Categories,
} from "../components/FirstSide";

export const Home = () => {
  const [state, setState] = useState(1);
  return (
    <>
      <HomePageSide />
      <div className="flex mt-20 ml-2">
        <Categories />
        <All />
      </div>
      <div className="hidden sm:block">
        <FindMore />
        <OurBlogSide />
      </div>
    </>
  );
};
