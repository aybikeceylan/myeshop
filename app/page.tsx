import Card from "@/components/Card";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import React from "react";

export default function Home() {
  console.log("page component");
  return (
    <div>
      <Categories />
      <div>
        <SearchBar />
        <Card />
      </div>
      <p className="font-extrabold">Aybike</p>
    </div>
  );
}
