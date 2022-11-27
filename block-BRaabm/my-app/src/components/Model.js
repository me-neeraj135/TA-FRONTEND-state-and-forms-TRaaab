/** @format */

function model(props) {
  return (
    <div className="movieDetailBox">
      <span className="closeBtn" onClick={() => props.handler()}>
        ❌
      </span>

      {props.movieDetail.map(movie => {
        return (
          <>
            <ul className="movieImagesContainer">
              {movie.Images.map(image => {
                return (
                  <li key={movie.Title} className="movieImage">
                    <figure className="imageFigure">
                      <img src={image} alt={movie.Title} />
                    </figure>
                  </li>
                );
              })}
            </ul>

            <p>
              <span>{movie.Title}</span> <br />
              <span>{movie.Actors}</span> <br />
              <span>{movie.Awards}</span> <br />
              <span>{movie.Country}</span> <br />
              <span>{movie.Director}</span> <br />
              <span>{movie.Genre}</span> <br />
              <span>{movie.Language}</span> <br />
              <span>{movie.Metascore}</span> <br />
              <span>{movie.Plot}</span> <br />
              <span>{movie.Poster}</span> <br />
              <span>{movie.Rated}</span> <br />
              <span>{movie.Released}</span> <br />
              <span>{movie.Response}</span> <br />
              <span>{movie.Runtime}</span> <br />
              <span>{movie.Type}</span> <br />
              <span>{movie.Writer}</span> <br />
              <span>{movie.Year}</span> <br />
              <span>{movie.imdbID}</span> <br />
              <span>{movie.imdbRating}</span> <br />
              <span>{movie.imdbVotes}</span> <br />
            </p>
          </>
        );
      })}
    </div>
  );
}

export default model;
