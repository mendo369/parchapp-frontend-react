import { useContext, useCallback } from "react";

import { useLocation } from "wouter";

import Context from "../context/UserContext";
import loginService from "../services/login";
import registerService from "../services/register";
import createParcheService from "../services/createParche";
import { useEffect } from "react";

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
          navigate("/");
          console.log("respuesta del login", res);
        })
        .catch((err) => {
          alert(`error: ${err.message} | User or password invalid`);
        });
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
    ({ userRegister }) => {
      registerService({
        userName: userRegister.userName,
        name: userRegister.name,
        email: userRegister.email,
        avatar: userRegister.avatar,
        password: userRegister.password,
      })
        .then((res) => {
          console.log("respuesta al register", res);
        })
        .then(() => {
          navigate("/");
          login({
            userName: userRegister.userName,
            password: userRegister.password,
          });
        })
        .catch((err) => {
          console.error("error en register", err);
        });
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
    register,
    createParche,
    logout,
  };
}

export default useUser;
