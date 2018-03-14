import { auth } from '../firebase';
import LoginForm from './loginForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



const mapStateToProps = ({ session }) => {
  debugger
  return {
    session: session,
  };
};



const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    onLogin: authUser => dispatch({ type: "AUTH_USER_SET", authUser }),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
