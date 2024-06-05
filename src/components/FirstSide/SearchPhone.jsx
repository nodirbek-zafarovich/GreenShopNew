import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LineAxisOutlinedIcon from "@mui/icons-material/LineAxisOutlined";

export const SearchPhone = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search functionality here
    console.log("Searching for:", searchValue);
  };

  return (
    <div className="container mx-auto py-8 mt-32">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full h-[85px] flex"
      >
        <div className="grid grid-cols-1 gap-6">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Find your plants"
            InputProps={{
              startAdornment: (
                <SearchIcon
                  color="disabled"
                  sx={{ marginRight: "8px", background:"#F8F8F8", marginLeft: "4px" }}
                />
              ),
            }}
            value={searchValue}
            onChange={handleChange}
          />
          {/* Submit button */}
        </div>
        <button className="w-[45px] h-[50px] ml-2 bg-[#46A358] rounded-lg">
          <LineAxisOutlinedIcon className="text-white" />
        </button>
      </form>
    </div>
  );
};
