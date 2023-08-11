import { setCartCount, setCartItem } from "@/app/redux/features/cartSlice";
import { RootState } from "@/app/redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface CardProps {
  item: {
    image: any;
    title: any;
    price: any;
    id?: any;
  };
  index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  const router = useRouter();
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const handleAdd = (item: any) => {
    dispatch(setCartItem(item));
    dispatch(setCartCount());
  };

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
        priority={true}
        onClick={() => router.push(`/pages/productDetails/${item.id}`)}
      />
      <div className="font-bold text-orange-500 text-center h-5">
        {item?.price}TL
      </div>
      <div className="text-xs h-14">{item?.title}</div>
      <button
        className="bg-orange-500 rounded-md p-2 w-full h-10"
        onClick={() => handleAdd(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
