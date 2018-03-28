import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navigation from './navigation';
import { logout } from '../actions/session_actions';
import { receiveCurrentUser } from '../actions/session_actions';


const mapStateToProps = ( { session } ) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    errors: session.errors,
  };
};



const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    onSetAuthUser: (authUser) => dispatch(receiveCurrentUser(authUser)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
