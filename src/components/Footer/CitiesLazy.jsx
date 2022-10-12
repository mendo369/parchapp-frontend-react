import React, { useState, useEffect } from "react";

import CitiesList from "./CitiesList";

import getCities from "../../services/getCities";

export default function CitiesLazy() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities().then(setCities);
  }, []);

  return <CitiesList cities={cities} />;
}
