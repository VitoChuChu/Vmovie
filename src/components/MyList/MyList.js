import React, { useState } from "react";
import "./MyList.css";
import { v4 as uuidv4 } from "uuid";
import MyListCard from "./MyListCard/MyListCard.js";

const MyList = ({ status, likedMovies, setLikedMovies }) => {
  console.log(likedMovies);

  return (
    <div className="container-fluid MyListBKG">
      <div style={{ height: "66px" }}></div>
      <h1 className="ms-3 z2">My Wishlist</h1>
      <div className="MyListCardPos container-fluid">
        {likedMovies &&
          likedMovies.map((movie) => {
            return (
              <MyListCard
                key={uuidv4()}
                title={movie.title}
                releaseDate={movie.releaseDate}
                poster_path={movie.poster_path}
              />
            );
          })}
      </div>
    </div>
  );
};
// };

export default MyList;
