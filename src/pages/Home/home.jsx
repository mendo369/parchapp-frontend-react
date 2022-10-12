import React, { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";

import ListOfParches from "../../components/Parches/ListOfParches";
import Loading from "../../components/Others/Loading";
import Cities from "../../components/Footer/CitiesSection";
import Nav from "../../components/Nav/Nav";

import { useParches } from "../../hooks/useParches";
import { useNearScreen } from "../../hooks/useNearScreen";

import "./styles.css";

function home() {
  const { loading, parches, setPage } = useParches();
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
    distance: "1000px",
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <section className="parchapp-app">
      <Nav />
      <div className="app-main">
        <div className="app-parches">
          {loading ? (
            <Loading />
          ) : (
            <>
              <ListOfParches parches={parches} />
              <div id="visor" ref={externalRef}></div>
            </>
          )}
        </div>
        <div className="app-cities">
          <Cities />
        </div>
      </div>
    </section>
  );
}

export default home;
