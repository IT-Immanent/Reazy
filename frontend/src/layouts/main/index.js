import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import "./mainLayout.css"

const MainLayout = () => {
    const { isLoggedIn } = useSelector((state) => state.auth)

    if (isLoggedIn) {
      return <Navigate to="/app" />;
    }

  return (
    <>
      <section>
        <div className="Agent_bgg_data">
          <SideBar />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MainLayout;
