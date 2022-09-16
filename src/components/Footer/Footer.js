import React from "react";
import "./Footer.css";
import TMBDLogo from "../../img/TMBD.png";

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row position-relative ccr">
        <h5 className="col-12 col-md-6 ccc m-0">© 2022 Vito Chu source code</h5>
        <a
          className="col-12 col-md-6 ccc"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="Logo" src={TMBDLogo} alt="TBMDLogo" />
        </a>
        <p className="col-12 ccc m-0">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </div>
  );
};

export default Footer;
