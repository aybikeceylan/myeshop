"use client";
import { useEffect } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";
import Card from "@/components/Card";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { getProduct } from "./redux/features/productSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  console.log("page component");

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="m-5 flex w-full">
      <div className="">
        <Categories />
      </div>

      <div className="">
        <SearchBar />
        <Card />
      </div>
      <p className="font-extrabold">Aybike</p>
    </div>
  );
}
