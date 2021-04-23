import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    let buttons;

    if (this.props.user) {
      buttons = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Log out
            </Link>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link" to="/login" onClick={() => localStorage.clear()}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <div>{buttons}</div>
          </div>
        </nav>
      </>
    );
  }
}
