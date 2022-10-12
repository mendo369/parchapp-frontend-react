import React from "react";

import { Link } from "wouter";
import useUser from "../../hooks/useUser";

function usuario() {
  const { isLogged, user } = useUser();
  return (
    <>
      {isLogged ? (
        <section className="user-section">
          <button>
            <Link to="/user/create">Add Parche</Link>
          </button>
          <Link to="/user/profile">
            <img src={user.avatar} alt={user} className="user-avatar" />
          </Link>
        </section>
      ) : (
        <section className="signin-section">
          <button className="signin-button">
            <Link to="/auth/signin">Sign In</Link>
          </button>
        </section>
      )}
    </>
  );
}

export default usuario;
