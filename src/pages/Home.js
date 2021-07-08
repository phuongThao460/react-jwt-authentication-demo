import React, {Component} from "react";

class Home extends Component {
  render(){
    const {data} = this.props.location;
    return(
      <div>
        {data.email === '' ? "nothing here"  : (<p>{data.email}</p>)}
      </div>
    )
  }
}
export default Home;



