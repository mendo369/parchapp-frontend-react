import React from "react";

import Slider from "./slider";

import "../styles/parche.css";

import mapPin from "../../assets/map-pin.svg";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";

function Parche({ parche }) {
  return (
    <div className="parche">
      <div className="header">
        <div className="img-user">
          <img src={parche.user.avatar} alt="user profile" />
        </div>
        <div className="info-published">
          <h2 className="user-name">{parche.user.userName}</h2>
          <h3 className="date">{parche.date}</h3>
          <h3 className="geo">
            {parche.city}{" "}
            <span>
              <img src={mapPin} alt="map-pin" />
            </span>
          </h3>
        </div>
      </div>
      <div className="body">
        <div className="description">
          <p className="texto-description">
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
