import React, { useState } from "react";

const Filter = ({
  search,
  setsearch,
  filter,
  setfilter,
  country,
  setcountry,
}) => {
  const searchHandling = (event) => {
    const res = event.target.value;
    setsearch(res);
    console.log(res);
  };

  const filterHandling = (event) => {
    const res = event.target.value;
    setfilter(res);
    console.log(res);
  };

  const sorting = (event) => {
    
    const sorted = [...country].sort((a,b) => {
      if (event.target.value == "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    setcountry(sorted);
  };
  return (
    <div className="flex justify-between p-10">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={searchHandling}
        className="border-gray-700 border-2 rounded p-1"
      />

      <button
        value={"asc"}
        className="border border-gray-700 rounded"
        onClick={sorting}
      >
        asc
      </button>
      <button
        value="des"
        className="border border-gray-700 rounded"
        onClick={sorting}
      >
        des
      </button>

      <select
        className="border-gray-700 border-2 rounded p-1 "
        value={filter}
        onChange={filterHandling}
      >
        <option value="all" className="bg-black">
          all
        </option>
        <option value="asia" className="bg-black">
          asia
        </option>
        <option value="oceania" className="bg-black">
          osenia
        </option>
        <option value="europ" className="bg-black">
          europ
        </option>
        <option value="africa" className="bg-black">
          africa
        </option>
        <option value="north america" className="bg-black">
          north america
        </option>
        <option value="south america" className="bg-black">
          south america
        </option>
      </select>
    </div>
  );
};

export default Filter;
