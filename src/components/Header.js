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
import  { useAuth } from "../Auth/AuthContext";
import { removeUserToken } from "../Auth/authLocalStorage";
import { useNavigate } from "react-router-dom";


	

function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#EA8A8A"
    }

    const { isVerified, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		const logoutResult = await logout();
		if (logoutResult) navigate("/login");
	};
    


  
    return (
    <>
     <header>
      <Link className="site-logo" to="/">#Adopt-A-Pet</Link>
     
        <nav>
            <Link to="/">Home</Link>
            <Link 
                to="/about"
                className={({isActive}) => isActive ? activeStyles : null}
                >About</Link>
            <Link 
                to="/blog"
                className={({isActive}) => isActive ? activeStyles : null}
                >Blog</Link>
            
                {"    "}
                {isVerified && <Link to="/home/blog-form">Create New Blog</Link>} {"    "}
            <Link 
                to="/pets"
                className={({isActive}) => isActive ? activeStyles : null}
                >Search Pets</Link>  

                {"    "}
                {isVerified && <Link to="/favorites">Favorites</Link>} {"    "}
                {isVerified && <button className="logout-link-button" onClick={handleLogout}>Logout</button>}{" "}
                {!isVerified && <Link to="/register">Register</Link>}
                {"  "}
                {!isVerified && <Link to="/login"><button className="link-button">Login</button></Link>}

                {/* <NavLink 
                    to="/" 
                    className={({isActive}) => isActive ? activeStyles : null}
                    >
                    Home
                </NavLink>  */}
               
                {/* <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? activeStyles : null}
                >About</NavLink> */}
          
                {/* <NavLink 
                    to="/pets"
                    className={({isActive}) => isActive ? activeStyles : null}
                >Pets</NavLink> */}

                {/* <NavLink 
                    to="/favorites"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    Favorites
                </NavLink> */}

                {/* <NavLink 
                    to="/blog"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    Blog
                </NavLink> */}

                 {/* <NavLink 
                    to="/login"
                    className={({isActive}) => isActive ? activeStyles : null}
                >
                    Login
                </NavLink> */}
            </nav>
     </header>
    </>  
    )
}

export default Header;