//action creator
export const selectMovie = (movie) => {
  return {
    type: "SELECTED_MOVIE",
    payload: movie,
  };
};
