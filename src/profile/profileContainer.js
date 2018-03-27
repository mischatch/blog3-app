import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { changePass } from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    state: state,
    loggedIn: Boolean(state.session.currentUser),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    changePass: newPass => dispatch(changePass(newPass)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
