import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { firebase, auth } from '../firebase';
import Navigation from './navigation';
// import { compose } from 'recompose';
import { logout } from '../actions/session_actions';
import { receiveCurrentUser } from '../actions/session_actions';


const mapStateToProps = ( { session } ) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    session: session,
  };
};



const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    onSetAuthUser: (authUser) => dispatch(receiveCurrentUser(authUser)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
