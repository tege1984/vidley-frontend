import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

// input: data
// output: raise events

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;

// const { movies, onClick } = props;
// const pageLimit = 2;
// const totalItems = movies.length;

// const pageCount =
//   totalItems % pageLimit
//     ? Math.floor(totalItems / pageLimit) + 1
//     : Math.floor(totalItems / pageLimit);
//console.log(Array.from(Array(pageCount).keys()));

// <nav aria-label="Page navigation example">
//   <ul className="pagination">
//     {Array.from(Array(pageCount).keys()).map(p => (
//       <li
//         onClick={() => onClick(p + 1, pageLimit, movies)}
//         key={p + 1}
//         className="page-item"
//       >
//         <a className="page-link" href="#">
//           {p + 1}
//         </a>
//       </li>
//     ))}
//   </ul>
// </nav>
