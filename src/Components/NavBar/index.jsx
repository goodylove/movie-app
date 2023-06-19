import React from "react";
import { useState, useContext, useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { ContextHolder } from "../Context";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
export default function Nav() {
  const { search, searchResult, upDateMovieState, handleSearchValue } =
    useContext(ContextHolder);
  const [searchInput, setSearchInput] = useState(false);
  const myRef = useRef(null);
  return (
    <main className="w-full fixed z-50 top-0  mb-5">
      <nav className="bg-[#0D1C1E] py-2 flex justify-between w-full   ">
        <div className="  p-4 flex justify-between w-full relative">
          <h3 className="text-white">
            MOVIE. <span className="text-orange-300">HOME</span>
          </h3>

          <div>
            <BiSearchAlt2
              className="text-white text-[20px]"
              onClick={() => setSearchInput((prev) => !prev)}
            />
          </div>
          {/* onclick on search icon show search input */}
          {searchInput && (
            <div className="absolute top-2 right-12    jump">
              <input
                type="search"
                placeholder="Search any move"
                className="p-2  rounded-md border-none  outline-0 "
                onChange={(e) => handleSearchValue(e)}
              />
            </div>
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
