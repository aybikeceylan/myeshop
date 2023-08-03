"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ForgotPic from "./forgot.png";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";
import { toast } from "react-toastify";
import Loading from "@/components/Loader";
type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [isloading, setİsLoading] = useState(false);

  const resetPassword = (e: any) => {
    e.preventDefault();
    setİsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setİsLoading(false);
        toast.success("Check your email...");
      })
      .catch((error) => {
        setİsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {" "}
      {isloading && <Loading />}
      <div className="flex justify-evenly mt-20">
        <Image src={ForgotPic} alt="login" width={400} height={500} />
        <div className="bg-white  border-gray-500 shadow-xl ">
          <h2 className="text-center text-orange-500 font-semibold text-3xl p-1">
            Reset Password
          </h2>

          <form
            typeof="submit"
            className="text-gray-500"
            onSubmit={resetPassword}
          >
            <div className="">
              <input
                className="w-full mb-1 border-gray-500 border-2 p-1"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="w-full mb-1 border-gray-500 border-2 bg-sky-600 p-1 text-white"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="flex justify-between text-gray-600">
            <button>
              <Link href="/pages/login"> -Login </Link>
            </button>
            <button>
              <Link href="/pages/register"> -Register </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
