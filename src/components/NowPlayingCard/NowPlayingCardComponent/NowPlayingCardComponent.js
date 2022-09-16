import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NowPlayingCardComponent = ({ title, poster_path }) => {
  let imgUrl = "https://image.tmdb.org/t/p/w185/" + poster_path;
  return (
    <div className="">
      <img src={imgUrl} className="rounded" alt="" />
      <div className="ccc FilmCardComponentSize">
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default NowPlayingCardComponent;
