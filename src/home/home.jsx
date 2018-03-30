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

       this.props.getAllPosts();

       // this.setState({
       //   posts: posts,
       // });
  }

  componentWillMount(){
    debugger
    this.props.getAllPosts();

  }

  render(){
    // const { users } = this.props;
    const { posts } = this.props;
    if(!posts) return null;
    debugger
    return(
      <div>
        <h1>Home Page</h1>
        { posts.map((post, i) => <Post key={i} post={post} />) }
        <ul>
        </ul>
      </div>
    )
  }
}

export default Home;
