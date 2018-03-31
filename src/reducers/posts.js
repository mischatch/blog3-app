import { RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';
import { postsShaper } from './selectors';

import merge from 'lodash/merge';

const nullPosts = Object.freeze({
  posts: {},
});

const postReducer = (state = nullPosts, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_POST : {
      debugger
      let newPost = {posts: {}};
      newPost.posts[action.post.key] = action.post.post;
      nextState = merge({}, state, newPost);
      debugger
      return nextState;
    }
    case RECEIVE_ALL_POSTS : {
      let all = { posts: action.posts };
      nextState = merge({}, state, all);
      return nextState;
    }
    case REMOVE_POST : {
      debugger
      nextState = merge({}, state);
      delete nextState.posts[action.id];
      return nextState;
    }
    default:
      return state;
  }
};

export default postReducer;
