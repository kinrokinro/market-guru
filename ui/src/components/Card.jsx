import React from 'react';
import { images } from '../images';

const Card = ({ title, handleClick, index }) => {
  return (
    <div className="card">
      <img className="card__img" src={images[title]} alt={title} />
      <h4>{title}</h4>
      <a onClick={() => handleClick(title)}>Buy</a>
      <span>{index}</span>
    </div>
  );
};

export default Card;
