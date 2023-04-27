import React from 'react';

interface CardProps {
  packageName: string,
  price: number,
  src: string,
}

export const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.src} alt=''/>
      </div>
      <div className="card-content">
        <div className="card-title">
          <span>{props.packageName}</span>
        </div>
        <div className="card-price">
          <span>${props.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}