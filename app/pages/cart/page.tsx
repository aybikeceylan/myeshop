"use client";
import {
  clearAll,
  removeItemFromCart,
  setCartCount,
  setCartDecrease,
  setCartItem,
} from "@/app/redux/features/cartSlice";
import { RootState } from "@/app/redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaArrowCircleLeft, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  cardItem: any;
};

// ... Diğer import ve bileşenler

const Cart = (props: Props) => {
  const { cartItem } = useSelector((state: RootState) => state.cart);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { cartCount } = useSelector((state: RootState) => state.cart);

  let filteredArr = cartItem?.reduce((acc: any, current: any) => {
    //@ts-ignore
    const x = acc?.find((item) => item.id === current.id);
    if (!x) {
      return acc?.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const handleDelete = (item: any) => {
    dispatch(removeItemFromCart(item));
  };
  const handleClear = () => {
    dispatch(clearAll());
  };
  const handleIncrease = (item: any) => {
    dispatch(setCartItem(item));
    dispatch(setCartCount());
  };
  const handleDecrease = (item: any) => {
    let index = cartItem?.findIndex((i: any) => i === item);
    let arrayforchange = [...cartItem];
    arrayforchange.splice(index, 1);
    dispatch(setCartDecrease(arrayforchange));
    // dispatch(setCartDecrease(cartItem?.slice(index, index + 1)))
    // dispatch(setCartItem(arrayforchange))
    dispatch(setCartCount());
  };

  return (
    <>
      <h2 className="text-orange-600 text-3xl text-center font-bold m-5">
        Shopping Cart
      </h2>
      {cartItem?.length ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-orange-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredArr?.map((item: any, index: number) => (
                <tr className="bg-orange-100 border-b " key={index}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.title}
                    <Image
                      src={item?.image}
                      alt={item?.title}
                      width={50}
                      height={60}
                      className="mt-5"
                      priority={true}
                    />
                  </td>
                  <td className="px-6 py-4">{item.price}TL</td>
                  <td className=" flex justify-around pt-14 ">
                    <FaMinus
                      style={{ height: "1rem" }}
                      onClick={() => handleDecrease(item)}
                    />
                    <p>
                      {
                        //@ts-ignore
                        (cartItem?.filter((i) => i?.id === item?.id)).length
                      }
                    </p>
                    <FaPlus
                      style={{ height: "1rem" }}
                      onClick={() => handleIncrease(item)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    {(
                      item?.price *
                      //@ts-ignore
                      (cartItem?.filter((i) => i?.id === item?.id)).length
                    ).toFixed(2)}
                    TL
                  </td>
                  <td className="px-6 py-4">
                    <FaTrash
                      size={25}
                      onClick={() => handleDelete(item)}
                    ></FaTrash>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between">
            <button
              className="bg-orange-500 rounded-md p-2  h-10"
              onClick={() => handleClear()}
            >
              Clear Cart
            </button>
            <Link href="/" className="text-black text-base flex">
              <FaArrowCircleLeft size={25} /> Continue Shopping
            </Link>
          </div>
          <div className=" bg-orange-200 text-black w-1/2 p-5 mt-5 ">
            <div className="flex justify-between">
              <h2> Subtotal({cartCount} items):</h2>

              <p>
                {cartItem
                  //@ts-ignore
                  ?.reduce((acc, current) => acc + current?.price, 0)
                  .toFixed(2)}
                TL
              </p>
            </div>

            <div className="mt-5">
              <p>Taxes and Shipping calculated at checkout</p>
              <button className="bg-orange-500 rounded-md p-2 w-full h-10">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="flex justify-center content-center text-black font-semibold">
            Your Cart is empty
          </p>
          <Link
            href="/"
            className="text-black text-base flex  justify-center content-center"
          >
            <FaArrowCircleLeft size={25} /> Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
