import React from "react";
import { Link, useParams } from "react-router-dom"
import {useEffect} from "react";
import { Client } from "@petfinder/petfinder-js";

function PetDetail() {


    const params = useParams()
    
    const [animal, setAnimal] = React.useState(null)

    useEffect(() => {
        const client = new Client({
			apiKey: process.env.REACT_APP_API_KEY,
			secret: process.env.REACT_APP_SECRET_KEY,
		});
        client.animal.show(params.id)
        .then(resp => {setAnimal(resp.data.animal)
       }); //setAnimal(data.animals))
    }, [params.id])

     return (
       <>
         <h1>Pet details page goes here.</h1>
         <div className="pet-detail-container">
        
            
            {/* <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} pets</span></Link> */}

          {animal ? (
                <div className="pet-detail">
                     <div /*className="pet-tile img"*/>
                         {animal.primary_photo_cropped !== null ?
                         <img
                        style={{ width: "600px", height: "600px" }}
                        src={animal.primary_photo_cropped.full}/> 
                        : 
                        <img style={{ width: "300px", height: "300px" }} src="images/pet-photo-shoot.jpeg"/>}
                      </div> 
                    <i className={`pet-breeds ${animal.type} selected`}>{animal.type}</i>
                    <h2>{animal.name}</h2>
                    <p className="animal-age"><span>{animal.age}</span></p>
                    <p className="animal-age"><span>{animal.gender}</span></p>
                    <p className="animal-age"><span>{animal.breeds.primary}</span></p>
                    <p>{animal.description}</p>
                    <button className="link-button">Adopt this {animal.species}</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div> 
       </>
  )
}

export default PetDetail;
