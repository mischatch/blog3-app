import { RECEIVE_IMAGES, RECEIVE_ALL_IMAGES } from '../actions/images_actions';


import merge from 'lodash/merge';

const nullImages = Object.freeze({
  images: {},
});

const imagesReducer = (state = nullImages, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_IMAGES : {
      // let newPost;
      // nextState = merge({}, state, newPost);
      return nextState;
    }
    case RECEIVE_ALL_IMAGES : {
      let all = { images: action.images };
      nextState = merge({}, state, all);
      // debugger
      return nextState;
    }
    default:
      return state;
  }
};

export default imagesReducer;


// images: [
//   { name1: url1 }
//   { name2: url2 }
//   { name3: url3 }
// ]
