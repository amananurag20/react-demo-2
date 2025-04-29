import React, { useEffect, memo } from "react";

const Footer = ({ count, setCount }) => {
  console.log("footer rendered");

  return (
    <div>
      Footer
      <br></br>
      <button
        onClick={() => {
          setCount(count + 1000);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default memo(Footer);
