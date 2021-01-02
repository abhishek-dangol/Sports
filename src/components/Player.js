import React from "react";
import { Link } from "react-router-dom";
const Player = ({ image, name, id, club, sport }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{club}</h4>
        <h4>{sport}</h4>
        <Link to={`/player/${id}`} className="btn btn-primary btn-details">
          Detailed Info
        </Link>
      </div>
    </article>
  );
};

export default Player;
