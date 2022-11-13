import React from "react";
import { Outlet } from "react-router-dom";
import Navigacia from "./Navigacia";

const SharedNav = () => {
  return (
    <>
      <Navigacia />

      <Outlet />
    </>
  );
};

export default SharedNav;
