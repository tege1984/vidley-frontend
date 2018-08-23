import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Pagination from "./components/common/pagination";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Movies />
        <Pagination />
      </main>
    );
  }
}

export default App;
