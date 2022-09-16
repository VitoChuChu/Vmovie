import React from "react";
import "./TopRated.css";
import TopRatedCard from "./TopRatedCard/TopRatedCard.js";
import { v4 as uuidv4 } from "uuid";

const TopRated = ({ topM }) => {
  console.log(topM);
  return (
    <div className="">
      <div className="container-fluid p-0">
        <div style={{ height: "66px" }}></div>
        <h1 className="ms-3 z2">Top Rated 20 moives</h1>
        <div className="row">
          {topM &&
            topM.map((movie) => {
              return (
                <TopRatedCard
                  key={uuidv4()}
                  title={movie.title}
                  rated={movie.vote_average}
                  releaseDate={movie.release_date}
                  overview={movie.overview}
                  backdrop_path={movie.backdrop_path}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default TopRated;
