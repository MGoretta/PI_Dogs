import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './card.css';

function Card({dog}) {
  const {name, temperament, weight, reference_image_id, id} = dog;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Construir la URL completa utilizando la base y el reference_image_id
    const fullImageUrl = `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`;
    setImageUrl(fullImageUrl);
  }, [reference_image_id]);

  const weightString = `${weight.imperial} (imperial) / ${weight.metric} (metric)`;

  return (
    <div className="card-container">
      <Link to ={`/home/${id}`}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>{temperament}</p>
      <p>{weightString}</p>
      </Link>
    </div>
  );
}

export default Card;
