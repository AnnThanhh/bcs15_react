import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../component/Router/HeaderHome";

const UserPageMaster = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url(https://picsum.photos/2000/2000)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeaderHome />
      <Outlet />
    </div>
  );
};

export default UserPageMaster;
