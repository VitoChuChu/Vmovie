import React from "react";
import "./Footer.css";
import TMBDLogo from "../../img/TMBD.png";

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row position-relative ccr">
        <a
          href="https://github.com/VitoChuChu/Vmovie"
          className="cancelTextdecoration col-12 col-md-6 col-lg-6 m-0"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h4 className="m-2 text-center">© 2022 Vito Chu source code</h4>
        </a>
        <a
          className="col-12 col-md-6 col-lg-6 ccc"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="Logo" src={TMBDLogo} alt="TBMDLogo" />
        </a>
        <p className="col-11 m-2 text-center">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </div>
  );
};

export default Footer;
