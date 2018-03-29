import { db } from '../firebase';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const receiveAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};





export const createPost = post => dispatch => {
  return (
    db.doCreatePost(post)
      .then(post => dispatch(receivePost(post)))
  );
};

export const getAllPosts = () => dispatch => {
  debugger
  return (
    db.getAllPosts()
      .then((posts) => {
        debugger
        dispatch(receiveAllPosts(posts));
      })
  );
};
