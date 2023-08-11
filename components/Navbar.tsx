"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  removeActiveUser,
  setActiveUser,
} from "@/app/redux/features/authSlice";
import { RootState } from "@/app/redux/store";

type Props = {};

const Navbar = (props: Props) => {
  const [displayName, setDisplayName] = useState<any | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const { cardCount } = useSelector((state: RootState) => state.card);

  console.log("Navbar rendered");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      interface user {
        email: string | null | undefined;
        displayName: string;
      }

      if (user) {
        const uid = user.uid;
        // console.log(user);
        // console.log(uid);
        // console.log(auth);
        // console.log(user.displayName);
        if (user.displayName == null) {
          // şurayı any yaptım düzeldi
          const u: any = user?.email?.slice(0, -10);
          // console.log(u1);

          // type u= string   |null|undefined
          const uName = u?.charAt(0).toUpperCase() + u?.slice(1);
          console.log(uName);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          setActiveUser({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(removeActiveUser({}));
      }
    });
  }, [dispatch, displayName]);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("LogOut Succesfully...");
        router.replace("/pages/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <nav className="flex bg-amber-500 justify-between p-5 ">
      <div>
        <Link href="/" className="text-3xl text-red-600 font-semibold">
          <span className="text-white">e</span>Shop
        </Link>
      </div>
      <div className="flex gap-3 ">
        <Link href="/" className="hover:bg-amber-300 p-2 rounded-md">
          Home
        </Link>
        <Link
          href="/pages/contact"
          className="hover:bg-amber-300 p-2 rounded-md"
        >
          Contact us
        </Link>
      </div>
      <div className="flex gap-3">
        {displayName && (
          <a href="#">
            <FaUserCircle size={16} />
            Hi,{displayName}
          </a>
        )}

        <Link
          href="/pages/orderDetails"
          className="hover:bg-amber-300 p-2 rounded-md"
        >
          My Orders
        </Link>
        <Link
          href="/"
          className="hover:bg-amber-300 p-2 rounded-md"
          onClick={logoutUser}
        >
          LogOut
        </Link>
        <Link href="/pages/login" className="hover:bg-amber-300 p-2 rounded-md">
          Login
        </Link>
        <Link
          href="/pages/register"
          className="hover:bg-amber-300 p-2 rounded-md"
        >
          Register
        </Link>
        <Link
          href="/pages/cart"
          className="hover:bg-amber-300 p-2 rounded-md flex"
        >
          Cart
          <FaShoppingCart size={15} />
          <p>{cardCount}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
