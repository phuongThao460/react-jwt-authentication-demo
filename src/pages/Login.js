import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  submit = e => {
    e.preventDefault();
    const data = {
      emailData: this.email,
      passwordData: this.password
    }
    Axios.post("login", {data} , {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'}
    })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      });
  };
  render() {
    return (
      <>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please log in</h1>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            onChange={e => this.email = e.target.value}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={e => this.password = e.target.value}
          />
          <button onClick={this.submit} className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
          </button>
          
        </form>
      </>
    );
  }
}

export default Login;
