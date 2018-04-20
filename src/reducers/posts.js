import { RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';

import merge from 'lodash/merge';

const nullPosts = Object.freeze({
  posts: {},
});

const postReducer = (state = nullPosts, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_POST : {
      let newPost = {posts: {}};
      newPost.posts[action.post.key] = action.post.post;
      nextState = merge({}, state, newPost);
      return nextState;
    }
    case RECEIVE_ALL_POSTS : {
      debugger
      let all = { posts: action.posts };
      nextState = all;
      return nextState;
    }
    case REMOVE_POST : {
      nextState = merge({}, state);
      delete nextState.posts[action.id];
      return nextState;
    }
    default:
      return state;
  }
};

export default postReducer;
