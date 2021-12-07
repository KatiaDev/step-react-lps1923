import React from "react";
import { Route, useParams } from "react-router";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

const Avenger = ({ avengers }) => {
  const params = useParams();
  console.log("params: ", params);

  const history = useHistory();
  console.log("history", history);

  const match = useRouteMatch();
  console.log("match: ", match);

  const foundAvenger = avengers.find((el) => {
    return Number(params.id) === el.id;
  });

  console.log("foundAvenger", foundAvenger);

  return (
    <>
      <div className="character-info-wrapper">
        <button onClick={() => history.go(-2)}>Go Home</button>

        <h1>{foundAvenger.name}</h1>
        <h2>{foundAvenger.nickname}</h2>
        <img src={foundAvenger.img} alt="avenger" className="character-image" />
        <p>{foundAvenger.description}</p>
        <Link to={`${match.url}/movies`}>Movies</Link>
      </div>

      <Route path={`${match.path}/movies`}>
        {foundAvenger.movies.map((movie, idx) => {
          return (
            <ul key={idx} style={{ listStyle: "none" }}>
              <li>{movie}</li>
            </ul>
          );
        })}
      </Route>
    </>
  );
};

export default Avenger;
