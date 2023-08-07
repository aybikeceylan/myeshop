"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const ProductDetail = () => {
  return (
    <>
      <div>Product Details</div>
      <Link href="/">Back to Products</Link>
      <div>
        {/* <Image></Image> */}
        <div className="text-black text-lg">
          <h2>item?.title</h2>
          <p>price</p>
          <p>desc</p>
          <p>
            <b>SKU:</b>
          </p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
