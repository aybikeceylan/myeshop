import React from "react";

type Props = {};
const date: Date = new Date();
const year: number = date.getFullYear();

const Footer = (props: Props) => {
  console.log("footer rendered");
  return (
    <div className="flex bg-amber-500 justify-center p-5 fixed bottom-0 w-full">
      © {year}All Rights Reserved
    </div>
  );
};

export default Footer;
