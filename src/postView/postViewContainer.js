import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostView from './postView';
import { editPost, getOnePost } from '../actions/post_actions';

const mapStateToProps = ({ posts }, ownProps) => {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostView));
