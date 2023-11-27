import React from "react";
import { createContext, useState } from "react";
export const Context = createContext();
export const themeProvider = ({ children }) => {
  const [Context, setTheme] = useState("dark");
  const switchDark = () => {
    setTheme("dark");
  };
  const switchlight = () => {
    setTheme("light");
  };
  return (
    <themeProvider value={`${(switchDark, switchlight, theme)}`}>
      <div className={`${theme}anim`}>{children}</div>
    </themeProvider>
  );
};

export default Context;
