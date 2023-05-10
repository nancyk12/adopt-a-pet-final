import React from "react";
import "./Favorites.css"; // Import the CSS file

function Favorites({ animal }) { //Access "animal" prop
  const [favorites, setFavorites] = React.useState([]);

  // Function to add the animal to favorites
  const addToFavorites = () => {
    // Check if the animal is already in favorites
    const animalExists = favorites.some((favAnimal) => favAnimal.id === animal.id);

    if (!animalExists) {
      // Add the animal to favorites
      setFavorites((prevFavorites) => [...prevFavorites, animal]);
      alert(`${animal.name} added to favorites!`);
    } else {
      alert(`${animal.name} is already in favorites!`);
    }
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((favAnimal) => (
            <li key={favAnimal.id}>{favAnimal.name}</li>
          ))}
        </ul>
      )}
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default Favorites;

// import React from "react";
// import { Link, useParams } from "react-router-dom"
// import {useEffect} from "react";
// import { Client } from "@petfinder/petfinder-js";

// //import React, { useContext } from "react";
// //import { ShopContext } from "../../assess/shop-assess";
// export const favorites = (props) => {
//   const { id, name, type, breeds, image } = props.data;
//   const { favoritesItems, addToFavorites, removeFromFavorites, updateCartItemCount } =
//     useContext(ShopContext);
//   return (
//     <div className="cartInventory">
//       <img src={productImage} />
//       <div className="item-description">
//         <p>
//           <b>{productName}</b>
//         </p>
//         <p> Price: ${price}</p>
//         <div className="countHandler">
//           <button onClick={() => removeFromCart(id)}> - </button>
//           <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           />
//           <button onClick={() => addToCart(id)}> + </button>
//         </div>
//       </div>
//     </div>
//   );
// };