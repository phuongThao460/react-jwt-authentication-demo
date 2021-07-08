import React from 'react';
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
//import Register from "./pages/Register";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
//import { Component } from "react";
//import axios from 'axios'

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Nav/>
              <main className="form-signin">
                  <Route path="/home"  component={Home}/>
                  <Route path="/" exact component={Login}/>
                  {/* <Route path="/register" component={Register}/> */}
              </main>
          </BrowserRouter>
      </div>
  );
}

export default App;