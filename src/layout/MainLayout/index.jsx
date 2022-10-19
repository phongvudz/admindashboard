import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div>
      MainLayout
      <Outlet />
      {children}
    </div>
  );
};

export default MainLayout;
