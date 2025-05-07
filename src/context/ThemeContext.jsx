import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [count, setCount] = useState(1000);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ count, setCount, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
