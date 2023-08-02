import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import LoginPic from "./login.png";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex justify-evenly">
      <Image src={LoginPic} alt="login" width={400} height={500} />
      <div className="bg-white  border-gray-500 shadow-xl">
        <h2 className="text-center text-orange-500 font-semibold text-3xl p-1">
          Login
        </h2>

        <form className="text-gray-500">
          <div className="">
            <input
              className="w-full mb-1 border-gray-500 border-2 p-1"
              type="text"
              placeholder="Email"
              required
            />
            <input
              className="w-full mb-1 border-gray-500 border-2 p-1"
              type="password"
              placeholder="Password"
              required
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
            Forgot Password
          </button>
          <p className="text-center m-4">-- or --</p>
        </form>
        <button className="flex w-full mb-1 border-gray-500 border-2 bg-orange-500 justify-center p-1">
          <FaGoogle color="#fff" /> Login With Google
        </button>
        <span className="flex justify-center">
          <p>Dont have an account?</p>
          <Link href="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
