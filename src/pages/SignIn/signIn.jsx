import React, { useState, useEffect } from "react";

import { Link, useLocation } from "wouter";
import useUser from "../../hooks/useUser";

import Logo from "../../components/Others/logo";

import "./styles.css";

function signIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation();
  const { isLogged, login } = useUser();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ userName, password });
    // navigate("/");
  };

  return (
    <section className="container">
      <section className="signin">
        <div className="logo">
          <Logo />
        </div>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit} className="form-signin">
          <label htmlFor="userName">User</label>
          <input
            type="text"
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button>Submit</button>
        </form>
        <br />
        <p>
          <Link to="/">Regresar a la página principal</Link>
        </p>
        <br />
        <p>
          ¿No tienes una cuenta? crea una{" "}
          <span>
            <Link to="/auth/signup">aquí</Link>
          </span>
        </p>
      </section>
    </section>
  );
}

export default signIn;
