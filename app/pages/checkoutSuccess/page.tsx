"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const CheckoutSuccess = (props: Props) => {
  const router = useRouter();

  return (
    <div className="text-black mt-10 ml-20">
      <h2 className="text-lg font-bold">Checkout Succesful</h2>
      <p>Thank you for your purchase</p>
      <button
        className="bg-orange-500 rounded-md p-2 h-10"
        onClick={() => router.push(`/pages/orderDetail`)}
      >
        View Order Status
      </button>
    </div>
  );
};

export default CheckoutSuccess;
