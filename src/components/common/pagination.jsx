import React, { Component } from "react";

// input: data
// output: raise events

const Pagination = props => {
  console.log(props);
  const { movies, onClick } = props;
  const pageLimit = 2;
  const totalItems = movies.length;

  const pageCount =
    totalItems % pageLimit
      ? Math.floor(totalItems / pageLimit) + 1
      : Math.floor(totalItems / pageLimit);
  //console.log(Array.from(Array(pageCount).keys()));
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {Array.from(Array(pageCount).keys()).map(p => (
          <li
            onClick={() => onClick(p + 1, pageLimit, movies)}
            key={p + 1}
            className="page-item"
          >
            <a className="page-link" href="#">
              {p + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
