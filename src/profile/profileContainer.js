import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { changePass, resetPass, login, receiveCurrentUser } from '../actions/session_actions';
import { createPost, addDataToPost } from '../actions/post_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    loggedIn: Boolean(session.currentUser),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onSetAuthUser: (authUser) => dispatch(receiveCurrentUser(authUser)),
    changePass: newPass => dispatch(changePass(newPass)),
    resetPass: email => dispatch(resetPass(email)),
    login: authUser => dispatch(login(authUser)),
    createPost: post => dispatch(createPost(post)),
    addDataToPost: (postUpd, postID) => dispatch(addDataToPost(postUpd, postID)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
