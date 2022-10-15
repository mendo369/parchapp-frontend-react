import React from "react";

import useUser from "../../hooks/useUser";

function avatar({ avatar, setState }) {
  const handleClick = (avatar) => {
    setState(avatar);
    console.log("handleClick setAvatar", avatar);
  };
  return (
    <div className="avatar" onClick={() => handleClick(avatar)}>
      <img src={avatar} alt={avatar} />
    </div>
  );
}

export default avatar;
