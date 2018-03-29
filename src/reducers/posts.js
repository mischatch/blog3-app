import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/post_actions';

const nullPosts = Object.freeze({
  posts: [],
});

const postReducer = (state = nullPosts, action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_POST : {
      return Object.assign({}, state, {
        posts: [action.post]
      });
    }
    case RECEIVE_ALL_POSTS : {
      Object.assign({}, state, {
        posts: [action.posts]
      });
    }
    default:
      return state;
  }
};

export default postReducer;
