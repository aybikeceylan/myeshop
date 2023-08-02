import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterPic from "./register.png";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex justify-evenly mt-10">
      <div className="bg-white  border-gray-500 shadow-xl">
        <h2 className="text-center text-orange-500 font-semibold text-3xl p-1">
          Register
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
            <input
              className="w-full mb-1 border-gray-500 border-2 p-1"
              type="password"
              placeholder="Confirm Password"
              required
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
      <Image src={RegisterPic} alt="login" width={400} height={500} />
    </div>
  );
};

export default Login;
