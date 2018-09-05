import React, { Component } from "react";

class MoviesForm extends Component {
  handleClick = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1> movies Form {this.props.match.params.id} </h1>
        <button onClick={this.handleClick} className="btn btn-primary">
          Save
        </button>
      </div>
    );
  }
}

export default MoviesForm;
