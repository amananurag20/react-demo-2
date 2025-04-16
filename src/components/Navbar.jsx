import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "cyan", fontSize: "50px" }}>React Routing</h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
          fontWeight: "bolder",
          fontSize: "30px",
          textDecoration: "none",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <p>Home</p>
        </Link>
        <Link to="/product" style={{ textDecoration: "none", color: "white" }}>
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
  );
};

export default Navbar;
