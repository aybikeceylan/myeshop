import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  console.log("search component");
  return (
    <div className="text-black border-gray shadow-lg rounded-lg flex w-1000px justify-between mb-5">
      <div className="w-3/5">
        <div className="flex items-center border rounded-lg p-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-2 py-1 focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-orange-600">
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Sort by:</span>
          <select className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300">
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
