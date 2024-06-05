import React from "react";
import { SecondCarousel } from "./SecondCarousel";
import { useSelector } from "react-redux";
import { ShopCard } from "./ShopCard";
import { NavLink } from "react-router-dom";

export const Shop = () => {
  const list = useSelector((state) => state.cart.list);

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-28">
          <div>
            <NavLink to="/" className="text-[#3D3D3D] hover:font-bold">
              Home
            </NavLink>
            <NavLink to="/shop" className="text-[#3D3D3D] hover:font-bold">
              / Shop
            </NavLink>

            <NavLink to="/shop" className="text-[#3D3D3D] hover:font-bold">
              / Shopping Cart
            </NavLink>
          </div>
          <div className="flex justify-between mt-8">
            <div className="bg-white">
              {list && list?.length > 0 ? (
                <table className="w-[160%] leading-normal">
                  <thead>
                    <tr className="relative right-5">
                      <th className="px-5 py-3 border-b-2 text-left text-[16px] font-bold text-[#3D3D3D] tracking-wider">
                        Products
                      </th>
                      <th className="px-5 py-3 border-b-2 text-left text-[16px] font-bold text-[#3D3D3D] tracking-wider">
                        Price
                      </th>
                      <th className="px-5 py-3 border-b-2 text-left text-[16px] font-bold text-[#3D3D3D] tracking-wider">
                        Quantity
                      </th>
                      <th className="px-5 py-3 border-b-2 text-left text-[16px] font-bold text-[#3D3D3D] tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {list.map((item) => {
                      return <ShopCard key={item.id} data={item} />;
                    })}
                  </tbody>
                </table>
              ) : (
                <p className="text-center text-gray-500 mt-8">
                  Your cart is empty.
                </p>
              )}
            </div>

            <div className="mt-3 relative w-[26%]">
              <h2 className="text-[#3D3D3D] font-bold text-[18px]">
                Cart Totals
              </h2>
              <div className="w-[298px] bg-slate-100 h-[1px] mt-2"></div>
              <p className="text-[#3D3D3D] text-[14px] mt-3">Coupon Apply</p>
              <div class="flex mt-2">
                <input
                  type="text"
                  placeholder="Enter coupon code here..."
                  class="border border-[#46A358] text-[14px] w-full rounded-l px-4 py-2 focus:outline-none focus:border-green-400"
                />
                <button class="bg-[#46A358] hover:bg-green-600 text-white rounded-r px-4 py-2">
                  Apply
                </button>
              </div>

              <div className="mt-4">
                <tr className="flex justify-between mt-6">
                  <td className="text-[#3D3D3D]">Subtotal</td>
                  <td>{list?.total} $</td>
                </tr>
                <tr className="flex justify-between mt-2">
                  <td className="text-[#3D3D3D]">Coupon Discount</td>
                  <td>{list.total} $</td>
                </tr>
                <tr className="flex justify-between mt-3">
                  <td className="text-[#3D3D3D]">Shiping</td>
                  <td>{list.total} $</td>
                </tr>
                <p className="text-[#46A358] mt-2 ml-44 text-[12px]">
                  View shipping charge
                </p>
                <tr className="flex justify-between mt-10">
                  <td className="text-[#3D3D3D] font-bold">Total:</td>
                  <td>{list.total} $</td>
                </tr>
                <button className="bg-[#46A358] rounded-sm text-white w-[290px] h-[40px] mt-6">
                  Proceed To Checkout
                </button>

                <NavLink
                  to="/shop/register"
                  className="text-[#46A358] relative top-3 left-20 text-[15px]"
                >
                  Continue Shopping
                </NavLink>
              </div>
            </div>
          </div>

          <div className="relative top-24">
            <h2 className="text-[#46A358] text-[17px] font-semibold">
              You may be interested in
            </h2>
            <SecondCarousel />
          </div>
        </div>
      </div>
    </>
  );
};
