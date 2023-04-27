//import axios from "axios"; //axios is a 3rd party library that helps us with api calls
import React from "react";
import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";
import Cards from "./Cards";
import "./Cards.css";


function SearchBar(){
    const [animals, setAnimals] = useState([]);
	const [selected, setSelected] = useState("");
	const [zipcode, setZipcode] = useState();
	const [inputField, setInputField] = useState("");

	//useEffect: first argument , takes in anonymous callback function, secont argument, dependency array 
	useEffect(() => {
		//new Client does a fetch call to the petfinder API for authorization
		const client = new Client({
			apiKey: process.env.REACT_APP_API_KEY,
			secret: process.env.REACT_APP_SECRET_KEY,
		});
		const fetchAnimalData = async () => {
			//once authorized, you can do fetch call for animal information
			const animalData = await client.animal.search({
				type: selected,
				location: zipcode,
			});
			setAnimals(animalData.data.animals);
		};
		fetchAnimalData();
	}, [zipcode, selected]);

	const handleSelectChange = (e) => {
		setSelected(e.target.value);
	};
	const handleZipCodeChange = (e) => {
		setInputField(e.target.value);
	};
	const handleSubmit = () => {
		setZipcode(inputField);
	};
	return (
	  <div className="App">
		<h1>Pets</h1>

		<div className="search-container"> 

		<div className="form-container">
            <label className="label" htmlFor="query">Select Pet Type</label>
                <select className="form-textarea" value={selected} onChange={handleSelectChange}>
                    <option>Select Pet Type</option>
                    <option value="Dog"> Dogs</option>
                    <option value="Cat"> Cats</option>
                    <option value="Bird"> Birds</option>
					<option value="Rabbit"> Rabbits</option>
                    <option value="Barnyard"> Others</option>
                </select>

				<br/>
                <label className="form-label" htmlFor="query">ZIP Code</label>
                <input className="form-input" type="text" name="query"
                
                    value={inputField}
                    placeholder="Zipcode, i.e. 90210"
                    onChange={handleZipCodeChange}
                />
                <button className="button" onClick={handleSubmit}>Search </button>
			 </div>
		   </div>


			<div className="card-list-container">
			  <div className="card-list">
				{animals.length > 0 &&
				animals.map((animal) => {
					return (
						<div>	
                       
                         <Cards animal={animal}/>
                        </div> 
					  
						);
					})	}
			</div>
			</div>
					 
	</div>
	)				
}
			
export default SearchBar;













