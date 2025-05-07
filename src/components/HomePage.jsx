import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useContext,
} from "react";
import Footer from "./Footer";
import Header from "./Header";
import ItemCard from "./ItemCard";
import ThemeContext from "../context/ThemeContext";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const HomePage = () => {
  const [count, setCount] = useState(1000);
  const dispatch = useDispatch();

  console.log("homepage rendered");

  const handleAddCart = () => {
    let item = {
      name: "mobile",
      price: "20000",
      brand: "samsung",
      rating: "2000",
    };
    dispatch(addItem(item));
  };

  const handleClick = useCallback(() => {
    setCount(count + 1000);
    console.log(count);
  }, [count]);

  const getNumber = () => {
    let ans = 0;
    for (let i = 0; i < 1000000000; i++) {
      ans += i;
    }
    return ans;
  };

  let result = useMemo(() => {
    return getNumber();
  }, []);

  const info = useMemo(() => {
    return [1, 2, 4, 5]; //#12345
  }, []);
  return (
    <div>
      <h1 className="bg-green-800 text-4xl font-bold text-white">Homepage</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7YIr1Jn_KCVqK50iJqvWkudYKoNiJEh_jQ&s"
        alt="img"
      ></img>
      <h1 className="text-4xl font-semibold">result: {result}</h1>
      <p className="text-4xl font-semibold">{count}</p>
      <button
        className="p-4 bg-red-500 text-white text-3xl"
        onClick={handleClick}
      >
        Increase its value
      </button>
      <Footer data={info} count={count} setCount={setCount} />

      <button
        className="p-4 bg-red-500 text-white text-3xl"
        onClick={handleAddCart}
      >
        add to cart
      </button>
    </div>
  );
};

export default HomePage;
