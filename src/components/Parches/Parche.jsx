import React from "react";

import Slider from "./slider";

import "../styles/parche.css";

import like from "../../assets/like.svg"

function Parche({ parche }) {
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
        <div className="like">
          <span>
            <img src={like} alt="like" />
          </span>
          {parche.likes.length}
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
