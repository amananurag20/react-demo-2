import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Product from "./components/Product";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Mobile from "./components/Mobile";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [count, setCount] = useState(1000);
  return (
    <>
      <ThemeContext.Provider
        value={{ theme: "dark", name: "aman", count, setCount }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<Product />}></Route>
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
