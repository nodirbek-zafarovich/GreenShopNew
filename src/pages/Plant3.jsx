import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addcount } from "../features/cartSlice";
import { Link } from "react-router-dom";

export const Plant3 = ({ currentPage, itemsPerPage, sortType }) => {
  const dispatch = useDispatch();

  const handleAddCart = (data) => {
    console.log(data);
    dispatch(
      addcount({
        ...data,
      }),
    );
    alert("Successfully");
  };

  const items = useSelector((state) => state.cart.items[0].data);

  const [sortedItems, setSortedItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item
  const [likedItems, setLikedItems] = useState({}); // State to track liked items

  useEffect(() => {
    let sortedItemsCopy = [...items]; // Create a copy of the items array
    if (sortType === "A-Z") {
      sortedItemsCopy.sort((a, b) =>
        a.common_name.localeCompare(b.common_name),
      );
    } else if (sortType === "Z-A") {
      sortedItemsCopy.reverse();
    }
    setSortedItems(sortedItemsCopy);
  }, [sortType, items]); // Update when sortType or items change

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleFavoriteClick = (itemId) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId],
    }));
  };

  return (
    <>
      <div className="container grid grid-cols-3 relative bottom-4">
        {currentItems.map((item) => (
          <div className="mt-10" key={item.id}>
            <div
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div>
                <button className="bg-[#46A358] text-white w-[80px] h-[29px] rounded-lg relative top-5">
                  {item.status}
                </button>
              </div>
              <Link to={`/shop/${item.id}`}>
                <img
                  src={item.image_url}
                  alt="img"
                  className="h-[250px] w-[250px] object-cover"
                />
              </Link>

              <div className="relative">
                <div className="mt-8 h-[100px] absolute top-[-78px] left-4 translate-x-[50%]">
                  {hoveredItem === item.id && (
                    <div className="flex space-x-5">
                      <button onClick={() => handleAddCart(item)}>
                        <ShoppingCartOutlinedIcon className="text-[#362424] hover:text-[#46A358]" />
                      </button>
                      {likedItems[item.id] ? (
                        <FavoriteIcon
                          className="text-[#3D3D3D] hover:text-[#46A358] cursor-pointer"
                          onClick={() => handleFavoriteClick(item.id)}
                        />
                      ) : (
                        <FavoriteBorderOutlinedIcon
                          className="text-[#3D3D3D] hover:text-[#46A358] cursor-pointer"
                          onClick={() => handleFavoriteClick(item.id)}
                        />
                      )}
                      <SearchOutlinedIcon className="text-[#3D3D3D] hover:text-[#46A358]" />
                    </div>
                  )}
                </div>

                <div className="mt-16">
                  <p className="text-[#3D3D3D]">{item.common_name}</p>
                  <h3 className="text-[#46A358] font-semibold">
                    $ {item.genus_id}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
