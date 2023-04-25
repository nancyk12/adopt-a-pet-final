import React from "react";
import ReactDom from "react-dom/client";

import Home from "../pages/Home";
import About from "../pages/About";
import Pets from "../pages/Pets/Pets";
import PetDetail from "../pages/Pets/PetDetail";
import "../App.css";
import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";

import { Link, NavLink } from "react-router-dom"



function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
    <>
      <header>
        <Link className="site-logo" to="/">#Adopt-A-Pet</Link>
        <nav>
                <NavLink 
                    to="/" 
                    className={({isActive}) => isActive ? "active-link" : null}
                    >
                    Home
                </NavLink> 
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "active-link" : null}
                    >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>
          
                <NavLink 
                    to="/pets"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Pets
                </NavLink>

        </nav> <NavLink 
                    to="/login"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Login
                </NavLink>
      </header>
    </>  
    )
}

export default Header;