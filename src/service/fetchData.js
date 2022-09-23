import fetch from "node-fetch";

const url = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/original/";
const imageUrlPos_low = "https://image.tmdb.org/t/p/w500/";
const popularUrl = `${url}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1&region=TW`;
const nowPlayingUrl = `${url}/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1&region=TW`;
const upComingUrl = `${url}/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1&region=TW`;
const genreUrl = `${url}/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
const movieUrl = `${url}/movie`;
const moviesUrl = `${url}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en_US&page=1&with_genres=`;

export const fecthNowPlayingMovies = async () => {
  try {
    const data = await fetch(nowPlayingUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenres = async () => {
  try {
    const data = await fetch(genreUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.genres;
    const dataNeeded = dataResult.map((g) => ({
      id: g.id,
      name: g.name,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const Url = moviesUrl + genre_id;
    const data = await fetch(Url);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fecthPopularMovies = async () => {
  try {
    const data = await fetch(popularUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopRatedMovies = async (page) => {
  try {
    const topRatedUrl = `${url}/movie/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${page}&region=TW`;
    console.log(topRatedUrl);
    const imageUrlLow = "https://image.tmdb.org/t/p/w300/";
    const data = await fetch(topRatedUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      backdrop_path_low: imageUrlLow + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetail = async (id) => {
  try {
    const url = `${movieUrl}/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieVideos = async (id) => {
  try {
    const videoUrl = `${url}/movie/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(videoUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    return dataResult[0];
  } catch (error) {
    console.log(error);
    return;
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const CastUrl = `${url}/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(CastUrl);
    const dataJson = await data.json();
    const dataCast = dataJson.cast;
    const dataNeeded = dataCast.map((c) => ({
      id: c.cast_id,
      name: c.name,
      character: c.character,
      profile_path: "https://image.tmdb.org/t/p/w200/" + c.profile_path,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSimilarMovies = async (id) => {
  try {
    const similarMoviesUrl = `${url}/movie/${id}/similar?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(similarMoviesUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const data = await fetch(upComingUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async (searchKey) => {
  try {
    const searchUrl = `${url}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${searchKey}&page=1&include_adult=false`;
    const data = await fetch(searchUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrl + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};
