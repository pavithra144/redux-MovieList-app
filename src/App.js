import React from "react";
import "./App.css";
import "./styles.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <h1>MovieList App</h1>
      <MovieList />
      <MovieDetails />
    </div>
  );
}

export default App;
