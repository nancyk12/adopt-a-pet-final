import React, { useEffect } from "react";
import axios from "axios";

function FavoriteButton() {

    useEffect(() => {

      const variable = {
        userFrom: props.userForm,
        AnimalImage: { type: String, require: true },
        name: { type: String, require: true },
        type: { type: String, require: true },
        breeds: { type: String, require: true },
        location: { type: String, require: true },
        id: { type: String, default: uuidv4 },
        }



        // axios.post(`${url}/favorites/create-favorite`, newFavorite)
        //     .then(response => {

        //     })

    }, [])


 return ( 
  <div>
    <button className="link-button" onclick>Add to Favorites</button>
  </div>
 );
}

export default FavoriteButton