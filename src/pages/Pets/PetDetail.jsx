import React from "react";
import { useParams } from "react-router-dom"
import {useEffect} from "react";


function PetDetail() {


    const params = useParams()
    
    const [animal, setAnimal] = React.useState(null)

    React.useEffect(() => {
        fetch(`/animal/${params.id}`)
            .then(res => res.json())
            .then(data => console.log(data)) //setAnimal(data.animals))
    }, [params.id])

     return (
       <>
         <h1>Pet details page goes here.</h1>
{/* //         <div className="pet-detail-container">
//             {animal ? (
                <div className="pet-detail">
                    <img src={animal.animal.primary_photo_cropped.full} />
                    <i className={`pet-breeds ${animal.breeds} selected`}>{animal.breeds}</i>
                    <h2>{animal.name}</h2>
                    <p className="animal-age"><span>${animal.age}</span>/day</p>
                    <p>{animal.description}</p>
                    <button className="link-button">Adopt this {animal.species}</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div> */}
       </>
  )
}

export default PetDetail;
