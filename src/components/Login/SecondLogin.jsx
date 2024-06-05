import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Facebook } from "../../assets/Facebook";
import { Google } from "../../assets/Google";
import { NavLink } from "react-router-dom";

const SecondLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Handle registration logic here
    console.log(formData);
  };

  return (
    <>
      <div className="container">
        <div className="flex justify-center relative bottom-7">
          <form className="bg-white pt-6 pb-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#3D3D3D] mb-2" htmlFor="username">
                Enter your email and password to register.
              </label>
              <input
                className="shadow appearance-none mt-1 border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#46A358] mt-4 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="flex space-x-4 relative justify-center bottom-7">
          <div className="w-[83px] h-[1px] bg-[#EAEAEA] mt-3 hover:bg-yellow-500"></div>
          <div>
            <p className="text-[13px] text-[#3D3D3D]">Or login with</p>
          </div>
          <div className="w-[83px] h-[1px] bg-[#EAEAEA] mt-3 hover:bg-yellow-500"></div>
        </div>

        <NavLink to="/Google">
          <button className="pl-20 ml-10 mt-1 pt-2 space-x-2 flex w-[300px] relative right-3 h-[40px] border-2 border-[#EAEAEA] rounded-lg">
            <Google />
            <p className="text-[13px] text-[#727272]">Login with Google</p>
          </button>
        </NavLink>
        <NavLink to="/Facebook">
          <button className="mt-4 ml-10 pl-20 pt-2 space-x-2 flex w-[300px] relative right-3 h-[40px] border-2 border-[#EAEAEA] rounded-lg">
            <Facebook />
            <p className="text-[13px] text-[#727272]">Login with Facebook</p>
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default SecondLogin;
