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
import {
  setFirstRenderCartCount,
  setFirstRenderCartItem,
} from "./redux/features/cartSlice";

export default function Home() {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { productList, filterList } = useSelector(
    (state: RootState) => state.product
  );

  const cartItem = useSelector((state: RootState) => state.cart);
  console.log("productList", productList);
  console.log("filterList", filterList);

  console.log("page component");
  // //@ts-ignore
  // console.log("cartItem", JSON.parse(localStorage.getItem("cart")));
  // //@ts-ignore
  // console.log("cartCount", JSON.parse(localStorage.getItem("cartCount")));

  useEffect(() => {
    dispatch(getProduct());
    //@ts-ignore
    if (JSON.parse(localStorage.getItem("cart"))) {
      // dispatch(
      //   //@ts-ignore
      //   setFirstRenderCartItem(...JSON.parse(localStorage.getItem("cart")))
      // );
      // dispatch(
      //   //@ts-ignore
      //   setFirstRenderCartCount(JSON.parse(localStorage.getItem("cartCount")))
      // );
    }
  }, [dispatch]);

  console.log("cardItem", cartItem);
  return (
    <div className="m-5 flex  ">
      <div className="w-1/5 mr-5">
        <Categories />
      </div>

      <div className="w-full">
        <SearchBar />
        <div className="grid grid-cols-4 gap-5 ">
          {(filterList?.length ? filterList : productList)?.map(
            (item: any, index: number) => (
              <Card key={index} item={item} index={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
