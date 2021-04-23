import React, { Component } from 'react'
//import axios from 'axios'
export default class Home extends Component {
  render(){
    if(this.props.user)
    {
      return(
        <h2>hi {this.props.user.emailData}</h2>
      )
    }
    return (
      <h2>You not loggin here</h2>
    )
  }
}


