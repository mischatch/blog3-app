import { connect } from 'react-redux';
import Home from './home';
import { receiveCurrentUser } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { getAllPosts, deletePost } from '../actions/post_actions';
import { addDataToPost } from '../actions/post_actions';



const mapStateToProps = state => {
    debugger
    return {
      loggedIn: Boolean(state.session.currentUser),
      posts: state.posts.posts,
    };
};

const mapDispatchToProps = dispatch => {
  return{
    onSetAuthUser: (authUser) => dispatch(receiveCurrentUser(authUser)),
    getAllPosts: () => dispatch(getAllPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
    addDataToPost: (postUpd, postID) => dispatch(addDataToPost(postUpd, postID)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
