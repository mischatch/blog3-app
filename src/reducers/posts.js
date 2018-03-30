import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { postsShaper } from './selectors';

import merge from 'lodash/merge';

const nullPosts = Object.freeze({
  posts: [],
});

const postReducer = (state = nullPosts, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_POST : {
      debugger
      let newPost = {[Object.keys(action.post)]: action.post};
      nextState = merge({}, state, newPost);
      return nextState;
    }
    case RECEIVE_ALL_POSTS : {
      let all = postsShaper(action.posts);
      return Object.assign({}, state, {
        posts: all
      });
    }
    default:
      return state;
  }
};

export default postReducer;
