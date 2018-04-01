import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostView from './postView';
import { editPost, getOnePost } from '../actions/post_actions';

const mapStateToProps = ({ posts }, ownProps) => {
  debugger
  return {
    post: posts.posts,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    editPost: post => dispatch(editPost(post)),
    getOnePost: id => dispatch(getOnePost(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostView));
