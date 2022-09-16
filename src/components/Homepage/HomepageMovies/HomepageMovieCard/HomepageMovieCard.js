import React from "react";

const HomepageMovieCard = ({ title, backdrop_path, overview }) => {
  let imgUrl = "https://image.tmdb.org/t/p/w1280/" + backdrop_path;
  return (
    <div className="carousel-item">
      <img src={imgUrl} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default HomepageMovieCard;
