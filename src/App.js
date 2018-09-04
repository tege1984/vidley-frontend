import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="nav bg-light">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Vidly
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
        </ul>

        <main role="main" className="container">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect from="/" to="/movies" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
