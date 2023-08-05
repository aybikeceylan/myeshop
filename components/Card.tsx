// useEffect doğru şekilde import edilmeli
import { useDispatch, useSelector } from "react-redux"; // useSelector eklenmeli
import { setProduct } from "@/app/redux/features/productSlice";

import Image from "next/image";
import React from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";

const Card = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { productList } = useSelector((state: RootState) => state.product);
  // const productList = useSelector(selectProduct); // Ürünü seçmek için useSelector kullanılmalı

  dispatch(setProduct({}));
  console.log(productList);

  console.log("card component");

  return (
    <div className="text-black bg-gray-500">
      {/* <Image /> */}
      <div>price</div>
      <div>desc</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
