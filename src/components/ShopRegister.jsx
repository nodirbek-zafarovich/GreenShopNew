import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cartSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const ShopRegister = ({ data }) => {
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(data?.year);
  const [title, setTitle] = useState(0);

  const [quantity, setQuantity] = useState(title * data?.genus_id);
  console.log(quantity);

  useEffect(() => {
    setTotalPrice(data?.year * quantity);
    dispatch(updateQuantity({ id: data?.id, quantity }));
  }, [quantity, data?.year, data?.id, dispatch]);

  return (
    <>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <img
              className="h-16 w-16 mr-4 object-cover"
              src={data.image_url}
              alt="img"
            />
            <div>
              <h2 className="text-[#3D3D3D] font-semibold">{data.family}</h2>

              <p className="text-slate-300">
                SKU: <span className="text-slate-400">{data.year}</span>
              </p>
            </div>
            <p className="ml-16 text-[#727272]">{data.id}</p>
          </div>
        </td>
        <td className="py-4 text-[#46A358] font-bold">${data.genus_id}</td>
        <td className="py-4">
          <div className="flex items-center relative right-5"></div>
        </td>
      </tr>
      
    </>
  );
};
