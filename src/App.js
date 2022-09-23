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
  console.log(process.env.REACT_APP_APIKEY);
  const [status, setStatue] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const onStatusChange = (x) => {
    setStatue(x);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Nav
        status={status}
        setSearchKey={setSearchKey}
        scrollToTop={scrollToTop}
      />
      <Routes>
        <Route path="/Vmovie/" exact element={<Leading />} />
        <Route
          path="/Vmovie/homepage"
          exact
          element={<Homepage scrollToTop={scrollToTop} />}
        />
        <Route
          path="/Vmovie/topRated"
          exact
          element={<TopRated scrollToTop={scrollToTop} />}
        />
        {/* <Route
          path="/myList"
          exact
          element={<MyList status={status} />}
        /> */}
        <Route
          path={`/Vmovie/filmInfo/:id`}
          element={<FilmInfo scrollToTop={scrollToTop} />}
        />
        <Route
          path={`/Vmovie/search`}
          element={<Search searchKey={searchKey} scrollToTop={scrollToTop} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
