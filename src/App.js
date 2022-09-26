import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Leading from "./components/Leading/Leading.js";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
import Homepage from "./components/Homepage/Homepage.js";
import TopRated from "./components/TopRated/TopRated.js";
import FilmInfo from "./components/FilmInfo/FilmInfo.js";
import Search from "./components/Search/Search.js";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.js";
import MyList from "./components/MyList/MyList.js";

function App() {
  const [status, setStatus] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [userId, setUserId] = useState("");
  const [likeMovieList, setLikeMovieList] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo,
      });
    }
    render() {
      if (this.state.errorInfo) {
        return <NotFoundPage />;
      }
      return this.props.children;
    }
  }

  return (
    <div className="App">
      <Nav
        status={status}
        setStatus={setStatus}
        setSearchKey={setSearchKey}
        scrollToTop={scrollToTop}
        setUserId={setUserId}
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

        <Route
          path="/myList"
          exact
          element={<MyList status={status} userId={userId} />}
        />
        <Route
          path={`/Vmovie/filmInfo/:id`}
          element={
            <FilmInfo
              scrollToTop={scrollToTop}
              ErrorBoundary={ErrorBoundary}
              userId={userId}
              likeMovieList={likeMovieList}
              setLikeMovieList={setLikeMovieList}
            />
          }
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
