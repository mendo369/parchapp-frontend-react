import React, { useState, useEffect } from "react";

import { Link, useLocation } from "wouter";
import getAvatars from "../../services/getAvatars";
import useUser from "../../hooks/useUser";

import Logo from "../../components/Others/logo";
import AvatarsList from "../../components/Others/avatarsList";

import "./styles.css";

function signUp() {
  const [, navigate] = useLocation();
  const { register, avatarRegister } = useUser();

  const [avatars, setAvatars] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getAvatars().then((res) => {
      setAvatars(res);
      console.log("avatars: ", res);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { userName, name, email, avatar, password };
    register({ userRegister: user });
  };

  return (
    <section className="container">
      <section className="signup">
        <div className="logo">
          <Logo />
        </div>
        <h2>Sign up</h2>

        <section className="avatars">
          <h3>Chose your avatar</h3>
          <section className="select-avatar">
            <AvatarsList
              avatars={avatars}
              setState={setAvatar}
              avatarR={avatar}
            />
          </section>
        </section>

        <form className="form-signup" onSubmit={handleSubmit}>
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            placeholder="User name"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Submit</button>
        </form>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <span>
            <Link to="/auth/signin">Ingresa aquí</Link>
          </span>
        </p>
        <br />
        <p>
          <Link to="/">Regresar a la página principal</Link>
        </p>
      </section>
    </section>
  );
}

export default signUp;
