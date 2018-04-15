import { Link } from 'react-router-dom';
import React from 'react';
import { firebase } from '../firebase';

class Navigation extends React.Component{
  constructor(props){
    super(props);

    this.showLink = this.showLink.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount(){
    const { onSetAuthUser } = this.props;

  }

  logout(e){
    e.preventDefault();
    this.props.logout()
      .then(() => {
        this.props.history.push('/');
      });
  }

  login(e){
    e.preventDefault();
    this.props.history.push('/login');
  }


  showLink(){
    if(!this.props.loggedIn){
      if(this.props.history.location.pathname !== '/login'){
        return (<div>
                  <button onClick={this.login}className="button button-outline">
                    Login
                  </button>
                </div>);
      } else {
        return (<div>
                  <Link to='/'>Home</Link>
                </div>)
      }
    } else {
      return (
      <div className='nav-container'>
        <button className="button button-outline" type="submit" onClick={this.logout}>Logout</button>
        <span>{this.props.currentUser.email}</span>
        <Link to='/profile'>Profile</Link>
        <Link to='/'>Home</Link>
      </div>)
    }
  }

  render(){
    return(
      <div className=''>
        <h5>Navigation</h5>
        { this.showLink() }
      </div>
    )
  }

}

export default Navigation;
