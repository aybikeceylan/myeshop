import React from "react";
import Image from "next/image";
import Link from "next/link";
import ForgotPic from "./forgot.png";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex justify-evenly mt-20">
      <Image src={ForgotPic} alt="login" width={400} height={500} />
      <div className="bg-white  border-gray-500 shadow-xl ">
        <h2 className="text-center text-orange-500 font-semibold text-3xl p-1">
          Reset Password
        </h2>

        <form className="text-gray-500">
          <div className="">
            <input
              className="w-full mb-1 border-gray-500 border-2 p-1"
              type="text"
              placeholder="Email"
              required
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
  );
};

export default Login;
