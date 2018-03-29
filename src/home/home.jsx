import React, { Component } from 'react';
import { firebase } from '../firebase';
import Post from '../post/post';

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

  componentWillMount(){
    this.setState({
      posts: this.props.getAllPosts()
    });
  }

  render(){
    // const { users } = this.props;
    const { posts } = this.props;
    debugger
    return(
      <div>
        <h1>Home Page</h1>
        <ul>
          { [1, 2, 3].map((post, i) => <Post key={i} />) }
        </ul>
      </div>
    )
  }
}

export default Home;
