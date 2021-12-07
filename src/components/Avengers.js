import React from "react";
import { Link } from "react-router-dom";

const Avengers = ({ avengers }) => {
  return (
    <div>
      <h1>Avengers</h1>

      {avengers.map((avenger) => {
        return (
          <Link
            to={`/avengers/${avenger.id}`}
            key={avenger.id}
            className="characters-list-wrapper"
          >
            <div className="character-card">
              <p>{avenger.name}</p>
              <img src={avenger.thumbnail} alt="avenger" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Avengers;
