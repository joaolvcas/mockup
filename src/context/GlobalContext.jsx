import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [brand, setBrand] = useState("arauco");

  return (
    <GlobalContext.Provider value={{ brand, setBrand }}>
      {children}
    </GlobalContext.Provider>
  );
}
