import React, { Component } from 'react';
import { firebase } from '../firebase';
import Post from '../post/post';
import { deleteAlbum } from '../aws/aws-exports';
import Modal from 'react-modal';
import 'react-quill/dist/quill.snow.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      link: '',
    };

    this.removePost = this.removePost.bind(this);
    this.postsToRender = this.postsToRender.bind(this);
    this.goToEditPost = this.goToEditPost.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    deleteAlbum(id);
  }

  goToEditPost(id){
    this.props.history.push(`/posts/${id}`);
  }

  openModal(e){

    this.setState({ modalOpen: true, link: e.target.src });
  }

  closeModal() {
    this.setState({ modalOpen: false, link: '' });
  }

  postsToRender(){
    const { posts, loggedIn } = this.props;
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
            { Object.keys(posts).reverse().map((key) => <Post
              key={key}
              post={posts[key]}
              id={key}
              loggedIn={loggedIn}
              removePost={this.removePost}
              goToEditPost={this.goToEditPost}
              openModal={this.openModal}
              />) }
            <ul>
            </ul>
            <Modal
              contentLabel="Modal"
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={customStyles}>
              <img src={this.state.link} />
            </Modal>
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
