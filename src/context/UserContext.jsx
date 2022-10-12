// import React, { useState } from "react";

// const Context = React.createContext({});

// export function UserContextProvider({ children }) {
//   const [jwt, setJWT] = useState(null);

//   return (
//     <Context.Provider
//       value={{
//         jwt,
//         setJWT,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// }

// export default Context;
import React, { useState } from "react";

const Context = React.createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
