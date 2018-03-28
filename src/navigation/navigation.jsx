import { Link } from 'react-router-dom';
import React from 'react';

class Navigation extends React.Component{
  constructor(props){
    super(props);

    this.showLink = this.showLink.bind(this);
    this.logout = this.logout.bind(this);
  }

  // componentDidMount(){
  //   const { onSetAuthUser } = this.props;
  //   firebase.auth.onAuthStateChanged(authUser => {
  //      authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
  //      });
  // }

  // componentWillReceiveProps(newProps){
  // }

  logout(e){
    e.preventDefault();

    this.props.logout()
      .then(() => {
        this.props.history.push('/');
      });
  }


  showLink(){
    if(!this.props.loggedIn){
      if(this.props.history.location.pathname !== '/login'){
        return (<div><Link to="/login">Login</Link></div>);
      } else {
        return (<div></div>)
      }
    } else {
      return (
      <div>
        {this.props.currentUser.email}
      <br/>
      <button type="submit" onClick={this.logout}>Logout</button>
      </div>)
    }
  }

  render(){
    return(
      <div>
        { this.showLink() }
      </div>
    )
  }

}

export default Navigation;
