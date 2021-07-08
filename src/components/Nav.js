import React, { Component } from "react";
//import Login from '../pages/Login'
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    var menu;
    const {data} = this.props.location;
    if (data.email === "") {
      menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li>{data.email}</li>
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      );
    } else {
      menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <div>{menu}</div>
        </div>
      </nav>
    );
  }
}
export default Nav;
