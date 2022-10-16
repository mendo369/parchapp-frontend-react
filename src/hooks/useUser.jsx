import { useContext, useCallback, useEffect } from "react";

import { useLocation } from "wouter";
import debounce from "just-debounce-it";

import Context from "../context/UserContext";
import loginService from "../services/login";
import registerService from "../services/register";
import getParchesUserService from "../services/getParchesUser";
import createParcheService from "../services/createParche";

function useUser() {
  const { user, setUser, parchesU, setParchesU } = useContext(Context);
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

  const getParchesUser = useCallback(
    debounce(() =>
      getParchesUserService({ token: user.token }).then((res) => {
        setParchesU(res.parches);
      }, 1000)
    ),
    [setParchesU]
  );

  const logout = useCallback(() => {
    setUser({});
    navigate("/");
  }, [setUser]);

  return {
    isLogged: Boolean(user.token),
    user,
    getParchesUser,
    parchesU,
    login,
    register,
    createParche,
    logout,
  };
}

export default useUser;
