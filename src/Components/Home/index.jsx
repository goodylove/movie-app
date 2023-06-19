import React from "react";
import Slider from "./../Slider/index";
import imgS from "/Rectangle 201.png";
import { useState, useRef, useContext, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { ContextHolder } from "../Context";
import MovieCard from "./../movieCard";
import Pagination from "./../Pagination";
import SingleMovieCard from "../singleMovie";
import Footer from "./../footer/index";

export default function Home() {
  const [searchInput, setSearchInput] = useState(false);
  const myRef = useRef(null);

  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const {
    upDateMovies,
    loading,
    error,
    isFound,
    search,
    upDateMovieState,
    searchResult,
    setSearch,
    setIsFound,
    currentPage,
    postLimit,
    movies,
    updateCurrentPage,

    handleSearchValue,
  } = useContext(ContextHolder);
  const [removeSearchList, setRemoveSearchList] = useState(searchResult);

  return (
    <>
      <section
        className={`w-full  home  justify-center  flex relative items-center mt-[3rem] lg:mt-[3rem] overflow-y-scroll   ${
          error
            ? "h-[430px] lg:h-[597px] md:h-[890px]"
            : "h-[100%]  lg:h-[570px]"
        }`}
      >
        <section className="w-[80%]">
          {/* upDateMovies list section  */}
          <div className="text-white text-center text-[20px] font-[500] mt-[30px]">
            {loading && <h3>Loading....</h3>}
            {error && (
              <div className="text-white text-center text-[20px] font-[500] mt-[50px]">
                <h3
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: 500,
                    marginTop: "50px",
                  }}
                  cl
                >
                  Failed To Fetch{" "}
                </h3>
              </div>
            )}
            {upDateMovies && (
              <>
                {upDateMovies.length > 0 ? (
                  <div className="    grid-cols-2 grid xl:grid-cols-3  xl:gap-9 lg:gap-10  gap-5 md:grid-cols-3  w-full sm:grid-cols-2 md:gap-9 justify-items-center">
                    {upDateMovies?.map((movie, index) => {
                      return <MovieCard key={index} data={movie} />;
                    })}
                  </div>
                ) : (
                  <div className="single-move">
                    <SingleMovieCard data={upDateMovies} />
                  </div>
                )}
              </>
            )}
          </div>

          {/*  pagination  starts here */}
          <Pagination
            postLimit={postLimit}
            totalMovie={movies.length}
            pagnate={updateCurrentPage}
          />
        </section>
      </section>
      <Footer />
    </>
  );
}
