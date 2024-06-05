import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cartSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const ShopCard = ({ data }) => {
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(data?.year);
  const [title, setTitle] = useState(0);

  const [quantity, setQuantity] = useState(title * data?.genus_id);
  console.log(quantity);

  const handleChange = () => {
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
    setQuantity(value);
  };

  const handleIncrease = () => {
    setQuantity((pre) => pre - 1);
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: data?.id }));
  };

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
          </div>
        </td>
        <td className="py-4">${data.genus_id}</td>
        <td className="py-4">
          <div className="flex items-center relative right-5">
            <button
              className="bg-[#46A358] text-[#FFFFFF] px-3 py-1 rounded-[50%] mr-2"
              onClick={() => {
                if (quantity > 0) {
                  setQuantity((pre) => pre - 1);
                }
              }}
            >
              -
            </button>
            <input
              className="px-2 py-1 w-12"
              type="number"
              value={quantity}
              onChange={handleChange}
            />
            <button
              className="bg-[#46A358] text-[#FFFFFF] px-3 py-1 rounded-[50%]"
              onClick={() => setQuantity((pre) => pre + 1)}
            >
              +
            </button>
          </div>
        </td>
        <td className="py-4 text-[#46A358] font-bold hover:text-green-400">
          {totalPrice} $
        </td>
        <td>
          <button className="text-[#727272]" onClick={handleRemove}>
            <DeleteOutlineOutlinedIcon />
          </button>
        </td>
      </tr>
    </>
  );
};
