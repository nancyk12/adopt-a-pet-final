import "./App.css";
import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";
import React from "react"
import { Link, NavLink } from "react-router-dom"



function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header id="header" class="bg-light text-center mb-4 p-3">
          <img className="header-logo" src={`./images/adopt-a-pet-logo.png`} alt="Adopt-A-Pet"/>
            <Link className="site-logo" to="/">#Adopt-A-Pet</Link>
            <nav>
                <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Pets
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src="../assets/images/avatar-icon.png" 
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Header;