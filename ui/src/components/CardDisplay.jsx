import React from 'react';
import Card from './Card.jsx';
import Loader from './Loader.js';

const CardDisplay = ({ playerNames, handleClick }) => {
  const cards = playerNames.map((title, index) => (
    <Card
      title={title}
      handleClick={handleClick}
      index={index + 1 < 10 ? `0${index + 1}` : index + 1}
      key={title}
    />
  ));

  return (
    <div>
      <div className="card-wrapper">
        {playerNames.length ? cards : <Loader />}
      </div>
    </div>
  );
};

export default CardDisplay;
