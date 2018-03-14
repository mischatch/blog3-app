import connect from 'react-redux';
import Home from './home';



const mapStateToProps = state => {
    return {
      users: state.userState.users,
    };
};

const mapDispatchToProps = dispatch => {
  return{
    onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
  };
};

export default (mapStateToProps, mapDispatchToProps)(Home);
