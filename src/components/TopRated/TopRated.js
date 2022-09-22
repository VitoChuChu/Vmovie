import React, { useState, useEffect, useRef } from "react";
import "./TopRated.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { fetchTopRatedMovies } from "../../service/fetchData.js";

const TopRated = ({}) => {
  const [topM, setTopM] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setPage(2);
      setTopM(await fetchTopRatedMovies(page));
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      setTopM(topM.concat(loadMore));
    };
    fetchAPI();
  }, [loadMore]);

  const handleLoadMoreMovies = async () => {
    setPage(page + 1);
    setLoadMore(await fetchTopRatedMovies(page));
  };

  const topRateMovies = topM.map((item) => {
    return (
      <div
        className="BKGfilter ccc"
        style={{ backgroundImage: `URL(${item.backdrop_path_low})` }}
        key={uuidv4()}
      >
        <div
          className="row infoCard m-3 rounded border border-dark border-3"
          style={{ backgroundColor: "white", opacity: "0.9", width: "90%" }}
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
            <Link
              to={`/Vmovie/filmInfo/${item.id}`}
              className="cancelTextdecoration"
            >
              <h3
                className="pointer"
                style={{ color: "black", margin: "1vh", color: "#f4c10f" }}
              >
                Click here for detail
              </h3>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <div className="container-fluid p-0">
        <div style={{ height: "66px" }}></div>
        <h1 className="ms-3 z2">Top Rated moives in history</h1>
        <div className="row ccc">{topRateMovies}</div>
        <div className="ccc">
          <button
            className="btn btn-outline-info fs-2 m-3"
            onClick={() => {
              handleLoadMoreMovies();
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopRated;
