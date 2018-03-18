import { Link } from 'react-router-dom';
import React from 'react';
import { firebase, auth } from '../firebase';

class Navigation extends React.Component{
  constructor(props){
    super(props);

    this.showLink = this.showLink.bind(this);
    this.handleLogout = this.handleLogout(this);
  }

  // componentDidMount(){
  //   const { onSetAuthUser } = this.props;
  //   firebase.auth.onAuthStateChanged(authUser => {
  //      authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
  //      });
  // }

  // componentWillReceiveProps(newProps){
  //   debugger
  // }

  handleLogout(e){
    // e.preventDefault()
    console.log('taptaptaptaptaptaptaptaptaptaptaptaptap!');
    debugger
    const { history } = this.props;
    this.props.logout()
    .then(
      () => {
        history.push('/login');
      });

  }

  showLink(){
    if(!this.props.loggedIn){
      debugger
      return (<div><Link to="/login">Login</Link></div>);
    } else {
      debugger
      return (
      <div>
        {this.props.session.currentUser.email}
      <br/>
      <button type="submit" onClick={this.props.logout}>Logout</button>
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
