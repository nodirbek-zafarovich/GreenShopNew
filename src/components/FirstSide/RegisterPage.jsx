import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShopRegister } from "../ShopRegister";
import payme from "../../assets/paymee.svg";

function RegisterPage() {
  const list = useSelector((state) => state.cart.list);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    shipToDifferentAddress: false,
    orderNotes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["firstName", "lastName", "email"]; 
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Registration successful:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      streetAddress: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      shipToDifferentAddress: false,
      orderNotes: "",
    });
  };

  return (
    <div className="container mx-auto py-8 relative top-[100px]">
      <div>
        <NavLink to="/" className="text-[#3D3D3D] hover:font-bold">
          Home
        </NavLink>
        <NavLink to="/shop" className="text-[#3D3D3D] hover:font-bold">
          / Shop
        </NavLink>

        <NavLink to="/shop" className="text-[#3D3D3D] hover:font-bold">
          / Checkout
        </NavLink>
      </div>
      <div className="flex">
        <div className="mt-8">
          <h1 className="text-2xl font-semibold mb-4 text-[17px]">
            Billing Address
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto relative right-[300px] top-2"
          >
            <div className="grid grid-cols-1 gap-6  relative left-[300px]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country / Region
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Select a country / region"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      id="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded-md mr-2"
                    >
                      <option value="+1">+1 (USA)</option>
                      <option value="+1">+9989 (UZB)</option>

                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="shipToDifferentAddress"
                  id="shipToDifferentAddress"
                  checked={formData.shipToDifferentAddress}
                  onChange={handleChange}
                  className="h-4 w-4 rounded-[50%] text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label
                  htmlFor="shipToDifferentAddress"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ship to a different address?
                </label>
              </div>
              <div>
                <label
                  htmlFor="orderNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Order notes (optional)
                </label>
                <textarea
                  name="orderNotes"
                  id="orderNotes"
                  rows="3"
                  value={formData.orderNotes}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-[#46A358] text-white px-4 py-2 rounded-md hover:bg-[#2a5f34]"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div className="w-[120%] relative left-52">
            {list && list?.length > 0 ? (
              <table className="w-full leading-normal">
                <thead>
                  <h2 className="text-[#3D3D3D] font-bold text-[17px]">
                    Your Order
                  </h2>
                  <tr className="relative right-5">
                    <th className="px-5 py-3 border-b-2 text-left text-[16px] font-semibold text-[#3D3D3D] tracking-wider">
                      Products
                    </th>

                    <th className="px-5 py-3 border-b-2 text-left text-[16px] font-semibold text-[#3D3D3D] tracking-wider">
                      Subtotal
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((item) => {
                    return <ShopRegister key={item.id} data={item} />;
                  })}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                Your cart is empty.
              </p>
            )}
          </div>

          <div className="mt-4 relative left-[300px]">
            <p className=" mt-2 ml-28 text-[12px] text-[#3D3D3D]">
              Have a coupon code?
              <span className="text-[#46A358]"> Click here</span>
            </p>
            <tr className="flex justify-between mt-6">
              <td className="text-[#3D3D3D]">Subtotal</td>
              <td className="relative right-24">{list?.total} $</td>
            </tr>
            <tr className="flex justify-between mt-2">
              <td className="text-[#3D3D3D]">Coupon Discount</td>
              <td className="relative right-24">{list.total} $</td>
            </tr>
            <tr className="flex justify-between mt-3">
              <td className="text-[#3D3D3D]">Shiping</td>
              <td className="relative right-24">{list.total} $</td>
            </tr>
            <p className="text-[#46A358] mt-2 ml-44 text-[12px]">
              View shipping charge
            </p>

            <tr className="flex justify-between mt-10">
              <td className="text-[#3D3D3D] font-bold text-[16px]">Total:</td>
              <td className="relative text-[#46A358] font-bold right-24">
                {list.total} $
              </td>
            </tr>
            <h2 className="text-[#3D3D3D] font-bold mt-8">Payment Method</h2>
            <div className="w-[295px] flex mt-4 h-[45px] border-[#EAEAEA] border p-2 rounded-lg">
              <input type="checkbox" />
              <img src={payme} alt="img" className="ml-2" />
            </div>
            <div className="w-[295px] mt-4 h-[45px] flex border-[#EAEAEA] border pl-2 rounded-lg">
              <input type="checkbox" />
              <p className="text-[#3D3D3D] ml-2 mt-2">Dorect bank transfer</p>
            </div>
            <div className="w-[295px] mt-4 h-[45px] border-[#EAEAEA] border pt-2 pl-2 flex rounded-lg">
              <input type="checkbox" />
              <p className="text-[#3D3D3D] ml-2 mt-1">Cash on delivery</p>
            </div>
            <button className="bg-[#46A358] rounded-sm text-white w-[290px] h-[40px] mt-12">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
