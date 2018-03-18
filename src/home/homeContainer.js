import { connect } from 'react-redux';
import Home from './home';
import { receiveCurrentUser } from '../actions/session_actions';



const mapStateToProps = state => {
    // debugger
    return {
      users: state.users,
    };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return{
    onSetAuthUser: (authUser) => dispatch(receiveCurrentUser(authUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
