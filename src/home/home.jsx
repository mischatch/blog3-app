import React, { Component } from 'react';
import { firebase } from '../firebase';
import Post from '../post/post';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
    };

    this.removePost = this.removePost.bind(this);
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
    this.props.getAllPosts();

  }

  removePost(id){
    debugger
    this.props.deletePost(id);
  }

  render(){
    // const { users } = this.props;
    const { posts } = this.props;
    if(!posts) return null;
    debugger
    return(
      <div>
        <h1>Home Page</h1>
        { Object.keys(posts).map((key) => <Post
          key={key}
          post={posts[key]}
          id={key}
          removePost={this.removePost}
          />) }
        <ul>
        </ul>
      </div>
    )
  }
}

export default Home;
