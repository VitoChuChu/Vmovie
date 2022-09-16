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

function App() {
  let [status, setStatue] = useState(false);
  let [route, setRoute] = useState("leading");
  let [popM, setPopM] = useState([]);
  let [nowM, setNowM] = useState([]);
  let [upM, setUpM] = useState([]);
  let [topM, setTopM] = useState([]);

  useEffect(() => {
    fetchPopM();
    fetchNowPlayingM();
    fetchUpcomingM();
    fetchTopRatedM();
  }, [route]);

  const fetchPopM = async () => {
    await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=0256639a2d7d7afd446f8a3d2dcc94b1"
    )
      .then((resp) => resp.json())
      .then((data) => setPopM(data.results));
  };
  const fetchNowPlayingM = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=0256639a2d7d7afd446f8a3d2dcc94b1&language=en-US&page=1&region=TW"
    )
      .then((resp) => resp.json())
      .then((data) => setNowM(data.results));
  };
  const fetchUpcomingM = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=0256639a2d7d7afd446f8a3d2dcc94b1&language=en-US&page=1&region=TW"
    )
      .then((resp) => resp.json())
      .then((data) => setUpM(data.results));
  };
  const fetchTopRatedM = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0256639a2d7d7afd446f8a3d2dcc94b1&language=en-US&page=1&region=TW"
    )
      .then((resp) => resp.json())
      .then((data) => setTopM(data.results));
  };

  // Statue,route change
  const onStatusChange = (x) => {
    setStatue(x);
  };
  const onRouteChange = (x) => {
    setRoute(x);
  };

  return (
    <div className="App">
      <Nav status={status} setRoute={setRoute} />
      {/* {route === "leading" ? null : <Nav status={status} setRoute={setRoute} />} */}
      <Routes>
        <Route
          path="/"
          exact
          element={<Leading setRoute={setRoute} fetchPopM={fetchPopM} />}
        />
        <Route
          path="/homepage"
          exact
          element={<Homepage popM={popM} nowM={nowM} upM={upM} />}
        />
        <Route path="/topRated" exact element={<TopRated topM={topM} />} />
        <Route path="/myList" exact element={<MyList status={status} />} />
        <Route path="/filmInfo" exact element={<FilmInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
