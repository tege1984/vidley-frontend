import React from "react";

const MoviesForm = ({ match, history }) => {
  return (
    <div>
      <h1> movies Form {match.params.id} </h1>
      <button
        onClick={() => history.push("/movies")}
        className="btn btn-primary"
      >
        Save
      </button>
    </div>
  );
};

export default MoviesForm;
