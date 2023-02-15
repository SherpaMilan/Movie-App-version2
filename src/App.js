import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import ListCounter from "./components/ListCounter";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovie = (movie) => {
    const filteredMovies = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setMovieList([...filteredMovies, movie]);
  };

  const removeMovie = (id) => {
    if (!window.confirm("Confirm to delete?")) {
      return;
    }
    const filteredMovies = movieList.filter((item) => item.imdbID !== id);
    setMovieList(filteredMovies);
  };

  return (
    <>
      <div className="wrapper bg-dark text-warning pt-5">
        <Container>
          <h3 className="text-center">My Movie collection</h3>
          <hr />

          {/* form section */}
          <SearchForm addMovie={addMovie} />
          {/* card section */}

          {/* list section */}
          <ListCounter movieList={movieList} removeMovie={removeMovie} />
          {/* Buttons */}
          {/* move lists */}
        </Container>
      </div>
      <footer className="text-center bg-dark p-3 text-light">
        Copyright © 2023 my-movie-app-cyan.vercel.app. All rights reserved
      </footer>
      ;
    </>
  );
}

export default App;
