import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import Navigation from './navigation';

const mapStateToProps = ({ session }) => {
  debugger
  return {
    currentUser: session.currentUser,
    thing: 'these are props', 
  };
};


const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
