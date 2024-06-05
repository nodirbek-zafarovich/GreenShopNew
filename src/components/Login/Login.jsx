import React, { useState } from "react";
import FirstLogin from "./FirstLogin";
import SecondLogin from "./SecondLogin";

export const Login = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="container">
        <div className="left-[110px] relative bottom-6">
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => setCount(1)}
                className={`hover:font-semibold text-xl font-semibold text-[#3D3D3D] ${
                  count === 1 ? "active border-b-[#46A358] border-b-2" : ""
                } hover:text-[#46A358] pb-1 border-b-1 hover:border-b-[#46A358] hover:border-b-2`}
              >
                Login
              </button>
            </li>
            <div className="h-[16px] w-[1px] bg-[#3D3D3D] mt-2 hover:bg-[#46A358]"></div>
            <li>
              <button
                onClick={() => setCount(2)}
                className={`hover:font-semibold text-xl font-semibold text-[#3D3D3D] ${
                  count === 2 ? "active border-b-[#46A358] border-b-2" : ""
                } hover:text-[#46A358] pb-1 border-b-1 hover:border-b-[#46A358] hover:border-b-2`}
              >
                Register
              </button>
            </li>
          </ul>
        </div>

        <div>{count === 1 && <FirstLogin />}</div>

        <div>{count === 2 && <SecondLogin />}</div>
      </div>
    </>
  );
};
