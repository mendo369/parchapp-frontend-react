import React, { Suspense } from "react";

import { useNearScreen } from "../../hooks/useNearScreen";

const CitiesLazy = React.lazy(() => import("./CitiesLazy")); //evitamos que se cargue este javascript desde un principio

import "../styles/cities.css";

export default function LazyCities() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={"Cargando"}>
        {isNearScreen ? <CitiesLazy /> : null}
      </Suspense>
    </div>
  );
}
