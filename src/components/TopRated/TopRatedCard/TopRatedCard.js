import React from "react";
import "./TopRatedCard.css";
import love from "../../../img/LoveT.png";

const TopRatedCard = ({
  title,
  rated,
  releaseDate,
  overview,
  backdrop_path,
}) => {
  let imgUrl1 = "https://image.tmdb.org/t/p/w300/" + backdrop_path;
  let imgUrl2 = "https://image.tmdb.org/t/p/w780/" + backdrop_path;
  return (
    <div
      className="conatiner ccc BKGfilter"
      style={{ backgroundImage: `url(${imgUrl1})` }}
    >
      <div className="row infoCard m-3 rounded border border-dark border-3">
        <div className="col-lg-5 col-md-7 col-12 ccc">
          <img className="TopRatedCardImg" src={imgUrl2} alt="" />
        </div>
        <div className="col-lg-6 col-md-5 col-12 textbox">
          <h2 style={{ color: "black", margin: "1vh" }}>{title}</h2>
          <p style={{ color: "black", margin: "1vh" }}>Rated : {rated}</p>
          <p style={{ color: "black", margin: "1vh" }}>
            Released : {releaseDate}
          </p>
          <p
            className="d-none d-md-block multiline-ellipsis"
            style={{ color: "black", margin: "1vh" }}
          >
            {overview}
          </p>
        </div>
        <div className="col-lg-1 col-2 position-relative d-none d-lg-block">
          {/* <p className="Like">Like</p> */}
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopRatedCard;
