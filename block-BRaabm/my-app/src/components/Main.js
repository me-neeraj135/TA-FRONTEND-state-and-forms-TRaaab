/** @format */

import React from "react";
import Model from "./Model";
import Data from "../data/data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: "",
      pageOn: true,
    };
  }

  handleClick = title => {
    this.setState(prevState => {
      return {
        movieDetail: (prevState.movieDetail = title),
        pageOn: !prevState.pageOn,
      };
    });
  };

  handleClose = () => {
    this.setState(prevState => {
      return {
        pageOn: !prevState.pageOn,
      };
    });
  };

  render() {
    let details = Data.filter(movie => {
      return movie.Title === this.state.movieDetail;
    });

    return (
      <main className="mainModel">
        {this.state.pageOn ? (
          <ul className="movieContainer">
            {Data.map(movie => {
              return (
                <li key={movie.Title} className="movie">
                  <div className="overlay">
                    <button
                      className="detailBtn"
                      onClick={() => this.handleClick(movie.Title)}
                    >
                      detail
                    </button>
                  </div>
                  <figure className="moviePoster">
                    <img src={movie.Poster} alt={movie.Title} />
                    <figcaption>
                      {movie.Title} <br /> {movie.Released}
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        ) : (
          <Model movieDetail={details} handler={this.handleClose} />
        )}
      </main>
    );
  }
}

export default Main;
