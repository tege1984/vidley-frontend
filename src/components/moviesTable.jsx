import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/Table";

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
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        data={movies}
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
