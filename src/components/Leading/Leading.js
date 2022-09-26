import React from "react";
import { Link } from "react-router-dom";
import "./Leading.css";
import LogoB from "../../img/VmovieLogoBS.svg";

const Leading = () => {
  return (
    <div className="container-fluid leadingBKG p-0">
      <div style={{ height: "66px" }}></div>
      <div className="row">
        <img className="col-xl-3 py-4" src={LogoB} alt="Vmovie" />
        <div className="col-xl-8"></div>
      </div>
      <div className="d-none d-xl-block" style={{ height: "15vh" }}></div>
      <div className="row ccr">
        <div className="col-xl-3"></div>
        <h1 className="col-xl-8 col-10 ccc">Welcome to Vmovie</h1>
      </div>
      <div style={{ height: "3vh" }}></div>
      <div className="row ccr">
        <div className="col-xl-5"></div>
        <h4 className="col-xl-7 col-10 ccc">
          Ready to pick one perfect movie for weekend night?
        </h4>
      </div>
      <div style={{ height: "20vh" }}></div>
      <div className="row ccr">
        <div className="col-xl-8"></div>
        <Link
          className="col-xl-3 col-md-5 fs-2 glow-on-hover ccc cancelTextdecoration"
          to="/Vmovie/homepage"
        >
          THIS WAY
        </Link>
      </div>
    </div>
  );
};
export default Leading;
