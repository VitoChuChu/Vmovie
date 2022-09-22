import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoY from "../../img/VmovieLogoYS.svg";

const Nav = ({ setSearchKey, scrollToTop }) => {
  const [input, setInput] = useState("");
  const searchMovies = (e) => {
    e.preventDefault();
  };

  const handleSearchKeyScrollToTop = () => {
    scrollToTop();
    setSearchKey(input);
    document.getElementById("Input").value = "";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Vmovie/">
          <img
            src={LogoY}
            alt="Vmovie"
            width="120"
            height="40"
            onClick={() => {
              scrollToTop();
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
          style={{ backgroundColor: "#f4c10f" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0 fs-5">
            <li className="nav-item mx-3">
              <Link
                className="nav-link active mb-0 pointer"
                aria-current="page"
                to="/Vmovie/homepage"
                style={{ color: "white" }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link mb-0 pointer"
                to="/Vmovie/topRated"
                style={{ color: "white" }}
                onClick={() => {
                  scrollToTop();
                }}
              >
                Top rated movies
              </Link>
            </li>
            {/* <li className="nav-item mx-3">
              <Link
                className="nav-link mb-0 pointer"
                to="/myList"
                style={{ color: "white" }}
                onClick={() => setRoute("myList")}
              >
                My wishlist
              </Link>
            </li> */}
          </ul>
          {/* {status === true ? (
            <li className="navbar-nav mb-lg-0 fs-5 nav-item pointer mx-3">
              <Link className="nav-link mb-0" to="/" style={{ color: "white" }}>
                Logout
              </Link>
            </li>
          ) : (
            <li className="navbar-nav  mb-lg-0 fs-5 nav-item pointer mx-3">
              <Link className="nav-link mb-0" to="/" style={{ color: "white" }}>
                Login
              </Link>
            </li>
          )} */}
          <form className="d-flex" onSubmit={searchMovies}>
            <input
              className="form-control me-2"
              style={{ width: "400px" }}
              type="text"
              placeholder="Search"
              id="Input"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <Link
              className="nav-link mb-0"
              to="/Vmovie/search"
              style={{ color: "white" }}
            >
              <button
                className="btn btn-outline-light"
                type="submit"
                onClick={() => {
                  handleSearchKeyScrollToTop();
                }}
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
