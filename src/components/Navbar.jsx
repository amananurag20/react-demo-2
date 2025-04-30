import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="bg-red-600 h-[69px] flex justify-between text-white p-[15px] item-center">
        <h1 className="text-4xl font-bold">React Routing</h1>
        {user.email}
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
          <Link to="/mobile" style={{ textDecoration: "none", color: "white" }}>
            <p>Mobile</p>
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
