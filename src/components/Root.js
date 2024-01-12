import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
