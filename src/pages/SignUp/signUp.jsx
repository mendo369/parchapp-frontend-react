import React from "react";

import Logo from "../../components/Others/logo";

import { Link } from "wouter";

import "./styles.css";

function signUp() {
  return (
    <section className="container">
      <section className="signup">
        <Logo />
        <h2>Sign up</h2>

        <form className="form-signup">
          <label htmlFor="userName">User name</label>
          <input type="text" placeholder="User name" name="userName" />

          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name="password" />

          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
          />

          <section className="avatars">
            <h3>Chose your avatar</h3>
            <section className="select-avatar">
              <img src="" alt="img" />
              <img src="" alt="img" />
              <img src="" alt="img" />
            </section>
          </section>

          <button>Submit</button>
        </form>
        <Link to="/">Regresar a la página principal</Link>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <span>
            <Link to="/auth/signin">Ingresa aquí</Link>
          </span>
        </p>
      </section>
    </section>
  );
}

export default signUp;
