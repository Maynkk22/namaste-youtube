import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Body;
