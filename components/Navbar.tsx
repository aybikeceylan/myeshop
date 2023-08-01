import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex bg-slate-400 justify-between p-5 ">
      <div>eShop</div>
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/pages/contact">Contact us</Link>
      </div>
      <div className="flex gap-5">
        <Link href="/pages/orderDetails">My Orders</Link>
        <Link href="/pages/login">Login</Link>
        <Link href="/pages/chart">Chart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
