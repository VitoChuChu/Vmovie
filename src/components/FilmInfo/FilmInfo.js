import React from "react";
import "./FilmInfo.css";
import TopGun from "../../img/TopGun.jpg";
import TopGunY from "../../img/TopGunY.png";

const FilmInfo = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="widthControl">
          <div>
            <img className="FilmInfoBKG" src={TopGun} alt="" />
          </div>
          <div style={{ height: "15vh" }}></div>
          <div className="row">
            <div className="row z1 ccr FilterDiv">
              <img
                className="col-lg-4 col-md-6 FilmInfoSmallBKG d-none d-sm-block"
                src={TopGunY}
                alt=""
              />
              <div className="col-lg-8 col-md-6 p-4">
                <h1 className="">Film Name</h1>
                <p className="">Director</p>
                <p className="">Cast</p>
                <p className="">Catrgory</p>
                <p className="">Time</p>
                <p className="">Description</p>
                <p className="">Tralier</p>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
