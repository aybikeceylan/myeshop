"use client";
import { useEffect } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";
import Card from "@/components/Card";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { getProduct, setProduct } from "./redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { productList } = useSelector((state: RootState) => state.product);
  const filteredList = useSelector((state: RootState) => state.filter);
  console.log("filteredList", filteredList);
  console.log("page component");

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="m-5 flex  ">
      <div className="w-1/5 mr-5">
        <Categories />
      </div>

      <div className="w-full">
        <SearchBar />
        <div className="grid grid-cols-4 gap-5 ">
          {productList?.map((item: any, index: number) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
