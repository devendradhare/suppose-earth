"use client";
import React, { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
  const [hello, setHello] = useState("hello world");
  const [theme, setTheme] = useState("dark");

  return (
    <StoreContext.Provider value={{ hello, setHello, theme, setTheme }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
