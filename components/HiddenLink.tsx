"use client";
import { useAppSelector } from "@/app/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const showOnLogin = (props: Props) => {
  //     //@ts-ignore
  // const {isLoggedIn } = useAppSelector((state:any) => state.auth.value?.isLoggedIn);

  return <div>showOnLogin</div>;
};

export default showOnLogin;
