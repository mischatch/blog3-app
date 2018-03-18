import React, { Component } from 'react';
import { firebase, db } from '../firebase';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { onSetAuthUser } = this.props;

    firebase.auth.onAuthStateChanged(authUser => {
       authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
       });
  }

  render(){
    const { users } = this.props;
    return(
      <div>
        Home
      </div>
    )
  }
}

export default Home;
