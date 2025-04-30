import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

const Mobile = () => {
  const data = useContext(ThemeContext);
  console.log(data);
  const userData = useContext(UserContext);
  console.log(userData);

  return (
    <div>
      Mobile{userData.user.email}
      <img src="https://www.techadvisor.com/wp-content/uploads/2025/04/best-phones-2025-1.jpg?quality=50&strip=all"></img>
    </div>
  );
};

export default Mobile;
