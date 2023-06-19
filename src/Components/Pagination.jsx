import React, { useContext } from "react";
import { ContextHolder } from "./Context";
function Pagination({ postLimit, totalMovie, pagnate }) {
  const { currentPage } = useContext(ContextHolder);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalMovie / postLimit); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="flex justify-center w-full my-3">
      <ul className="flex gap-3">
        {pageNumber.map((number, index) => (
          <li
            key={index}
            onClick={() => {
              pagnate(number);
            }}
            className={`${
              number === currentPage
                ? "bg-blue-300  rounded-sm text-white w-5 text-center shadow-lg "
                : "bg-white rounded-sm w-5 text-center shadow-lg "
            }`}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
