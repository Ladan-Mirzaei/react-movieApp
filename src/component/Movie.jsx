function Movie({ movie, movieDelete, movieAdd }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <div className="movie2">
        <p>Released: {movie.released}</p>
        <p>Director: {movie.director}</p>
        <button className="button-movi" onClick={() => movieAdd(movie)}>
          Add favoritemovie
        </button>
        <button className="button-movi" onClick={() => movieDelete(movie)}>
          Remov
        </button>
      </div>
    </div>
  );
}

export default Movie;
