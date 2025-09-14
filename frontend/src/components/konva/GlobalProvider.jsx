import React, { createContext, useState, useContext, useEffect } from "react";
import { GB } from "./GB";

const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [info, setInfo] = useState({
    input1: "",
    input2: "",
    input3: "",
    checkbox1: "",
  });

  const updateInput = (name, value) => {
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Bind hàm updateInput cho GB
  useEffect(() => {
    GB.setUpdateInput(updateInput);
  }, []);

  return (
    <GlobalContext.Provider value={{ info, updateInput }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
}
