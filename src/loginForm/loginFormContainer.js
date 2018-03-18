import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/session_actions';



const mapStateToProps = ({ session }) => {
  return {
    session: session,
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    login: (authUser) => dispatch(login(authUser)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
