import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUp from './signUp';
import { signup } from '../actions/session_actions'

const mapStateToProps = state => {
  return {
    state: state,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    signup: authUser => dispatch(signup(authUser)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
