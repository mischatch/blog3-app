import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { changePass, login } from '../actions/session_actions';

const mapStateToProps = ({ session }) => {
  debugger
  return {
    currentUser: session.currentUser,
    loggedIn: Boolean(session.currentUser),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    changePass: newPass => dispatch(changePass(newPass)),
    login: (authUser) => dispatch(login(authUser)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
