import loginImage from "../assets/avatar.jpg";

function Movie({ movie, movieToDelete, movieAddFavorite }) {
  const imagePath = `/assets/${movie.title
    .toLowerCase()
    .replace(/\s+/g, "_")}.jpg`;

  console.log(imagePath);
  return (
    <div className="movie2">
      <img src={loginImage} alt={movie.title} /> <h2>{movie.title}</h2>
      <p>Released: {movie.released}</p>
      <p>Director: {movie.director}</p>
      <div className="button-container">
        <section onClick={() => movieAddFavorite(movie)}>
          {movie.favorite ? "❤️" : "🤍"}
        </section>
        {movieToDelete && (
          <section onClick={() => movieToDelete(movie)}>Delete Movie</section>
        )}{" "}
      </div>
    </div>
  );
}
export default Movie;
