import React, { Component } from "react";
import Like from "./Like";

class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.movies.map(m => (
          <tr key={m._id}>
            <td> {m.title} </td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like liked={m.liked} onClick={() => this.props.onLike(m)} />
            </td>
            <td>
              <button
                onClick={() => this.props.onDelete(m)}
                className="btn btn-danger btn-sm m-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
