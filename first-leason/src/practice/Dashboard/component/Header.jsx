import React, { useState } from "react";
import { Bookmark, Search } from "lucide-react";

const Header = () => {
  const [search, setsearch] = useState("");

  const searchhandling = (event) => {
    const res = event.target.value;
    setsearch(res);
    console.log(res);
  };

  return (
    <div className="h-[20%] flex justify-between items-center">
      <div className="flex">
        <Bookmark className="text-gray-500 h-10 w-10 " />
        <h1 className="text-3xl font-semibold"> Course Rate</h1>
      </div>
      <div className="relative  text-gray-500">
        <input
        type="text"
        placeholder="search course..."
        value={search}
        onChange={searchhandling}
        className="border border-gray-500 rounded-full p-1 px-3 "
        />
        <Search className="absolute top-[10%] left-[82%]" />

      </div>
      
    </div>
  );
};

export default Header;
