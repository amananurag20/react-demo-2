import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Product = () => {
  const data = useParams();

  return (
    <div>
      Product
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULpYuPcas5DFbICFFgawoEEdeOPuUm9lI2g&s"
        alt="image"
      ></img>
      <Outlet />
    </div>
  );
};

export default Product;
