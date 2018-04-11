import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostEdit from './postEdit';
import { editPost, getOnePost } from '../actions/post_actions';
import { getPostImages } from '../actions/images_actions';

const mapStateToProps = ({ posts, images }, ownProps) => {
  // debugger
  return {
    post: posts.posts,
    // images: images.images,
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
