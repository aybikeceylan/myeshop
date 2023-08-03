"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import LoginPic from "./login.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loader";
type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setİsLoading] = useState(false);
  const router = useRouter();

  const loginUser = (e: any) => {
    e.preventDefault();
    setİsLoading(true);
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setİsLoading(false);
        toast.success("Login Successful...");
        router.replace("/pages/");
      })
      .catch((error) => {
        setİsLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <>
      {isloading && <Loading />}
      <div className="flex justify-evenly mt-10">
        <Image src={LoginPic} alt="login" width={400} height={500} />
        <div className="bg-white  border-gray-500 shadow-xl">
          <h2 className="text-center text-orange-500 font-semibold text-3xl p-1">
            Login
          </h2>

          <form className="text-gray-500" onSubmit={loginUser}>
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
              <button
                className="w-full mb-1 border-gray-500 border-2 bg-sky-600 p-1 text-white"
                type="submit"
              >
                Login
              </button>
            </div>

            <button
              className="w-full mb-1 border-gray-500 border-2 p-1 "
              type="submit"
            >
              <Link href="/pages/forgotPassword"> Forgot Password</Link>
            </button>
            <p className="text-center m-4">-- or --</p>
          </form>
          <button className="flex w-full mb-1 border-gray-500 border-2 bg-orange-500 justify-center p-1">
            <FaGoogle color="#fff" /> Login With Google
          </button>
          <span className="flex justify-center text-gray-600">
            <p>Dont have an account?</p>
            <Link href="/pages/register">Register</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
