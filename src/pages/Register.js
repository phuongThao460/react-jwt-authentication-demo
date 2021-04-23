import React, { Component } from "react";
import Axios from 'axios';

class Register extends Component {
  // npm install -g json-server
  //json-server --watch db.json
  submit = e => {
    e.preventDefault();
    const data = {
      emailData: this.email,
      passwordData: this.password
    }
    Axios.post("register", {data} , {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'}
    })
      .then((response) => {
        console.log(response);
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
        <form >
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
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
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Register;
