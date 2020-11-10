import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(fetchUrl)
        .then((res) => setMovies(res.data.results))
        .catch((e) => console.log(e));
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const opt = {
    width: "100%",
    height: "390",
    playerVars: {
      // "https://developers.google.com/youtube/player_parameters",
      autoplay: 1,
    },
  };

  const handleClick = ({movie}) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title ||movie.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(trailerUrl);

  return (
    <>
      <div className="mainContainer">
        <h1>{title}</h1>
        <div className={isLarge ? "row_poster" : "row_posters"}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick({movie})}
              src={`${baseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
              className={isLarge ? "posterImage" : "backdropImages"}
            />
          ))}
        </div>

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opt} />}
      </div>
    </>
  );
};

export default Row;
