import React from "react";
import { useState, useContext, useRef, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { ContextHolder } from "../Context";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
export default function Nav() {
  const {
    search,
    searchResult,
    upDateMovieState,
    handleSearchValue,
    isFound,
    setIsFound,
  } = useContext(ContextHolder);
  const [searchInput, setSearchInput] = useState(false);
  const [removeSearchList, setRemoveSearchList] = useState(searchResult);
  const myRef = useRef(null);

  useEffect(() => {
    const handleBubbling = (e) => {
      if (myRef.current && !myRef.current.contains(e.target)) {
        setRemoveSearchList(!removeSearchList);
        setSearchInput(!searchInput);
        setIsFound(false);
      }
    };
    document.body.addEventListener("click", handleBubbling);

    return () => {
      document.body.removeEventListener("click", handleBubbling);
    };
  }, [removeSearchList, isFound, search, searchResult]);
  return (
    <main className="w-full fixed z-50 top-0  mb-5">
      <nav className="bg-[#0D1C1E] py-2 flex justify-between w-full  relative  ">
        <div className="p-4 flex justify-between w-full relative">
          <h3 className="text-white text-[14px] font-[400]">
            MOVIE.<span className="text-orange-300">HOME</span>
          </h3>

          <div>
            <BiSearchAlt2
              className="text-white text-[30px]"
              onClick={() => setSearchInput((prev) => !prev)}
            />
          </div>
          {/* onclick on search icon show search input */}
          {searchInput && (
            <div className="absolute top-2 right-12    jump">
              <input
                type="search"
                placeholder="Search any move"
                className="p-2  search  rounded-md border-none  outline-0 w-full "
                onChange={(e) => handleSearchValue(e)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          {isFound && (
            <ul className="not-found" ref={myRef}>
              <li> No Result Found</li>
            </ul>
          )}
          {/* if searchInput is true show the list of avaliable search */}
          {searchInput && (
            <ul className={`list-search-item`} ref={myRef} id="list">
              {search &&
                searchResult?.map((item, index) => {
                  return (
                    <li
                      className="search-item"
                      key={index}
                      onClick={(e) => {
                        upDateMovieState(item), e.stopPropagation();
                      }}
                    >
                      <div>
                        <img
                          src={API_IMG + item.poster_path}
                          alt="movie-image"
                        />
                      </div>
                      <div className="info">
                        <h3>{item.title}</h3>
                        <p>{item.release_date}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </nav>
    </main>
  );
}
