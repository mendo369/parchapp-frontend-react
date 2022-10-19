import React from "react";
import { Link } from "wouter";

import { useParches } from "../../hooks/useParches";

import Nav from "../../components/Nav/Nav";
import ListOfParches from "../../components/Parches/ListOfParches";
import Loading from "../../components/Others/Loading";

function SearcResults({ params }) {
  const { keyword } = params;
  const keywordSet = keyword.split("")[0].toUpperCase() + keyword.substring(1);
  const { loading, parches } = useParches({ keyword: keywordSet });

  if (loading) {
    return (
      <>
        <div className="container-parchapp">
          <Nav />
          <div className="app-main">
            <Loading />
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container-parchapp">
        <Nav />
        <div className="app-main">
          <ListOfParches parches={parches} />

          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearcResults;
