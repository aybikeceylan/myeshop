"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterPic from "./register.png";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import Loading from "@/components/Loader";
import { useRouter } from "next/navigation";
type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [isloading, setİsLoading] = useState(false);
  const router = useRouter();

  const registerUser = (e: any) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setİsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setİsLoading(false);
        toast.success("Registiretion Succesfull...");
        router.replace("/pages/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setİsLoading(false);
      });
    console.log(email, password, cPassword);
  };

  return (
    <>
      <ToastContainer />
      {isloading && <Loading />}
      <div className="flex justify-evenly mt-10">
        <div className="bg-white  border-gray-500 shadow-xl">
          <h2 className="text-center text-orange-500 font-semibold text-3xl p-1">
            Register
          </h2>

          <form className="text-gray-500" onSubmit={registerUser}>
            <div className="">
              <input
                className="w-full mb-1 border-gray-500 border-2 p-1"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full mb-1 border-gray-500 border-2 p-1"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="w-full mb-1 border-gray-500 border-2 p-1"
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <button
                className="w-full mb-1 border-gray-500 border-2 bg-sky-600 p-1 text-white"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>

          <span className="flex justify-center text-gray-600">
            <p>Already an account?</p>
            <Link href="/pages/login">Login</Link>
          </span>
        </div>
        <Image
          src={RegisterPic}
          alt="login"
          width={400}
          height={500}
          priority={true}
        />
      </div>
    </>
  );
};

export default Login;
