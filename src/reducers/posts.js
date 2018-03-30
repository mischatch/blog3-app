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
      let newPost = action.post;
      nextState = merge({}, state, newPost);
      return nextState;
    }
    case RECEIVE_ALL_POSTS : {
      debugger
      let all = action.posts;
      nextState = merge({}, state, all);
      return nextState;
    }
    case REMOVE_POST : {
      nextState = merge({}, state);
      delete nextState[action.post.id];
      return nextState;
    }
    default:
      return state;
  }
};

export default postReducer;
