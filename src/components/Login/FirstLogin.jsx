import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Google } from "../../assets/Google";
import { Facebook } from "../../assets/Facebook";
import { NavLink } from "react-router-dom";

const FirstLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <form className="bg-white pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#3D3D3D] mb-2" htmlFor="email">
                Enter your username and password to login.
              </label>
              <input
                className="shadow mt-1 appearance-none hover:border-[#46A358] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="almamun_uxui@outlook.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6 relative">
              <input
                className="shadow hover:border-[#46A358] appearance-none border mt-1 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {showPassword ? (
                <VisibilityIcon
                  className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <VisibilityOffIcon
                  className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                />
              )}
              <p className="text-[#46A358] ml-[194px] mt-4">Forgot Password?</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#46A358] hover:bg-[#296635] w-full mt-1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex space-x-4 relative left-10 bottom-2">
          <div className="w-[96px] h-[1px] bg-[#EAEAEA] mt-3 hover:bg-yellow-500"></div>
          <div>
            <p>Or login with</p>
          </div>
          <div className="w-[96px] h-[1px] bg-[#EAEAEA] mt-3 hover:bg-yellow-500"></div>
        </div>

        <NavLink to="/Google">
          <button className="pl-[90px] mt-4 pt-2 space-x-2 flex w-[314px] ml-10 h-[40px] border-2 border-[#EAEAEA] rounded-lg">
            <Google />
            <p className="text-[13px] text-[#727272]">Login with Google</p>
          </button>
        </NavLink>
        <NavLink to="/Facebook">
          <button className="mt-5 pl-[90px] pt-2 space-x-2 flex w-[310px] ml-10 h-[40px] border-2 border-[#EAEAEA] rounded-lg">
            <Facebook />
            <p className="text-[13px] text-[#727272]">Login with Facebook</p>
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default FirstLogin;
