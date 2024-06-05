import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addcount } from "../features/cartSlice";
import PersonIcon from "@mui/icons-material/Person";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

export const Plant1 = ({ currentPage, itemsPerPage, sortType }) => {
  const dispatch = useDispatch();

  const handleAddCart = (data) => {
    // console.log(data);
    dispatch(
      addcount({
        ...data,
      }),
    );
    alert("Successfully added to cart!");
  };

  const items = useSelector((state) => state.cart.items[0].data);

  const [sortedItems, setSortedItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  useEffect(() => {
    // console.log("work 1");
    let sortedItemsCopy = [...items]; // Create a copy of the items array
    if (sortType === "A-Z") {
      sortedItemsCopy.sort((a, b) =>
        a.common_name.localeCompare(b.common_name),
      );
    } else if (sortType === "Z-A") {
      sortedItemsCopy.reverse();
      // console.log("work");
    }
    setSortedItems(sortedItemsCopy);
  }, [sortType]); // Update when items or sortType change

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
    <div className="container grid sm:grid-cols-3 grid-cols-2">
      {currentItems.map((item) => (
        <div className="mt-10" key={item.id}>
          <div
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to={`/shop/${item.id}`}>
              <img
                src={item.image_url}
                alt="img"
                className="h-[245px] sm:h-[250px] w-[175px] sm:w-[250px] object-cover rounded-xl sm:rounded-none"
              />
            </Link>

            <div className="relative">
              <div className="absolute left-4 top-[-78px] hidden sm:block mt-8 h-[100px] translate-x-[50%]">
                {hoveredItem === item.id && (
                  <div className="flex space-x-5">
                    <button onClick={() => handleAddCart(item)}>
                      <ShoppingCartOutlinedIcon className="text-[#362424] hover:text-[#46A358]" />
                    </button>
                    {likedItems[item.id] ? (
                      <FavoriteIcon
                        className="cursor-pointer text-[#3D3D3D] hover:text-[#46A358]"
                        onClick={() => handleFavoriteClick(item.id)}
                      />
                    ) : (
                      <FavoriteBorderOutlinedIcon
                        className="cursor-pointer text-[#3D3D3D] hover:text-[#46A358]"
                        onClick={() => handleFavoriteClick(item.id)}
                      />
                    )}
                    <SearchOutlinedIcon className="text-[#3D3D3D] hover:text-[#46A358]" />
                  </div>
                )}
              </div>

              <div className="sm:mt-16 mt-4">
                <p className="text-[#3D3D3D]">{item.common_name}</p>
                <h3 className="font-semibold text-[#46A358]">
                  $ {item.genus_id}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="sm:hidden block mt-[360px]">
        <div className="flex space-x-10 relative right-60 mt-10">
          <NavLink to="/">
            <OtherHousesIcon className="text-[#D9D9D9] hover:text-[#46A358]" />
          </NavLink>
          <NavLink>
            <FavoriteIcon className="text-[#D9D9D9] hover:text-[#46A358]" />
          </NavLink>
          <NavLink to="/shop">
            <ShoppingCartOutlinedIcon className="text-[#D9D9D9] hover:text-[#46A358]" />
          </NavLink>
          <NavLink>
            <PersonIcon className="text-[#D9D9D9] hover:text-[#46A358]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Plant1;
