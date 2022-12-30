import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Menu } from "../Menu";
import Modals from "./../../components/modals/modals";

export const Main = () => {
  return (
    // <div className="@container">
    <div className="app relative flex flex-col">
      <Menu />
      <div className="@container flex-1">
        <div className="@4xl:mt-28 mt-20 ">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Modals />
    </div>
    // </div>
  );
};
