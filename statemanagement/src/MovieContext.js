import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Star Wars",
      price: "$10",
      id: 23124,
    },
    {
      name: "Star Wars2",
      price: "$12",
      id: 23126,
    },
    {
      name: "Star Wars3",
      price: "$14",
      id: 23128,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
