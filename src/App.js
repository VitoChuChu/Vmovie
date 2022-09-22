import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Leading from "./components/Leading/Leading.js";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
import Homepage from "./components/Homepage/Homepage.js";
import TopRated from "./components/TopRated/TopRated.js";
import MyList from "./components/MyList/MyList.js";
import FilmInfo from "./components/FilmInfo/FilmInfo.js";
import Search from "./components/Search/Search.js";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.js";

function App() {
  const [status, setStatue] = useState(false);
  const [route, setRoute] = useState("leading");
  const [searchKey, setSearchKey] = useState("");

  const onStatusChange = (x) => {
    setStatue(x);
  };

  const onRouteChange = (x) => {
    setRoute(x);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Loading = () => {
    <div className="loader"></div>;
  };

  return (
    <div className="App">
      {route === "leading" ? null : (
        <Nav
          status={status}
          setRoute={setRoute}
          setSearchKey={setSearchKey}
          scrollToTop={scrollToTop}
          onRouteChange={onRouteChange}
        />
      )}

      <Routes>
        <Route
          path="/"
          exact
          element={<Leading onRouteChange={onRouteChange} />}
        />
        <Route
          path="/homepage"
          exact
          element={<Homepage scrollToTop={scrollToTop} />}
        />
        <Route
          path="/topRated"
          exact
          element={<TopRated scrollToTop={scrollToTop} />}
        />
        {/* <Route
          path="/myList"
          exact
          element={<MyList status={status} />}
        /> */}
        <Route
          path={`/filmInfo/:id`}
          element={<FilmInfo scrollToTop={scrollToTop} />}
        />
        <Route
          path={`/search`}
          element={<Search searchKey={searchKey} scrollToTop={scrollToTop} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
