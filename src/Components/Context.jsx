import React, { createContext, useEffect, useRef, useState } from "react";

export const ContextHolder = createContext(null);

// context is used to pass porps to components, and helps to  avoid props drilling

export const ContextProvider = ({ children }) => {
  // movie url
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=786a951536a61a5d74e7595f5007b3aa";
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [isFound, setIsFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postLimit, setPostLimit] = useState(6);
  // fuction   fatch movie
  const handleFetchMovie = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setMovie(data.results);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetchMovie();
  }, []);

  // function handle  Fetch search results
  const handleFetchSearchResults = async (value) => {
    try {
      // search url
      const url = `https://api.themoviedb.org/3/search/movie?api_key=786a951536a61a5d74e7595f5007b3aa&query=${value}`;
      const response = await fetch(url);
      const data = await response.json();
      const result = data.results.filter((data, index) => {
        if (
          value &&
          data.title &&
          data.title.toLowerCase().includes(value.toLowerCase())
        ) {
          setIsFound(false);
          return data;
        } else {
          setIsFound(true);
        }
      });

      setSearchResult(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  // function to updata movies from the search results
  const upDateMovieState = (movie) => {
    setMovie(movie);
  };

  // function to update search value
  const handleSearchValue = (e) => {
    let value = e.target.value;
    setSearch(value);
    if (value) {
      handleFetchSearchResults(value);
    }
  };
  // updata the current page
  const updateCurrentPage = (num) => setCurrentPage(num);

  // functionalities for pagination
  const indexOfLastMovies = currentPage * postLimit;
  const indexOfFirstMovies = indexOfLastMovies - postLimit;
  const upDateMovies =
    movies.length > 0
      ? movies?.slice(indexOfFirstMovies, indexOfLastMovies)
      : movies;

  const contextCont = {
    upDateMovies,
    loading,
    error,
    search,
    currentPage,
    postLimit,
    movies,
    upDateMovieState,
    handleFetchSearchResults,
    handleSearchValue,
    searchResult,
    setSearch,
    isFound,
    setIsFound,
    updateCurrentPage,
  };

  return (
    <ContextHolder.Provider value={contextCont}>
      {children}
    </ContextHolder.Provider>
  );
};
