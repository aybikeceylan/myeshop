import React from "react";

type Props = {};

const Categories = (props: Props) => {
  console.log("category component");
  return (
    <>
      <div>Categories</div>
      <button>Clear Filters</button>
    </>
  );
};

export default Categories;
