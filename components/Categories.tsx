"use client";
import { getCategory, setChoosen } from "@/app/redux/features/categorySlice";
import { setFilterList, setProduct } from "@/app/redux/features/productSlice";
import { RootState } from "@/app/redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { categoryList } = useSelector((state: RootState) => state.category);
  const { productList, filterList } = useSelector(
    (state: RootState) => state.product
  );

  console.log("category component");

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  console.log(categoryList);

  const handleCategory = (category: any) => {
    dispatch(setChoosen(category));

    dispatch(
      setFilterList([
        ...productList.filter((product: any) => product.category == category),
      ])
    );
  };
  const handleClear = () => {
    dispatch(setFilterList(""));
  };
  return (
    <div className="text-black">
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl font-semibold mb-4">Categories</h1>
        <div className="space-y-2 ">
          {categoryList?.map((category: string, index: number) => (
            <button
              key={index}
              className="px-4 py-2 border rounded hover:bg-gray-200 w-full bg-yellow-100"
              value={category}
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <button
        className="bg-orange-500 rounded-md p-2 w-full h-10"
        onClick={handleClear}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Categories;
