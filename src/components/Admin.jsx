import React, { useEffect, useState } from "react";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Admin = () => {
  const [productData, setProductData] = useState([]);

  const dispatch = useDispatch();

  const fetchStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setProductData(json);
  };

  useEffect(() => {
    fetchStore();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  if (productData.length == 0) {
    return <div>Loading......</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Admin Product Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-3">
              {item.description}
            </p>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Category:</span> {item.category}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
              <span className="font-medium">Price:</span> ${item.price}
              <span className="font-medium">Rating:</span> {item.rating?.rate}{" "}
              ⭐
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
