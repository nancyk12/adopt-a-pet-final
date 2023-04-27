import { UserCard } from 'react-ui-cards';

function Card ({animal}) {
    return (
    
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        
        <img className="br-100 h3 w3 dib" alt={animal.name} src={ animal.primary_photo_cropped} />
        <div>
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
        </div>
     </div>
    
)
}

export default Card;