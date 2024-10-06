import { useState } from "react";
import { initialMovies } from "./data";
import Movie from "./component/Movie";
import "./App.css";
import "./component/style.css";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [favoritemovie, setfavoritemovie] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  function handleFavorite(movie) {
    if (!favoritemovie.includes(movie)) {
      setfavoritemovie([...favoritemovie, movie]);
      movie.favorite = true;
    } else {
      setfavoritemovie(favoritemovie.filter((item) => item !== movie));
      movie.favorite = false;
    }
  }
  function handleMovieDelete(movie) {
    setfavoritemovie(favoritemovie.filter((item) => item !== movie));
    movie.favorite = false;
  }

  return (
    <div>
      <header>
        <h1>Movie App</h1>
        <nav>
          <a onClick={() => setShowFavorites(false)}>All Movies</a>
          <a onClick={() => setShowFavorites(true)}>Favorite Movies</a>
        </nav>
      </header>

      <div className="container-movie">
        {!showFavorites
          ? movies.map((item) => (
              <Movie
                key={item.title}
                movie={item}
                movieAddFavorite={handleFavorite}
                // movieToDelete={handleMovieDelete}
              />
            ))
          : favoritemovie.map((item) => (
              <Movie
                key={item.title}
                movie={item}
                movieAddFavorite={handleFavorite}
                movieToDelete={handleMovieDelete}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
