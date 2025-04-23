import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(1000);
  const [position, setPosition] = useState({ x: "", y: "" });

  const handleClick = () => {
    setCount(count + 1000);
  };

  useEffect(() => {
    const handleMove = (event) => {
      console.log(event.clientX, event.clientY);
      let newPosition = { x: event.clientX, y: event.clientY };
      setPosition(newPosition);
    };
    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div>
      <h1 className="bg-green-800 text-4xl font-bold text-white">Homepage</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7YIr1Jn_KCVqK50iJqvWkudYKoNiJEh_jQ&s"
        alt="img"
      ></img>
      <h1 className="font-bold text-5xl">Count :{count}</h1>

      <button
        className="bg-red-500 px-5 py-2 rounded-2xl"
        onClick={handleClick}
      >
        Increase counter
      </button>

      <h1 className="text-5xl font-bold">
        X/Y: {position.x} /{position.y}
      </h1>
    </div>
  );
};

export default HomePage;
