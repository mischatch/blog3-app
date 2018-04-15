import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostEdit from './postEdit';
import { editPost, getOnePost } from '../actions/post_actions';
import { getPostImages } from '../actions/images_actions';

const mapStateToProps = ({ posts, images }, ownProps) => {
  const key = ownProps.match.params.postId;
  // debugger
  return {
    post: posts.posts,
    key: key,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    editPost: (post, id) => dispatch(editPost(post, id)),
    getOnePost: id => dispatch(getOnePost(id)),
    getPostImages: id => dispatch(getPostImages(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEdit));
