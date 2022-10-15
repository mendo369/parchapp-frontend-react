import React, { useState } from "react";

function avatar({ avatar, setState, avatarR }) {
  const handleClick = (avatar) => {
    setState(avatar);
  };
  return (
    <div
      className={avatar === avatarR ? "avatar-selected" : "avatar"}
      onClick={() => handleClick(avatar)}
    >
      <img src={avatar} alt={avatar} />
    </div>
  );
}

export default avatar;
