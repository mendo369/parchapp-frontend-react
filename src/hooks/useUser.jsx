import { useContext, useCallback, useEffect } from "react";

import { useLocation } from "wouter";
import debounce from "just-debounce-it";

import likeParche from "../services/likeParche";
import saveParche from "../services/saveParche";

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
          const { userName, name, avatar, token, id } = res;
          const user = { userName, name, avatar, token, id };
          setUser(user);
          // setUser({ userName, name, avatar, token });
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
          console.log("respuesta del login", res);
        })
        .catch((err) => {
          alert(`error: ${err.message} | User or password invalid`);
        });
    },
    [setUser]
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
          console.error("error en register", err.message);
          if (err.message == "Conflict") {
            alert("Prueba con otro usuario");
          }
        });
    },
    [setUser]
  );

  const getParchesUser = useCallback(
    debounce(() =>
      getParchesUserService({ userName: user.userName }).then((res) => {
        setParchesU(res.parches);
      }, 1000)
    ),
    [setParchesU]
  );

  const createParche = useCallback(
    ({ parche }) => {
      createParcheService({ parche, token: user.token });
    },
    [user]
  );

  const Like = useCallback(({ id }) => {
    likeParche({ id, token: user.token });
  });
  const Save = useCallback(({ id }) => {
    saveParche({ id, token: user.token });
  });

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  }, [setUser]);

  return {
    isLogged: Boolean(user),
    user,
    getParchesUser,
    parchesU,
    login,
    register,
    createParche,
    Like,
    Save,
    logout,
  };
}

export default useUser;
