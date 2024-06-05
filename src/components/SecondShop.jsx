import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Product, Review } from "../pages";

export const SecondShop = () => {
  const [state, setState] = useState(1);
  return (
    <>
      <div className="container">
        <div className="flex space-x-8 mt-20 relative right-5">
          <div>
            <NavLink className="hover:text-[#46A358]  pb-2 border-b-2 font-semibold hover:font-semibold hover:border-b-green-800 hover:border-b-2">
              <button onClick={() => setState(1)}> Product Description</button>
            </NavLink>

            {/* <div className="w-[161px] bg-[#46A358] h-[3px] relative top-[8px]"></div> */}
          </div>
          <div>
            <NavLink className="hover:text-[#46A358] text-semibold pb-2 border-b-2 hover:font-semibold hover:border-b-green-800 hover:border-b-2">
              <button onClick={() => setState(2)}>Reviews (19)</button>
            </NavLink>
          </div>
        </div>
        <div className="w-[1070px] h-[1px] bg-slate-200 mt-2 relative right-5"></div>

        <div>{state === 1 && <Product />}</div>
        <div>{state === 2 && <Review />}</div>
      </div>
    </>
  );
};
