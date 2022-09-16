import React from "react";
import BKG from "../../../img/TopGun.jpg";
import "./HomepageMovies.css";
import HomepageMovieCard from "./HomepageMovieCard/HomepageMovieCard.js";

const HomepageMovies = ({ popM }) => {
  return (
    <div className="px-3 py-1">
      <div style={{ height: "66px" }}></div>
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide carousel-fade "
        data-bs-ride="carousel"
        data-bs-pause="hover"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={BKG} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Top Gun:Maverick</h1>
              <p>
                After more than thirty years of service as one of the Navy’s top
                aviators, and dodging the advancement in rank that would ground
                him, Pete “Maverick” Mitchell finds himself training a
                detachment of TOP GUN graduates for a specialized mission the
                likes of which no living pilot has ever seen.
              </p>
            </div>
          </div>

          {popM &&
            popM.map((movie, i) => {
              return (
                <HomepageMovieCard
                  key={i}
                  title={movie.title}
                  backdrop_path={movie.backdrop_path}
                  overview={movie.overview}
                />
              );
            })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomepageMovies;
