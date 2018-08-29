import React, { Component } from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";
import Like from "./common/Like";

class MoviesTable extends Component {
  render() {
    const columns = [
      { path: "title", lable: "Title" },
      { path: "genre.name", lable: "Genre" },
      { path: "numberInStock", lable: "Stock" },
      { path: "dailyRentalRate", lable: "Rate" },
      {
        key: "like",
        content: movie => (
          <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        )
      },

      {
        key: "delete",
        content: movie => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        )
      }
    ];
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          sortColumn={sortColumn}
          columns={columns}
        />
        <TableBody
          data={movies}
          columns={columns}
          onLike={onLike}
          onDelete={onDelete}
        />
      </table>
    );
  }
}

export default MoviesTable;
