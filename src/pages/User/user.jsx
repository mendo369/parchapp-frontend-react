import React from "react";

import useUser from "../../hooks/useUser";

import "./styles.css";

function user() {
  const { user, logout } = useUser();
  return (
    <section className="user-profile">
      <section className="user-info">
        <img src={user.avatar} alt={user.userName} />
        <div>
          <h2>{user.userName}</h2>
          <h3>{user.name}</h3>
        </div>
        <button onClick={logout}>Logout</button>
      </section>
      <section className="option-views">
        <button>op1</button>
        <button>op2</button>
        <button>op3</button>
      </section>
      {/* <section className="parchess-added-for-user"></section> */}
    </section>
  );
}

export default user;
