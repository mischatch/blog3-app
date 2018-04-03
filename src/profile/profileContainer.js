import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { changePass, resetPass, login } from '../actions/session_actions';
import { createPost } from '../actions/post_actions';
import { upload } from '../actions/images_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    loggedIn: Boolean(session.currentUser),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    changePass: newPass => dispatch(changePass(newPass)),
    resetPass: email => dispatch(resetPass(email)),
    login: authUser => dispatch(login(authUser)),
    createPost: post => dispatch(createPost(post)),
    upload: (images, postID) => dispatch(upload(images, postID)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
