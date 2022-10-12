// import { useContext, useCallback, useState, useEffect } from "react";

// import Context from "../context/UserContext";
// import loginService from "../services/login";

// function useUser() {
//   const { jwt, setJWT } = useContext(Context);
//   const [avatar, setAvatar] = useState("");

//   //con el useCallback evitamos que se cree la función cada que se cambia este componente, evitando así un loop infinito
//   const login = useCallback(
//     ({ userName, password }) => {
//       loginService({ userName, password })
//         .then((res) => {
//           const { token } = res;
//           setAvatar(res.avatar);
//           console.log(res.avatar);
//           console.log(avatar);
//           console.log(token);
//           console.log(jwt);
//           setJWT(token);
//         })
//         .catch((err) => console.error(err));
//     },
//     [setJWT, setAvatar]
//   );

//   const logout = useCallback(() => {
//     setJWT(null);
//   }, [setJWT]);

//   return {
//     isLogged: Boolean(jwt),
//     avatar,
//     jwt,
//     login,
//     logout,
//   };
// }

// export default useUser;

import { useContext, useCallback } from "react";

import { useLocation } from "wouter";

import Context from "../context/UserContext";
import loginService from "../services/login";

function useUser() {
  const { user, setUser } = useContext(Context);
  const [, navigate] = useLocation();

  //con el useCallback evitamos que se cree la función cada que se cambia este componente, evitando así un loop infinito
  const login = useCallback(
    ({ userName, password }) => {
      loginService({ userName, password })
        .then((res) => {
          const { userName, name, avatar, token } = res;
          setUser({ userName, name, avatar, token });
          console.log(res.avatar);
          console.log(user);
        })
        .catch((err) => console.error(err));
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser({});
    navigate("/");
  }, [setUser]);

  return {
    isLogged: Boolean(user.token),
    user,
    login,
    logout,
  };
}

export default useUser;
