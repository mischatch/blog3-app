import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/session_actions';



const mapStateToProps = ({ session }) => {
  // debugger
  return {
    session: session,
  };
};



const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    login: (authUser) => dispatch(login(authUser)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
