import React from "react";

import Avatar from "./avatar";

import "../styles/avatarsList.css";

function avatarsList({ avatars, setState, avatarR }) {
  return (
    <section className="avatars-list">
      {avatars.map((avatar) => {
        return (
          <Avatar
            avatar={avatar}
            key={avatar}
            setState={setState}
            avatarR={avatarR}
          />
        );
      })}
    </section>
  );
}

export default avatarsList;
