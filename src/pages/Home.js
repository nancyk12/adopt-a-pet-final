import React from "react"
import { Link } from "react-router-dom"
import Pets from "./Pets/Pets";
import "../App.css";

export default function Home() {
    return (
     <> 
        <div className="home-container">
         
            <h1>All you need is love … And a pet</h1>
            <p>Search for your new best friend. </p>
            <Link to="pets">Find your pet!</Link>
        </div>
        <Pets/>
     </> 
    )
};
