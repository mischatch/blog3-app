import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import Navigation from './navigation';
import { compose } from 'recompose';

const mapStateToProps = ({ session }) => {
  debugger
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    session: session,
  };
};



// const mapDispatchToProps = dispatch => {
//   return {
//
//   };
// };


export default connect(mapStateToProps)(Navigation);
