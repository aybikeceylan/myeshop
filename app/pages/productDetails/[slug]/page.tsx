"use client";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import React from "react";
import { useSelector } from "react-redux";

interface Product {
  id: any;
  image: any;
  title: string;
  price: number;
  desc: any;
  sku: any;
}

const Slug = () => {
  const { productList } = useSelector((state: RootState) => state.product);
  const params = useParams();
  const id = params.slug;
  const item = productList.find((i: Product) => i.id == id);

  console.log(item);
  console.log(id);

  return (
    <>
      <div className="text-black font-bold text-lg ">Product Details</div>
      <Link href="/" className="text-black">
        Back to Products
      </Link>
      <div>
        <Image
          src={item?.image}
          alt={item?.title}
          width={400}
          height={500}
          className="h-52"
          priority={true}
        />
        <div className="text-black text-lg">
          <h2>{item?.title}</h2>
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

export default Slug;
