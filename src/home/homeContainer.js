import { connect } from 'react-redux';
import Home from './home';



const mapStateToProps = state => {
    // debugger
    return {
      users: state.users,
    };
};

const mapDispatchToProps = dispatch => {
  return{
    onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
