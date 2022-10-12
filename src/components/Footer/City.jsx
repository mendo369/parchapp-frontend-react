import React from "react";

import { Link } from "wouter";

import "../styles/cities.css";

function City({ city }) {
  return (
    <div className="city">
      <Link to={`/search/${city}`}>{city}</Link>
    </div>
  );
}

export default City;
