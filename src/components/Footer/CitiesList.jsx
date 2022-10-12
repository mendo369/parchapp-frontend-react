import React from "react";

import City from "./City";

import "../styles/cities.css";

export default function CitiesList({cities}) {

  return (
    <section className="cities">
      {cities.map((cityA) => (
        <City key={cityA.name} city={cityA.name} />
      ))}
    </section>
  );
}
