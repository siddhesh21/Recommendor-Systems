import axios from "./axios";
import { localInstance } from "./axios";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({
  title,
  fetchUrl,
  isLargeRow = false,
  isFromRecommendor = false,
}) {
  const user = useSelector(selectUser);

  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    if (isFromRecommendor) {
      async function fetchData() {
        const request = await localInstance.get(fetchUrl);
        setMovies(request.data.movies);
        console.log(request.data.movies);
        return request;
      }
      fetchData();
    } else {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }
  }, [fetchUrl, isFromRecommendor]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path) ||
              (!isLargeRow && movie.thumbnail)) && (
              <img
                onClick={async () => {
                  const request = await localInstance.get(
                    `addWatchedMovie?username=${user.email}&movie=${movie.id}`
                  );
                  // setMovies(request.data.movies);
                  console.log(request.data);
                  return request;
                }}
                className={`row__poster ${
                  isFromRecommendor ? false : isLargeRow && "row__posterLarge"
                }`}
                key={movie.id}
                src={`${
                  isFromRecommendor
                    ? "https://filmos.org/wp-content/uploads/2018/09/" +
                      movie.thumbnail
                    : isLargeRow
                    ? base_url + movie.poster_path
                    : base_url + movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
