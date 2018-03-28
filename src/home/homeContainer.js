import { connect } from 'react-redux';
import Home from './home';
import { receiveCurrentUser } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';




const mapStateToProps = state => {
    return {
      users: state.users,
    };
};

const mapDispatchToProps = dispatch => {
  return{
    onSetAuthUser: (authUser) => dispatch(receiveCurrentUser(authUser)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
