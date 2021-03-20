import React from "react";

import { connect } from "react-redux";
import { selectMovie } from "../actions/index";

const MovieList = (props) => {
  const listItems = props.movies.map((movie) => {
    return (
      <div id={movie.title} className="movieClick">
        <span>{movie.title}</span>
        <button onClick={() => props.selectMovie(movie)}>Details</button>
      </div>
    );
  });
  return (
    <div>
      <h2>MovieList</h2>
      <h1>Click on details</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies, // state.movies => here, movies is from combineReducers object
  };
};
//dispatch as object(takes as obj or function)
const mapDispatchToProps = {
  selectMovie: selectMovie,
};
//connect function = where we get the state from redux to react component
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
