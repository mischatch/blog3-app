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



const mapDispatchToProps = (dispatch) => ({
  onLogin: authUser => dispatch({ type: "RECEIVE_CURRENT_USER", authUser }),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
