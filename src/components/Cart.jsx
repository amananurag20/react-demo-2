import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log({ cartItems });

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length == 0) {
    return (
      <div className="text-4xl font-bold text-center">
        {" "}
        Cart is empty! add item to cart
      </div>
    );
  }

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <div className="flex justify-center item-center">
        <button
          onClick={handleClearCart}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition"
        >
          Clear cart
        </button>
      </div>
      {cartItems.map((item, index) => {
        return (
          <div key={index}>
            <div className="p-5 m-4 flex gap-4 justify-between">
              <img src={item.image} className="w-32"></img>
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
                Buy now
              </button>
              <button
                onClick={function () {
                  handleDelete(item);
                }}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition"
              >
                Delete item
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
