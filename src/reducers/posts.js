import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { postsShaper } from './selectors';

const nullPosts = Object.freeze({
  posts: [],
});

const postReducer = (state = nullPosts, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST : {
      return Object.assign({}, state, {
        posts: [action.post]
      });
    }
    case RECEIVE_ALL_POSTS : {
      debugger
      let all = postsShaper(action.posts)
      Object.assign({}, state, {
        posts: all
      });
    }
    default:
      return state;
  }
};

export default postReducer;
