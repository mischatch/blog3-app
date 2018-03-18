import { Link } from 'react-router-dom';
import React from 'react';

class Navigation extends React.Component{
  constructor(props){
    super(props);

    this.showLink = this.showLink.bind(this);
  }

  showLink(){
    if(!this.props.loggedIn){
      return (<div><Link to="/login">Login</Link></div>);
    } else {
      return (
      <div>
        {this.props.session.currentUser.email}
        Logout
      </div>)
    }
  }

  render(){
    debugger
    return(
      <div>
        { this.showLink() }
      </div>
    )
  }

}

export default Navigation;
