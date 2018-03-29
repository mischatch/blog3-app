import { RECEIVE_POST } from '../actions/post_actions';

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
    default:
      return state;
  }
};

export default postReducer;
