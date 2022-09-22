import React from "react";

const MyListCard = ({ title, releaseDate, poster_path }) => {
  let imgUrl = "https://image.tmdb.org/t/p/w300/" + poster_path;
  return (
    <div className="MyListCard row">
      <img className="col-12 MyListCardImg" src={imgUrl} alt={title} />
      <h3 className="col-12">{title}</h3>
      <p className="col-12">{releaseDate}</p>
    </div>
  );
};

export default MyListCard;
