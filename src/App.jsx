import { useState } from "react";
import { initialMovies } from "./data";
import Movie from "./component/Movie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [favoritemovie, setfavoritemovie] = useState([]);

  function handleMovieAdd(title) {
    setfavoritemovie([...favoritemovie, title]);
  }
  console.log(favoritemovie);

  function handlemovidelete(movieToDelete) {
    setMovies(movies.filter((item) => item !== movieToDelete)); // Filtering out the selected name
  }
  return (
    <div>
      <h1>Welcome to Movi APP!</h1>
      <div class="container-movie">
        {movies.map((item) => (
          <Movie
            key={item.title}
            movie={item}
            movieAdd={handleMovieAdd}
            movieDelete={handlemovidelete}
          />
        ))}
      </div>
      <p>
        {favoritemovie.map((item) => (
          <li key={item.title}>
            {item.title} <p>Released: {item.released}</p>
            <p>Director: {item.director}</p>
          </li>
        ))}
      </p>
    </div>
  );
}

export default App;
