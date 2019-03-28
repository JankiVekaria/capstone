import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ property }) => {
  const { index, picture, city, address, bedrooms, bathrooms, carSpaces, price, _id } = property;

  return (

    <Link to={`/properties/${_id}`} style={{ textDecoration: 'none', color: '#000' }}>
      <div id={`card-${index}`} className="card">
        <img src={picture} alt={city} />
        <div className="details">
          <p className="location">
            {city}<br />
            {address}
          </p>
          <ul className="features">
            <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
            <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
            <li className="icon-car">{carSpaces} <span>parking spots</span></li>
          </ul>
          <p className="price"><span>Price: </span> ${price}</p>
        </div>
      </div>
    </Link>
  )
}


export default Card;