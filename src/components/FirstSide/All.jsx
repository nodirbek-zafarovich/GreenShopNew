import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Plant1, Plant2, Plant3 } from "../../pages";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const All = () => {
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("A-Z");
  const itemsPerPage = 9;

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    console.log("changed");
    if (selectedOption === "A-Z") {
      setSortType("A-Z");
    } else if (selectedOption === "Z-A") {
      setSortType("Z-A");
    }
  };

  return (
    <>
      <div className="container">
        <div className="flex justify-between">
          <div className="left-5 relative">
            <ul className="flex space-x-12">
              <li>
                <button
                  onClick={() => setCount(1)}
                  className={`hover:font-semibold font-semibold text-[#3D3D3D] ${
                    count === 1 ? "active border-b-[#46A358] border-b-2" : ""
                  } hover:text-[#46A358] pb-1 border-b-1 hover:border-b-[#46A358] hover:border-b-2`}
                >
                  All Plants
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCount(2)}
                  className={`hover:font-semibold font-semibold text-[#3D3D3D] ${
                    count === 2 ? "active border-b-[#46A358] border-b-2" : ""
                  } hover:text-[#46A358] pb-1 border-b-1 hover:border-b-[#46A358] hover:border-b-2`}
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCount(3)}
                  className={`hover:font-semibold font-semibold text-[#3D3D3D] ${
                    count === 3 ? "active border-b-[#46A358] border-b-2" : ""
                  } hover:text-[#46A358] pb-1 border-b-1 hover:border-b-[#46A358] hover:border-b-2`}
                >
                  Sale
                </button>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <div className="flex space-x-3">
              <p className="text-[#3D3D3D] text-xl">Sort by:</p>
              {/* Step 1: Update select element to include onChange event */}
              <select
                className="relative bottom-[1px]"
                onChange={handleSortChange}
              >
                <option value="A-Z" className="text-[#3D3D3D]">
                  A-Z
                </option>
                <option value="Z-A" className="text-[#3D3D3D]">
                  Z-A
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* <div className="h-[1px] w-[258px] bg-[#46A358] mt-8 ml-80"></div> */}
        <div>
          {count === 1 && (
            <Plant1
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              sortType={sortType}
            />
          )}
        </div>

        <div>
          {count === 2 && (
            <Plant2 currentPage={currentPage} itemsPerPage={itemsPerPage} />
          )}
        </div>
        <div>
          {count === 3 && (
            <Plant3 currentPage={currentPage} itemsPerPage={itemsPerPage} />
          )}
        </div>

        <div className="mt-20 ml-[620px] hidden sm:block">
          <Stack spacing={2}>
            <Pagination
              count={3}
              page={currentPage}
              onChange={handleChangePage}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  sx={{
                    borderRadius: "1px",
                    border: "1px",
                    "&:hover": {
                      backgroundColor: "#46A358",
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#46A358",
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default All;
