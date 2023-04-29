
 

import React from "react";
import { Link, NavLink } from "react-router-dom";
//import Logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <header>
      <NavLink className="site-logo" to="/">
        {/* <img src={Logo} alt="logo" /> */}
      </NavLink>
      <nav>
        <NavLink to="/">Pets</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;