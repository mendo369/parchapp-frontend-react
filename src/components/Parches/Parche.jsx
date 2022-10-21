import React, { useEffect, useState } from "react";

import useUser from "../../hooks/useUser";
import Slider from "./slider";
import like from "../../assets/like.svg";
import liked from "../../assets/liked.svg";
import save from "../../assets/save.svg";
import saved from "../../assets/saved.svg";

import "../styles/parche.css";

function Parche({ parche }) {
  const { user, isLogged, Like, Save } = useUser();

  const [likeState, setLike] = useState(false);
  const [savedState, setSave] = useState(false);

  useEffect(() => {
    if (isLogged) {
      const LIKED = parche.likes.some((like) => like == user.id);
      if (LIKED) setLike(true);
    }
  }, []);

  // useEffect(() => {
  //   const SAVED = user.parchesSaved()
  //   if(SAVED) setSave(true)
  // }, []);

  const handleLike = (id) => {
    Like({ id });
  };
  const handleSave = (id) => {
    Save({ id });
  };
  const handleRemoveLike = (id) => {
    // Like({ id });
  };
  const handleRemoveSave = (id) => {
    // Save({ id });
  };

  return (
    <div className="parche">
      <div className="header">
        <div className="img-user">
          <img src={parche.user.avatar} alt="user profile" />
        </div>
        <div className="info-published">
          <h2 className="user-name">{parche.user.userName}</h2>
          <h3 className="date">{parche.date.split("T")[0]}</h3>
          <div className="geo-category">
            <h3 className="geo">🏙️ {parche.city}</h3>
            <h3 className="category">
              <span className={parche.category}></span>
              {parche.category}
            </h3>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="description">
          <p className="text-description">
            <span>{parche.place}</span> {parche.description}
          </p>
        </div>
        <Slider images={parche.media} />
      </div>
      <div className="footer">
        <div className={likeState ? "liked" : "like"}>
          <span
            onClick={
              isLogged
                ? () => {
                    setLike(!likeState);
                    handleLike(parche.id);
                  }
                : () => alert("Debes iniciar sesión para poder dar like")
            }
          >
            <img src={likeState ? liked : like} alt="like" />
          </span>
          {likeState ? parche.likes.length + 1 : parche.likes.length}
        </div>
        <div className={savedState ? "saved" : "save"}>
          <span
            onClick={
              isLogged
                ? () => {
                    setSave(!savedState);
                    handleSave(parche.id);
                  }
                : () => alert("Debes iniciar sesión para poder guardar")
            }
          >
            <img src={savedState ? saved : save} alt="save" />
          </span>
        </div>
        {/* Luego implementaremos los comentarios*/}
        {/* <div className="comments">
          <span>
            <img src={comment} alt="comments" />
          </span>
          {parche.comments}
        </div> */}
      </div>
    </div>
  );
}

export default React.memo(Parche);
