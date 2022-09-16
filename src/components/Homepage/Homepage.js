import React from "react";
import "./Homepage.css";
import HomepageMovies from "./HomepageMovies/HomepageMovies.js";
import PopMFilmCard from "../PopMFilmCard/PopMFilmCard.js";
import NowPlayingCard from "../NowPlayingCard/NowPlayingCard.js";
import UpcomingCard from "../UpcomingCard/UpcomingCard.js";

const Homepage = ({ popM, nowM, upM }) => {
  return (
    <div>
      <div className="">
        <HomepageMovies popM={popM} />
      </div>
      <div className="container-fluid p-0 ">
        <div className="row ccc">
          <div className="col-lg-11 col-md-11 col-11">
            <h2 className="toLeft">Popular movie this week :</h2>
            <PopMFilmCard popM={popM} />
          </div>
          <div className="col-lg-11 col-md-11 col-11">
            <h2 className="toLeft">Now Playing : </h2>
            <NowPlayingCard nowM={nowM} />
          </div>
          <div className="col-lg-11 col-md-11 col-11">
            <h2 className="toLeft">Upcoming : </h2>
            <UpcomingCard upM={upM} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
