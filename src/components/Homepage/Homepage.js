import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-bootstrap/Carousel";
import ReactStars from "react-rating-stars-component";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./Homepage.css";
import {
  fecthNowPlayingMovies,
  fetchGenres,
  fetchMovieByGenre,
  fecthPopularMovies,
  fetchUpcomingMovies,
} from "../../service/fetchData.js";
import Loader from "../Loader/Loader.jsx";

const Homepage = ({ scrollToTop }) => {
  const [nowM, setNowM] = useState([]);
  const [popM, setPopM] = useState([]);
  const [upM, setUpM] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowM(await fecthNowPlayingMovies());
      setGenres(await fetchGenres());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPopM(await fecthPopularMovies());
      setUpM(await fetchUpcomingMovies());
    };
    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const nowPlayingMovies = nowM.slice(0, 5).map((item) => {
    return (
      <Carousel.Item key={uuidv4()}>
        <Link to={`/Vmovie/filmInfo/${item.id}`}>
          <img
            className="d-block w-100"
            src={item.backdrop_path}
            alt={item.title}
            onClick={() => {
              scrollToTop();
            }}
          />
        </Link>
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p className="d-none d-md-block">{item.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  const nowPlayingMoviesAll = nowM.map((item) => {
    return (
      <SwiperSlide key={uuidv4()}>
        <div className="ccc">
          <Link to={`/Vmovie/filmInfo/${item.id}`}>
            <div className="img-wrapper">
              <img
                className="img-fluid blur"
                src={item.poster_path}
                alt={item.title}
                onClick={() => {
                  scrollToTop();
                }}
              />
              <p className="content fade text-center">{item.title}</p>
            </div>
          </Link>
          <h5 className="textPos text-center">{item.title}</h5>
          <p className="m-0">
            <strong style={{ color: "#f4c10f" }}>Rated: </strong>
            {item.vote_average}
          </p>
          <ReactStars
            count={10}
            value={item.vote_average}
            size={15}
            isHalf={true}
            edit={false}
          ></ReactStars>
        </div>
      </SwiperSlide>
    );
  });
  const generList = genres.map((item) => {
    return (
      <li className="list-inline-item m-1" key={uuidv4()}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });
  const moviesList = movieByGenre.map((item) => {
    return (
      <SwiperSlide key={uuidv4()}>
        <div className="ccc">
          <Link to={`/Vmovie/filmInfo/${item.id}`}>
            <div className="img-wrapper">
              <img
                className="img-fluid blur"
                src={item.poster_path}
                alt={item.title}
                onClick={() => {
                  scrollToTop();
                }}
              />
              <p className="content fade text-center">{item.title}</p>
            </div>
          </Link>
          <h5 className="textPos text-center">{item.title}</h5>
          <p className="m-0">
            <strong style={{ color: "#f4c10f" }}>Rated: </strong>
            {item.vote_average}
          </p>
          <ReactStars
            count={10}
            value={item.vote_average}
            size={15}
            isHalf={true}
            edit={false}
          ></ReactStars>
        </div>
      </SwiperSlide>
    );
  });
  const popularMovies = popM.map((item) => {
    return (
      <SwiperSlide key={uuidv4()}>
        <div className="ccc">
          <Link to={`/Vmovie/filmInfo/${item.id}`}>
            <div className="img-wrapper">
              <img
                className="img-fluid blur"
                src={item.poster_path}
                alt={item.title}
                onClick={() => {
                  scrollToTop();
                }}
              />
              <p className="content fade text-center">{item.title}</p>
            </div>
          </Link>
          <h5 className="textPos text-center">{item.title}</h5>
          <p className="m-0">
            <strong style={{ color: "#f4c10f" }}>Rated: </strong>
            {item.vote_average}
          </p>
          <ReactStars
            count={10}
            value={item.vote_average}
            size={15}
            isHalf={true}
            edit={false}
          ></ReactStars>
        </div>
      </SwiperSlide>
    );
  });
  const upComingMovies = upM.map((item) => {
    return (
      <SwiperSlide key={uuidv4()}>
        <div className="ccc">
          <div className="img-wrapper">
            <img
              className="img-fluid blur"
              src={item.poster_path}
              alt={item.title}
            />
            <p className="content fade text-center">{item.title}</p>
          </div>
          <h5 className="textPos text-center">{item.title}</h5>
        </div>
      </SwiperSlide>
    );
  });

  if (nowM.lenght === 0) {
    return <Loader />;
  } else {
    return (
      <div>
        <div style={{ height: "66px" }}></div>
        <div className="container-fluid">
          <div className="row mt-2 ccr">
            <div className="col-11">
              <Carousel fade indicators={false} interval={5000}>
                {nowPlayingMovies}
              </Carousel>
            </div>
          </div>
          <div className="row mt-3 ccr">
            <h2 className="text-center" style={{ color: "#f4c10f" }}>
              Which genre you wanna to have?
            </h2>
            <div className="col-11">
              <ul className="list-inline m-0 ccr">{generList}</ul>
            </div>
          </div>
          <div className="row mt-3 ccr">
            <div className="col-10">
              <h2 className="text-center" style={{ color: "#f4c10f" }}>
                Here you go
              </h2>
              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                slidesPerGroupAuto={true}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper"
              >
                {moviesList}
              </Swiper>
            </div>
          </div>
          <div className="row mt-3 ccr">
            <div className="col-10">
              <h2 className="text-center" style={{ color: "#f4c10f" }}>
                What hot this week
              </h2>
              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                slidesPerGroupAuto={true}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper"
              >
                {popularMovies}
              </Swiper>
            </div>
          </div>
          <div className="row mt-3 ccr">
            <div className="col-10">
              <h2 className="text-center" style={{ color: "#f4c10f" }}>
                Now Playing movies
              </h2>
              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                slidesPerGroupAuto={true}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper"
              >
                {nowPlayingMoviesAll}
              </Swiper>
            </div>
          </div>
          <div className="row mt-3 ccr">
            <div className="col-10">
              <h2 className="text-center" style={{ color: "#f4c10f" }}>
                Upcoming movies
              </h2>
              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                slidesPerGroupAuto={true}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  760: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper"
              >
                {upComingMovies}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Homepage;
