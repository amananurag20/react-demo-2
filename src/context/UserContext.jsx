import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ name: "aman", user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
