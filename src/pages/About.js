import React from "react"
//import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

function About() {
    return (
        <div className="about-page-container">
         <img src="images/pet-hero.png" alt="" className="about-hero-image"/>
            <div className="about-page-content">
                <h1>About Adopt-A-Pet! About! About! There are millions of wonderful pets waiting to be adopted.</h1>
                <p>Our mission is to help you find one of these wonderful pets, and give them a loving home.</p>
            </div>
            <div className="about-page-cta">
                <h2>All you need is love...<br />and a pet.</h2>
                <Link className="link-button" to="/pets">Explore these pets.</Link>
            </div>
        </div>
    );
}

export default About;