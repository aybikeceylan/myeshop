import React from "react";

type Props = {};
const date: Date = new Date();
const year: number = date.getFullYear();

const Footer = (props: Props) => {
  return (
    <div className="flex bg-slate-400 justify-center p-5">
      © {year}All Rights Reserved
    </div>
  );
};

export default Footer;
