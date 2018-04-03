import { RECEIVE_IMAGES } from '../actions/images_actions';


import merge from 'lodash/merge';

const nullImages = Object.freeze({
  images: {},
});

const imagesReducer = (state = nullImages, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_IMAGES : {
      debugger
      // let newPost;
      // nextState = merge({}, state, newPost);
      debugger
      return nextState;
    }
    default:
      return state;
  }
};

export default imagesReducer;
