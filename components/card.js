import React from 'react';

const  Card = (props) => {
  return (
    <div className="card" style={{background: props.card.color}}>
      <h1>{props.card.title}</h1>
      <p>{props.card.color}</p>
    </div>
  );
}

export default Card;