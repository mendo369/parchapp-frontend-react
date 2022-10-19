import React from "react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";

import useUser from "../../hooks/useUser";

import ListOfParches from "../../components/Parches/ListOfParches";

import "./styles.css";

function user() {
  const { user, logout, getParchesUser, parchesU } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    getParchesUser();
  }, []);
  return (
    <section className="user-profile">
      <section className="user-info">
        <button onClick={() => navigate("/")} className="return-button">
          Regresar 🏠
        </button>
        <div className="user-avatar">
          <img src={user.avatar} alt={user.userName} />
        </div>
        <div className="user-names">
          <h2>{user.userName}</h2>
          <h3>{user.name}</h3>
        </div>
        <div className="info-parches-user">
          <p>{parchesU.length} parches subidos 😎</p>
          <br />
          <button>
            <Link to="/user/create">Add Parche 🎠</Link>
          </button>
        </div>

        <button onClick={logout} className="logout-button">
          Logout 🚪
        </button>
      </section>

      <section className="parches-added-for-user">
        <ListOfParches parches={parchesU} />
      </section>
    </section>
  );
}

export default user;
