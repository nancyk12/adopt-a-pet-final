//import React from "react";
import {Link} from "react-router-dom";
//import { useEffect, useState } from "react";
//import { Client } from "@petfinder/petfinder-js";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Card, Row, Col } from "react-bootstrap";
//import Button from 'react-bootstrap/Button';
//import "./Cards.css";
import "./Cards.scss"
//import "../App.css";


const Cards = (props) => {
   
  const {animal} = props;
return (

<div className="wrapper">  
<div className="card">
<div key={animal.id} >
{/* <div style={{
						border: "1px solid",
						height: "400px",
						width: "200px",
						margin: "20px",
            overflow: "hidden",
					}}> */}
  <div className="card__img">
  {animal.primary_photo_cropped !== null ?
                  <img
                   style={{ width: "200px", height: "200px" }}
                   src={animal.primary_photo_cropped.full}/> 
                   : 
                   <img style={{ width: "200px", height: "200px" }} src="image/pet-photo-shoot.jpeg"/>}
  </div>
  <div className="card__body">
    <Link to={"/profile/" + animal.id}>
      <h3 className="card__title">{animal.name}</h3>
     </Link >
      <span className="card__price">{animal.species}</span>
      <br/>
      <span className="card__description"> {animal.breeds.primary}</span>
      <br/>
      <span className="card__description">{animal.age}  •  {animal.gender}</span>
      {/* <p>Color: {animal.colors.primary}</p> */}
      <p>{animal.contact.address.city}, {animal.contact.address.state} </p>
      {/* <p>About {animal.name}: {animal.description}</p> */}
      <button className="card__btn">Pet Profile</button>
  </div>
</div>   
</div> 
</div>

   
 );};

 export default Cards;