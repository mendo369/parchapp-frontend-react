import React from "react";
import { Link } from "wouter";

import Search from "./search";
import Logo from "../Others/logo";
import Usuario from "./usuario";

import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <Logo></Logo>
      <Search></Search>
      <Usuario />
      {/* <Link to="/auth/signin">Sign In</Link> */}
      {/* <Link to="/auth/signup">Sign Up</Link> */}
    </nav>
  );
}

export default Nav;
