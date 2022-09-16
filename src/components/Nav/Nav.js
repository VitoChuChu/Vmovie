import React from "react";
import { Link } from "react-router-dom";
import LogoY from "../../img/VmovieLogoYS.svg";

const Nav = ({ setRoute, status }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={LogoY}
            alt="Vmovie"
            width="120"
            height="40"
            onClick={() => {
              setRoute("leading");
            }}
          />
        </Link>
        <button
          className="navbar-toggler navbar-expand-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0 fs-5">
            <li className="nav-item">
              <Link
                className="nav-link active mb-0 pointer"
                aria-current="page"
                to="/homepage"
                style={{ color: "white" }}
                onClick={() => setRoute("homepage")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mb-0 pointer"
                to="/topRated"
                style={{ color: "white" }}
                onClick={() => setRoute("topRated")}
              >
                Top rated 20
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mb-0 pointer"
                to="/myList"
                style={{ color: "white" }}
                onClick={() => setRoute("myList")}
              >
                My wishlist
              </Link>
            </li>
          </ul>
          {status === true ? (
            <li className="navbar-nav mb-lg-0 fs-5 nav-item pointer">
              <Link className="nav-link mb-0" to="/" style={{ color: "white" }}>
                Logout
              </Link>
            </li>
          ) : (
            <li className="navbar-nav  mb-lg-0 fs-5 nav-item pointer">
              <Link className="nav-link mb-0" to="/" style={{ color: "white" }}>
                Login
              </Link>
            </li>
          )}

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
