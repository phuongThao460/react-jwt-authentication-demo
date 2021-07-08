import React, { Component } from "react";
import { Link } from "react-router-dom";

var data = 
  {
    email: ""
  }
class Login extends Component {
  storeEmail = (event) => {
    data.email = event.target.value;
  };
  render() {
    return (
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input
          type="email"
          placeholder="Email address"
          onChange={this.storeEmail}
        />
        <Link
          to={{
            pathname: "../components/Nav.js",
            data: data,
          }}
        >
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </Link>
      </form>
    );
  }
}
export default Login;
