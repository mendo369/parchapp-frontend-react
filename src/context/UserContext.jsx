import React, { useState } from "react";

const Context = React.createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [parchesU, setParchesU] = useState([]);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        parchesU,
        setParchesU,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
