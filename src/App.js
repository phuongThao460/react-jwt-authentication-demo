import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Component } from "react";
import axios from 'axios'

export default class App extends Component {
  state = {}
  componentDidMount = () => {
    axios.get("user").then(
      res => {
        this.setState({
          user: res.data
        })
      }, err => {
        console.log(err);
      }
    )
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Nav user = {this.state.user}/>
          <main className="form-signin">
            <Route path="/" exact component={() => <Home user={this.state.user}/>} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}