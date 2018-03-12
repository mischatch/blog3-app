import { Link } from 'react-router-dom';
import React from 'react';

class Navigation extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    debugger
    return(
      <div>
        <Link to="/login">Login</Link>
      </div>
    )
  }

}

export default Navigation;
