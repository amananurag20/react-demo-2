import React, { useEffect, useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Product = () => {
  const data = useParams();
  const inputRef = useRef(); // {current: undefined}
  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full mt-8 text-center">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Product Page
        </h1>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULpYuPcas5DFbICFFgawoEEdeOPuUm9lI2g&s"
          alt="Product"
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          onClick={handleClick}
        >
          Focus
        </button>
      </div>
      <div className="mt-6 w-full max-w-3xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
