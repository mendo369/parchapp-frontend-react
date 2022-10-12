import React, { useState } from "react";
import { useLocation } from "wouter";

import searchImg from "../../assets/search.svg";
import useTitle from "../../hooks/useTitle";

function search({ onSubmit }) {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  // const handleSubmitSearchForm = useCallback(
  //   ({ keyword }) => {
  //     pushLocation(`/search/${keyword}`);
  //   },
  //   [pushLocation]
  // );
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
    // onSubmit({ keyword });
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a city"
          onChange={handleChange}
          value={keyword}
        />
        <img src={searchImg} alt="search" />
      </form>
    </section>
  );
}

export default React.memo(search); //si las props no cambian no se vuelve a renderizar el componente
