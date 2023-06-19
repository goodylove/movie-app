import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useState, useRef } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function MovieCard({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // function to handle favorite movie
  const handleFavoriteIcon = () => {
    setFavorite((prev) => !prev);
  };

  const { title, release_date, poster_path, overview } = data;
  const img = API_IMG + poster_path;

  return (
    <>
      {/* if the movie image is undefine hide the movie card */}
      {poster_path === undefined ? (
        ""
      ) : (
        <div className="">
          <div className="cursor-pointer   h-auto  ">
            <div className="relative  h-auto w-[150px]  md:w-[250px] rounded shadow-lg ">
              <div className="max-w-[400px] h-[200px]">
                <img src={img} alt="" className=" rounded-t h-full w-full" />
              </div>
              <div onClick={handleFavoriteIcon}>
                {favorite ? (
                  <MdOutlineFavorite className="absolute top-[10rem] right-7 text-[30px] bg-gray-300 rounded-md px-[5px] text-gray-800 hover:scale-x-95 lg:top-[10rem]" />
                ) : (
                  <MdOutlineFavoriteBorder className="absolute top-[10rem] right-7 text-[30px] bg-gray-300 rounded-md px-[5px] text-gray-800 hover:scale-x-95 lg:top-[10rem]" />
                )}
              </div>
              <div className="flex  p-2 bg-black text-white items-center rounded-b   justify-between">
                <div className="flex  items-start flex-col py-1">
                  <span className="font-[300] text-[9px] md:text-[10px] text-start">
                    {title}
                  </span>
                  <span className=" font-Poppins md:text-[13px]  text-[10px] font-[100]">
                    {release_date}
                  </span>
                </div>

                <button
                  className="text-[12px] font-[200] border-[1px] px-[3px] rounded py-[2px]"
                  onClick={() => setOpenModal(true)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          {/* modal section */}
          {openModal && (
            <div
              onClick={() => setOpenModal(false)}
              className="h-[90%] w-[100%] left-[2.2%]   fixed bg-[#21201e] opacity-[0.9] top-[2.9%]  z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[540px] w-[77%] fixed left-[20%]  top-[30px] lg:top-[17%] lg:left-[30%]   flex shadow-md rounded-md flex-col md:flex-row lg:flex-row "
              >
                <img
                  src={img}
                  alt="image"
                  className="w-[250px] object-cover h-[305px]"
                />
                <div className="w-[100%]">
                  <AiOutlineCloseCircle
                    className="fixed top-[8px] right-[8px] text-white"
                    onClick={() => setOpenModal(false)}
                  />
                  <div className="flex flex-col items-start text-white p-[1rem]">
                    <p className="text-[13px] mt-[10px]">Name:{title}</p>
                    <p className="text-[13px] mt-[10px]">
                      Year of relase: {release_date}
                    </p>
                    <p className="text-[10px] mt-[10px] text-start">
                      Overview <br />
                      {overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MovieCard;
