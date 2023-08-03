import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("LogOut Succesfully...");
        router.replace("/pages/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <nav className="flex bg-slate-400 justify-between p-5 ">
      <div>
        <Link href="/" className="text-3xl text-red-600 font-semibold">
          <span className="text-white">e</span>Shop
        </Link>
      </div>
      <div className="flex gap-3 ">
        <Link href="/" className="hover:bg-sky-400 p-2 rounded-md">
          Home
        </Link>
        <Link href="/pages/contact" className="hover:bg-sky-400 p-2 rounded-md">
          Contact us
        </Link>
      </div>
      <div className="flex gap-3">
        <Link
          href="/pages/orderDetails"
          className="hover:bg-sky-400 p-2 rounded-md"
        >
          My Orders
        </Link>
        <Link
          href="/pages/"
          className="hover:bg-sky-400 p-2 rounded-md"
          onClick={logoutUser}
        >
          LogOut
        </Link>
        <Link href="/pages/login" className="hover:bg-sky-400 p-2 rounded-md">
          Login
        </Link>
        <Link
          href="/pages/register"
          className="hover:bg-sky-400 p-2 rounded-md"
        >
          Register
        </Link>
        <Link
          href="/pages/chart"
          className="hover:bg-sky-400 p-2 rounded-md flex"
        >
          Chart
          <FaShoppingCart size={15} />
          <p>0</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
