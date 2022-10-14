import { useContext, useCallback } from "react";

import { useLocation } from "wouter";

import Context from "../context/UserContext";
import loginService from "../services/login";
import createParcheService from "../services/createParche";

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
          // localStorage.setItem("session", user);
        })
        .catch((err) => console.error(err));
    },
    [setUser]
  );

  const createParche = useCallback(
    ({ parche }) => {
      createParcheService({ parche, token: user.token });
    },
    [user]
  );
  const register = useCallback(
    ({ user }) => {
      createParcheService({ parche, token: user.token });
    },
    [user]
  );

  const logout = useCallback(() => {
    setUser({});
    navigate("/");
  }, [setUser]);

  return {
    isLogged: Boolean(user.token),
    user,
    login,
    createParche,
    logout,
  };
}

export default useUser;
