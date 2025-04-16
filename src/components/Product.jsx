import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const data = useParams();
  console.log(data.id);

  return (
    <div>
      Product
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULpYuPcas5DFbICFFgawoEEdeOPuUm9lI2g&s"
        alt="image"
      ></img>
    </div>
  );
};

export default Product;
