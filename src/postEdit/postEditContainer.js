import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostEdit from './postEdit';
import { editPost, getOnePost, addDataToPost } from '../actions/post_actions';
import { getPostImages } from '../actions/images_actions';

const mapStateToProps = ({ posts, images }, ownProps) => {
  const id = ownProps.match.params.postId;
  debugger
  return {
    post: posts.posts[id],
    id: id,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    editPost: (post, id) => dispatch(editPost(post, id)),
    getOnePost: id => dispatch(getOnePost(id)),
    getPostImages: id => dispatch(getPostImages(id)),
    addDataToPost: (postUpd, postID) => dispatch(addDataToPost(postUpd, postID)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEdit));
