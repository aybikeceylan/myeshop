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
      <div>
        <h2>Login</h2>

        <form className="bg-black text-white">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="--btn --btn-primary --btn-block">
            Login
          </button>
          <div></div>
          <p>-- or --</p>
        </form>
        <button className="">
          <FaGoogle color="#fff" /> Login With Google
        </button>
        <span>
          <p>Dont have an account?</p>
          <Link href="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
