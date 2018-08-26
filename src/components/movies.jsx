import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { filterItem } from "../utils/filterItem";
import ListGroup from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentPage: 1,
    currentFilter: null,
    pageSize: 4
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    console.log("like icon cliked", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handelPageChange = page => {
    // const moviesInPage = movies.slice(
    //   pageCount * pageLimit - pageLimit,
    //   pageCount * pageLimit
    // );
    // this.setState({ movies: moviesInPage });
    this.setState({ currentPage: page });
    //console.log(page);
  };

  handleFilterChange = filter => {
    console.log(filter);
    this.setState({
      currentFilter: filter,
      currentPage: 1
    });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      currentFilter
    } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;

    const filteredItems = filterItem(allMovies, currentFilter);
    console.log(filteredItems);
    const movies = paginate(filteredItems, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup
              currentFilter={this.state.currentFilter}
              items={this.state.genres}
              onFilterChange={this.handleFilterChange}
            />
          </div>
          <div className="col-10">
            <p>Showing {count} movies are the database.</p>

            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Gener</th>
                  <th>Stoke</th>
                  <th>Rate</th>
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
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />{" "}
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
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

            <Pagination
              itemsCount={filteredItems.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handelPageChange}
              // movies={this.state.movies}
              // onClick={this.handlePagination}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
