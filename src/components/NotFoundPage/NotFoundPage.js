import React from "react";
import notFound from "../../img/404.svg";
import { Link } from "react-router-dom";

const NotFoundPage = ({}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="ccc">
          <div style={{ height: "66px" }}></div>
          <div className="col-12 ccc">
            <a href="https://storyset.com/sport">
              <img
                src={notFound}
                alt="Page not found"
                style={{ width: "300px", height: "400px" }}
              />
            </a>
          </div>
          <h3 className="mb-3">Page not Found.</h3>
          <Link
            className="fs-5 glow-on-hover ccc cancelTextdecoration m-3"
            to="/homepage"
          >
            Let's back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
