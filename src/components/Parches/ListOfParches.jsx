import React from "react";

import Parche from "../../components/Parches/Parche";

import "../styles/parche.css";

function ListOfParches({ parches }) {
  return (
    <section className="list-of-parches">
      {parches.map((parche) => (
        <Parche parche={parche} key={parche.id} />
      ))}
    </section>
  );
}

export default ListOfParches;
