import Image from "next/image";
import React from "react";

type Props = {};

const Card = (props: Props) => {
  console.log("card component");
  return (
    <div>
      {/* <Image></Image> */}
      <div>price</div>
      <div>desc</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
