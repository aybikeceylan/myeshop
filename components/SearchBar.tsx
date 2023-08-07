"use client";
import { setFilterList } from "@/app/redux/features/productSlice";
import { RootState } from "@/app/redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const SearchBar = (props: Props) => {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const { productList, filterList } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const handleSubmit = (e: any) => {
    dispatch(
      setFilterList(
        (filterList?.length ? filterList : productList).filter((item: any) => {
          return (
            item.title.toLowerCase().includes(search.toLowerCase()) === true
          );
        })
      )
    );
    setSearch("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(search);
    }
  };

  const handleSort = (e: any) => {
    if (e.target.value === "Featured") {
      dispatch(
        setFilterList([...(filterList?.length ? filterList : productList)])
      );
    } else if (e.target.value === "Price: Low to High") {
      dispatch(
        setFilterList(
          [...(filterList?.length ? filterList : productList)].sort(
            (a: any, b: any) => a.price - b.price
          )
        )
      );
    } else if (e.target.value === "Price: High to Low") {
      dispatch(
        setFilterList(
          [...(filterList?.length ? filterList : productList)].sort(
            (a: any, b: any) => b.price - a.price
          )
        )
      );
    }
    setOption("");
  };
  console.log("search component");
  return (
    <div className="text-black border-gray shadow-lg rounded-lg flex w-1000px justify-between mb-5">
      <div className="w-3/5">
        <div className="flex items-center border rounded-lg p-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-2 py-1 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-orange-600"
            onClick={() => handleSubmit(search)}
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Sort by:</span>
          <select
            className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleSort}
            value={option}
          >
            <option value={"Featured"}>Featured</option>
            <option value={"Price: Low to High"}>Price: Low to High</option>
            <option value={"Price: High to Low"}>Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
