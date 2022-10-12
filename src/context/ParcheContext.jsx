import React, { createContext, useState } from "react";

const ParcheContext = createContext();

export function ParchesContextProvider({ children }) {
  const [parches, setParches] = useState([]);

  return (
    <ParcheContext.Provider value={{ parches, setParches }}>
      {children}
    </ParcheContext.Provider>
  );
}

export default ParcheContext;
