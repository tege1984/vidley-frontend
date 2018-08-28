import React from "react";
import Like from "./common/Like";
const MoviesTable = props => {
  const { movies, onLike, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ cursor: "pointer" }} onClick={() => onSort("title")}>
            Title
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("genre.name")}
          >
            Gener
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("numberInStock")}
          >
            Stoke
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("dailyRentalRate")}
          >
            Rate
          </th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              {" "}
              <Like liked={movie.liked} onClick={() => onLike(movie)} />{" "}
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm m-2"
              >
                {" "}
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
