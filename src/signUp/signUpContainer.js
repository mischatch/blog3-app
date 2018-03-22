import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUp from './signUp';

// const mapStateToProps = state => {
//
// };


const mapDispatchToProps = (dispatch) => {
  return {
    signup: authUser => dispatch(signup(authUser)),
  };
};

export default withRouter(connect(mapDispatchToProps)(SignUp));
