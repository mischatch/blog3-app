import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';

const mapStateToProps = state => {
  return {
    state: state,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    changePass: authUser => dispatch(changePass(authUser)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
