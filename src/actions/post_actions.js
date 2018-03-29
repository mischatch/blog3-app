import { db } from '../firebase';

export const RECEIVE_POST = "RECEIVE_POST";

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};





export const createPost = post => dispatch => {
  return (
    db.doCreatePost(post)
      .then(post => dispatch(receivePost(post)))
  );

};
