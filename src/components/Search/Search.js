import React, { useState, useEffect } from "react";
import { fetchSearchMovies } from "../../service/fetchData.js";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import missGif from "../../img/Missed.svg";

const Search = ({ searchKey, scrollToTop }) => {
  const [searchMovies, setSerachMovies] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setSerachMovies(await fetchSearchMovies(searchKey));
    };
    fetchAPI();
  }, [searchKey]);

  const searchMoviesList = searchMovies.slice(0, 10).map((item) => {
    return (
      <div
        className="card bg-dark px-2 py-3 m-2 ccc"
        style={{ width: "18rem", height: "25rem" }}
        key={uuidv4()}
      >
        <Link to={`/Vmovie/filmInfo/${item.id}`}>
          <img
            className="card-img-top"
            src={item.poster_path}
            alt={item.title}
            style={{ width: "12rem", height: "18rem" }}
            onClick={() => {
              scrollToTop();
            }}
          />
        </Link>
        <div className="card-body ccc">
          <h5 className="card-title m-0">{item.title}</h5>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container-fluid">
        <div style={{ height: "66px" }}></div>
        {searchMovies.length === 0 ? (
          <div className="row">
            <div className="col-12 ccc">
              <a href="https://storyset.com/sport">
                <img
                  href="https://storyset.com/sport"
                  src={missGif}
                  alt="Not Found"
                  style={{ width: "300px", height: "400px" }}
                />
              </a>
            </div>
            <div className="col-12 text-center mb-5">
              <h3>ohoh...Can not found related movie.</h3>
              <h3>Please try other key words.</h3>
            </div>
          </div>
        ) : (
          <div className="row m-3 ccr">{searchMoviesList}</div>
        )}
      </div>
    </div>
  );
};

export default Search;
