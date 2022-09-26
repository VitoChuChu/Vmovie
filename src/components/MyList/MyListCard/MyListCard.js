import React from "react";
import { Link } from "react-router-dom";

const MyListCard = ({ id, title, releaseDate, poster_path }) => {
  let imgUrl = "https://image.tmdb.org/t/p/w300/" + poster_path;
  return (
    <div className="MyListCard row m-1">
      <Link to={`/Vmovie/filmInfo/${id}`} className="cancelTextdecoration">
        <img
          className="col-12 MyListCardImg img-fluid blur"
          src={imgUrl}
          alt={title}
        />
        <h5 className="col-12">{title}</h5>
        <p className="col-12">{releaseDate}</p>
      </Link>
    </div>
  );
};

export default MyListCard;
