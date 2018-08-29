import React, { Component } from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";

class MoviesTable extends Component {
  render() {
    const columns = [
      { path: "title", lable: "Title" },
      { path: "genre.name", lable: "Genre" },
      { path: "numberInStock", lable: "Stock" },
      { path: "dailyRentalRate", lable: "Rate" },
      { key: "like" },
      { key: "delete" }
    ];

    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          sortColumn={sortColumn}
          columns={columns}
        />
        <TableBody movies={movies} onLike={onLike} onDelete={onDelete} />
      </table>
    );
  }
}

export default MoviesTable;
