import React from "react";

type Props = {};

const Categories = (props: Props) => {
  console.log("category component");
  return (
    <div className="text-black bg-gray-300">
      <div>Categories</div>
      <button>Clear Filters</button>
    </div>
  );
};

export default Categories;
