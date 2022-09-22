import React, { useState } from "react";
import "./TopRateMovies.css";
import { Link } from "react-router-dom";

const TopRateMovies = ({
  item,
  likedMovies,
  setLikedMovies,
  // isLike,
  // handleToggle,
}) => {
  const [isLike, setIsLike] = useState(false);
  const handleToggle = (item) => {
    if (isLike) {
      setIsLike(false);
      console.log("false", isLike);
      const indexOfObject = likedMovies.findIndex((obj) => {
        return obj.id === item.id;
      });
      if (indexOfObject > -1) {
        likedMovies.splice(indexOfObject, 1);
      }
    } else {
      setIsLike(true);
      console.log("true", isLike);
      setLikedMovies([...likedMovies, item]);
      // alert(`${item.title} has been add to wishlist!`);
    }
  };

  return (
    <div
      className="conatiner BKGfilter "
      style={{ backgroundImage: `URL(${item.backdrop_path_low})` }}
    >
      <div
        className="row infoCard m-3 rounded border border-dark border-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="col-lg-5 col-md-7 col-12 ccc">
          <img
            className="TopRatedCardImg"
            src={item.backdrop_path}
            alt={item.title}
          />
        </div>
        <div className="col-lg-6 col-md-5 col-12 textbox">
          <h2 style={{ color: "black", margin: "1vh" }}>{item.title}</h2>
          <p style={{ color: "black", margin: "1vh" }}>
            Rated : {item.vote_average}
          </p>
          <p style={{ color: "black", margin: "1vh" }}>
            Released : {item.release_date}
          </p>
          <p
            className="d-none d-md-block multiline-ellipsis"
            style={{ color: "black", margin: "1vh" }}
          >
            {item.overview}
          </p>
          <Link to={`/filmInfo/${item.id}`} className="cancelTextdecoration">
            <h5
              className="pointer"
              style={{ color: "black", margin: "1vh", color: "#f4c10f" }}
            >
              Click here for detail
            </h5>
          </Link>
        </div>
        <div className="col-lg-1 col-2 d-none d-lg-block position-relative">
          <div
            className={`like ${isLike ? "fill" : ""}`}
            onClick={() => handleToggle(item)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TopRateMovies;
