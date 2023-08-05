import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux"; // Removed unnecessary import
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";

interface CardProps {
  item: {
    image: any;
    title: any;
    price: any;
  };
  index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  console.log("card component");

  return (
    <div
      className="text-black w-44 bg-yellow-100 rounded-md shadow-md"
      key={index}
    >
      <Image
        src={item?.image}
        alt={item?.title}
        width={175}
        height={175}
        className="h-52"
      />
      <div className="font-bold text-orange-500 text-center h-5">
        {item?.price}TL
      </div>
      <div className="text-xs h-14">{item?.title}</div>
      <button className="bg-orange-500 rounded-md p-2 w-full h-10">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
