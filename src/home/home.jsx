import React, { Component } from 'react';
import { firebase } from '../firebase';
import Post from '../post/post';

class Home extends Component {
  constructor(props){
    super(props);

    this.removePost = this.removePost.bind(this);
    this.postsToRender = this.postsToRender.bind(this);
  }

  componentDidMount() {
    const { onSetAuthUser } = this.props;

    firebase.auth.onAuthStateChanged(authUser => {
       authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
       });

    this.props.getAllPosts();
  }

  componentWillMount(){
    this.props.getAllPosts();
  }

  removePost(id){
    this.props.deletePost(id);
  }

  postsToRender(){
    // const { users } = this.props;
    const { posts } = this.props;
    if(!posts){
      return (
        <div>
          <h1>Home Page</h1>
          <h5>You Have No Posts Yet</h5>
        </div>
      );
    } else {
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

  render(){
    return (
      <div>
        {this.postsToRender()}
      </div>
    )
  }
}

export default Home;
