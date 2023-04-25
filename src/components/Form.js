//import "./App.css";
//import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";

function Form() {
    return (

 <div className="container">
  <h2>Form</h2>
    <form id="pet-form">
      <div className="form-group">
        <label for="animal">Animal</label>
        <span id="error"></span>
        <select id="animal" class="form-control form-control-lg mb-3">
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="barnyard">Barnyard</option>
        </select>
        <input type="number" id="zip" class="form-control form-control-lg" placeholder="Enter a 5 digit US zip code"
          autocomplete="off"/>
        <input type="submit" value="Find" class="btn btn-dark btn-lg btn-block mt-3"/>
        </div>
    </form>
    <div id="results"></div>
  </div>



    )

}

export default Form;