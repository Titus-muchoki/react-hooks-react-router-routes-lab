import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actorItem = actors.map((actor) => (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((list) => {
          <li key={list}>{list}</li>;
        })}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {actorItem}
    </div>
  );
};

export default Actors;
