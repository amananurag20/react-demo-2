import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-red-600 h-[69px] flex justify-between text-white p-[15px] item-center">
        <h1 className="text-4xl font-bold">React Routing</h1>

        <div className="flex gap-10 font-extrabold text-3xl ">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p>Home</p>
          </Link>
          <Link
            to="/product"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Product</p>
          </Link>

          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <p>Login</p>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            <p>SignUp</p>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
