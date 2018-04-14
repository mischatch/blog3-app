import React, { Component } from 'react';
import { firebase } from '../firebase';
import { deletePostPhotos } from '../firebase/storage';
import Post from '../post/post';
import isEmpty from 'lodash';
import { deleteAlbum } from '../aws/aws-exports';

class Home extends Component {
  constructor(props){
    super(props);

    this.removePost = this.removePost.bind(this);
    this.postsToRender = this.postsToRender.bind(this);
    this.goToEditPost = this.goToEditPost.bind(this);
  }

  componentDidMount() {
    // const { onSetAuthUser } = this.props;
    //
    // firebase.auth.onAuthStateChanged(authUser => {
    //    authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
    //    });

    this.props.getAllPosts();
    // this.props.getAllImages();
  }

  componentWillMount(){
    this.props.getAllPosts();
    // this.props.getAllImages();
  }

  removePost(id){
    // this.props.deletePost(id);
    deleteAlbum(id);
  }

  goToEditPost(id){
    this.props.history.push(`/posts/${id}`);
  }

  postsToRender(){
    // const { users } = this.props;
    const { posts, images } = this.props;
    // debugger
    if(!posts){
    // if(Object.keys(posts).length === 0 && Object.keys(images).length === 0){
      return (
        <div>
          <h1>Home Page</h1>
          <h5>You Have No Posts Yet</h5>
        </div>
      );
    } else {
      // debugger
        return(
          <div>
            <h1>Home Page</h1>
            { Object.keys(posts).map((key) => <Post
              key={key}
              post={posts[key]}
              id={key}
              removePost={this.removePost}
              goToEditPost={this.goToEditPost}
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
