import React, { useEffect } from "react";

const Header = () => {
  console.log("header rendered");
  useEffect(() => {
    console.log("header useEffect called");
  });
  return <div>Header</div>;
};

export default Header;
