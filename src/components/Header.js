import React from "react";
import ReactDom from "react-dom/client";

import Home from "../pages/Home";
import About from "../pages/About";
import Pets from "../pages/Pets/Pets";
import PetDetail from "../pages/Pets/PetDetail";
//import Favorites from "..pages/Favorites";
import "../App.css";
import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";

import { Link, NavLink } from "react-router-dom"


	

function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#EA8A8A"
    }
    


  
    return (
    <>
      <header>

     
        <nav>
                <NavLink 
                    to="/" 
                    className={({isActive}) => isActive ? activeStyles : null}
                    >
                    Home
                </NavLink> 
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? activeStyles : null}
                    >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
          
                <NavLink 
                    to="/pets"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    Pets
                </NavLink>

                <NavLink 
                    to="/favorites"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    Favorites
                </NavLink>

                <NavLink 
                    to="/blog"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    Blog
                </NavLink>

                 <NavLink 
                    to="/login"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    Login
                </NavLink>
            </nav>
      </header>
    </>  
    )
}

export default Header;