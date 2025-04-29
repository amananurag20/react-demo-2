import React, { useEffect } from "react";

const ItemCard = () => {
  console.log("ItemCard rendered");

  useEffect(() => {
    console.log("ItemCard useEffect called");
  });

  return <div>ItemCard</div>;
};

export default ItemCard;
