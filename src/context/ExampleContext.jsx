import React, { useState } from "react";
import { createContext } from "react";

export const ExampleContext = createContext();

const dataR = {
  name: "luis",
  age: 20,
};

export const ExampleProvider = ({ children }) => {
  const [data, setData] = useState(dataR);
  return (
    <ExampleContext.Provider value={{ data, setData }}>
      {children}
    </ExampleContext.Provider>
  );
};
