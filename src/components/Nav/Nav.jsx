import React from "react";
import { Link } from "wouter";

import Search from "./search";
import Logo from "../Others/logo";
import Usuario from "./usuario";

import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <div className="container-nav">
        <Logo></Logo>
        <Search></Search>
        <Usuario />
      </div>
    </nav>
  );
}

export default Nav;
