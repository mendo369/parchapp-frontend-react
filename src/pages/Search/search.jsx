import React from "react";
import { Link } from "wouter";

import { useParches } from "../../hooks/useParches";

import Nav from "../../components/Nav/Nav";
import ListOfParches from "../../components/Parches/ListOfParches";

function SearcResults({ params }) {
  const { keyword } = params;

  const { loading, parches } = useParches({ keyword });

  if (loading) {
    return <div>Loading 🏄‍♀️</div>;
  }
  return (
    <>
      <Nav />
      <ListOfParches parches={parches} />
      <Link to="/">Home</Link>
    </>
  );
}

export default SearcResults;
