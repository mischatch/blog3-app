import React, { Component } from 'react';
import { firebase } from '../firebase';
import Post from '../post/post';
import { deleteAlbum } from '../aws/aws-exports';
import Modal from 'react-modal';
import 'react-quill/dist/quill.snow.css';
import Image from '../image/image';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '1300px',
    height                : '600px',
  }
};

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      info: {},
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

    // this.props.getAllPosts();
  }

  componentWillMount(){
    debugger
    this.props.getAllPosts();
  }

  removePost(id){
    this.props.deletePost(id);
    deleteAlbum(id);
  }

  goToEditPost(id){
    this.props.history.push(`/posts/${id}`);
  }

  openModal(e, id, images, current){
    this.setState({
      modalOpen: true,
      info: {
        id,
        images: images,
        current
      }
    });
  }

  closeModal() {
    this.setState({ modalOpen: false, info: {} });
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
              ariaHideApp={false}
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={customStyles}  >
              <Image
                id={this.state.info.id}
                images={this.state.info.images}
                current={this.state.info.current}
                />
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
