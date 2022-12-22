import React from "react";
import {NavLink,  Link } from "react-router-dom";

const Card = ({data: {flag, population, region, capital, name}}) => {
  return (
    <>
    
      <Link to={`/intro/${name}`}>
        <div className="card">
          <img src={flag} className="card__img" alt="images" />
          <div className="card__body">
            <h2 className="card__title">{name}</h2>
            <p className="card__text">
              Population: <strong>{population}</strong>
            </p>
            <p className="card__text">
              Region: <strong>{region}</strong>
            </p>
            <p className="card__text">
              Capital: <strong>{capital}</strong>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
