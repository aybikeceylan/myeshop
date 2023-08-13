"use client";
import { clearAll } from "@/app/redux/features/cartSlice";
import { RootState } from "@/app/redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

const Checkout = (props: Props) => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const router = useRouter();

  const handleOrder = () => {
    router.push(`/pages/checkoutSuccess`);
    dispatch(clearAll());
  };
  return (
    <div>
      <h2>Checkout Details</h2>
      <h3>Shipping Adress</h3>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-16">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Recipient Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Recipient Name"
            type="text"
            placeholder="Recipient Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address Line
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Address Line"
            type="text"
            placeholder="Address Line"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="City"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="State"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Postal Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Postal Code"
            type="text"
            placeholder="Postal Code"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Country"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Phone"
            type="text"
            placeholder="Phone"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleOrder}
          >
            Buy Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
