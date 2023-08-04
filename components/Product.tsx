import React from "react";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import Card from "./Card";

type Props = {};

const product = (props: Props) => {
  console.log("product component");
  return (
    <>
      <Categories />
      <div>
        <SearchBar />
        <Card />
      </div>
      <p className="font-extrabold">Aybike</p>
    </>
  );
};

export default product;
