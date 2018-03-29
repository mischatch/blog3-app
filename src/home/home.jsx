import React, { Component } from 'react';
import { firebase } from '../firebase';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const { onSetAuthUser } = this.props;

    firebase.auth.onAuthStateChanged(authUser => {
       authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
       });

    this.setState({
      posts: this.props.getAllPosts()
    });
  }

  render(){
    // const { users } = this.props;
    const { posts } = this.state;
    debugger
    return(
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default Home;
