import React from "react";
import "./MyList.css";

const MyList = ({ status }) => {
  if (status === false) {
    return <div>Please login first</div>;
  } else {
    return (
      <div className="MyListBKG">
        <div className="container-fluid p-0">
          <div style={{ height: "66px" }}></div>
          <h1 className="ms-3 z2">My movie list</h1>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="myMovieCard">123123</div>
            <div className="myMovieCard">123123</div>
            <div className="myMovieCard">123123</div>
          </div>
        </div>
      </div>
    );
  }
};

export default MyList;
