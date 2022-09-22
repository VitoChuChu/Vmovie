import React, { useState, useEffect } from "react";
import "./FilmInfo.css";
import {
  fetchMovieDetail,
  fetchMovieVideos,
  fetchMovieCast,
  fetchSimilarMovies,
} from "../../service/fetchData";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import ModalDialog from "react-bootstrap/ModalDialog";
import { Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Trailer from "../../img/Tralier.svg";

const FilmInfo = ({ scrollToTop }) => {
  const params = useParams();
  const [detail, setDetail] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  let genres = [];

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchMovieCast(params.id));
      setSimilarMovies(await fetchSimilarMovies(params.id));
    };
    fetchAPI();
  }, [params.id]);

  genres = detail.genres;
  let genresList;
  if (genres) {
    genresList = genres.map((g) => {
      return (
        <li className="list-inline-item" key={uuidv4()}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  const castList = casts.slice(0, 5).map((c) => {
    return (
      <div
        className="col-12 col-md-6 col-lg-2 text-center m-1 divSize"
        key={uuidv4()}
      >
        <img
          className="rounded mx-auto d-none d-sm-block imgSize"
          src={c.profile_path}
          alt={c.name}
        />
        <h5 className="font-weight-bold text-center m-0">{c.name}</h5>
        <p className="m-0 d-none d-sm-block">
          <strong style={{ color: "#f4c10f" }}>Act: </strong>
          {c.character}
        </p>
      </div>
    );
  });

  const similarMoviesList = similarMovies.slice(0, 5).map((m) => {
    return (
      <div
        className="col-12 col-md-6 col-lg-2 text-center m-1 divSize"
        key={uuidv4()}
      >
        <Link to={`/filmInfo/${m.id}`}>
          <img
            className="rounded mx-auto d-sm-block similarImgSize"
            src={m.poster_path}
            alt={m.title}
            onClick={() => {
              scrollToTop();
            }}
          />
        </Link>
        <h5 className="m-0">{m.title}</h5>
        <p className="m-0">
          <strong style={{ color: "#f4c10f" }}>Rated: </strong>
          {m.vote_average}
        </p>
      </div>
    );
  });
  const youtubeUrl = "https://www.youtube.com/watch?v=";
  const MoviePalyerModal = (props) => {
    return (
      <Modal
        {...props}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen={"md-down"}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#000000", fontWeight: "bolder" }}
          >
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000" }}>
          <ReactPlayer
            className="container-fluid"
            url={youtubeUrl + video.key}
            playing
            width="70vw"
            height="50vh"
            controls={true}
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
    );
  };
  const imgUrl = `https://image.tmdb.org/t/p/original/${detail.poster_path}`;
  const imgUrl_low = `https://image.tmdb.org/t/p/w780/${detail.backdrop_path}`;
  return (
    <div>
      <div className="container-fluid p-0">
        <MoviePalyerModal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        ></MoviePalyerModal>
        <div>
          <img className="FilmInfoBKG" src={imgUrl_low} alt={detail.name} />
        </div>
        <div className="step"></div>
        <div className="row FilterDiv ccr">
          <div className="col-lg-4 col-md-8 text-center">
            <img className="img-fluid" src={imgUrl} alt={detail.title} />
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="row">
              <div className="col-12 col-lg-12">
                <h1 className="">{detail.title}</h1>
              </div>
              <div className="col-12 col-lg-12 d-none d-sm-block">
                <ul className="list-inline">{genresList}</ul>
              </div>
              <div className="col-12 col-lg-3">
                <h5 className="fw-bolder" style={{ color: "#f4c10f" }}>
                  Run time
                </h5>
                <p className="">{detail.runtime}mins</p>
              </div>
              <div className="col-12 col-lg-3">
                <h5 className="fw-bolder" style={{ color: "#f4c10f" }}>
                  Release Date
                </h5>
                <p className="">{detail.release_date}</p>
              </div>
              <div className="col-6 d-none d-sm-block">
                <h5 className="fw-bolder" style={{ color: "#f4c10f" }}>
                  Offical website
                </h5>
                <a
                  href={detail.homepage}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {detail.homepage}
                </a>
              </div>
              <div className="col-12">
                <h5 className="fw-bolder" style={{ color: "#f4c10f" }}>
                  Overview
                </h5>
                <p className="col-12">{detail.overview}</p>
              </div>
              <div className="col-12">
                <img
                  className="pointer"
                  src={Trailer}
                  alt="Trailer"
                  onClick={() => setIsOpen(true)}
                  style={{ width: "150px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row FilterDiv">
          <div className="col-lg-12 col-md-12 col-12 m-1">
            <h3 className="fw-bolder text-center" style={{ color: "#f4c10f" }}>
              Cast
            </h3>
            <div className="d-none d-md-block">
              <div className="ccr">{castList}</div>
            </div>
            <div className="d-md-none">
              <div className="ccc">{castList}</div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12 m-1 mt-4">
            <h3 className="fw-bolder  text-center" style={{ color: "#f4c10f" }}>
              Similar movies
            </h3>
            <div className="d-none d-md-block">
              <div className="ccr">{similarMoviesList}</div>
            </div>
            <div className="d-md-none">
              <div className="ccc">{similarMoviesList}</div>
            </div>
          </div>
        </div>

        <div className="col-lg-5"></div>
      </div>
    </div>
  );
};

export default FilmInfo;
