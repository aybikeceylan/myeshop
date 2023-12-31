"use client";
import { setCartCount, setCartItem } from "@/app/redux/features/cartSlice";
import { RootState } from "@/app/redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Slug = () => {
  const router = useRouter();

  interface Product {
    id: any | null;
    image: any | null;
    title: string | null;
    price: number | null;
    description: any | null;
    rating: {
      rate: any | null;
    };
  }

  const { productList } = useSelector((state: RootState) => state.product);
  const params = useParams();
  const id = params.slug;
  const item: any = productList.find((i: Product) => i.id == id);

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const handleAdd = (item: any) => {
    dispatch(setCartItem(item));
    dispatch(setCartCount());
    toast.success("Added to Cart");
  };

  console.log(item);
  console.log(id);

  return (
    //@ts-ignore
    <>
      <div className="text-orange-700 font-bold text-3xl text-center h-20">
        Product Details
      </div>
      <Link href="/" className="text-black text-base flex">
        <FaArrowCircleLeft size={25} /> Back to Products
      </Link>
      <div className="flex m-10 gap-20 h-screen">
        <Image
          //@ts-ignore
          src={item?.image}
          //@ts-ignore
          alt={item?.title}
          width={300}
          height={600}
          className="h-52"
          priority={true}
        />

        <div className="text-black text-lg  ">
          <h2 className="text-xl h-14 ">
            {
              //@ts-ignore
              item?.title
            }
          </h2>
          <p className="font-bold text-orange-500 text-left h-8 ">
            {item?.price}TL
          </p>
          <p className="h-28">{item?.description}</p>
          <p className="h-8 ">
            <b>Rating</b>:{item?.rating?.rate}
          </p>

          <button
            className="bg-orange-500 rounded-md p-2 w-44 h-10"
            onClick={() => handleAdd(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Slug;
