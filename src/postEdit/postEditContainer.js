import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostEdit from './postEdit';
import { editPost, getOnePost } from '../actions/post_actions';

const mapStateToProps = ({ posts }, ownProps) => {
  debugger
  return {
    post: posts.posts,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    editPost: (post, id) => dispatch(editPost(post, id)),
    getOnePost: id => dispatch(getOnePost(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEdit));
