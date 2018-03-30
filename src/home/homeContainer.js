import { connect } from 'react-redux';
import Home from './home';
import { receiveCurrentUser } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { getAllPosts } from '../actions/post_actions';



const mapStateToProps = state => {
    debugger
    return {
      // users: state.users,
      posts: state.posts.posts,
    };
};

const mapDispatchToProps = dispatch => {
  return{
    onSetAuthUser: (authUser) => dispatch(receiveCurrentUser(authUser)),
    getAllPosts: () => dispatch(getAllPosts()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
