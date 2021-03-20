import { combineReducers } from "redux";

const moviesReducers = () => {
  return [
    {
      title: "spider-Man: Homecoming",
      releaseDate: "05-06-2001",
      rating: 7.4,
    },
    { title: "Aquaman", releaseDate: "12-07-2019", rating: 7 },
    { title: "Black Panther", releaseDate: "12-07-2003", rating: 7.4 },
    { title: "Avengers", releaseDate: "04-26-2018", rating: 8.3 },
    { title: "Guardians of galaxy", releaseDate: "12-07-2013", rating: 7.9 },
  ];
};

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducers,
  selectedMovie: selectedMovieReducer,
});
