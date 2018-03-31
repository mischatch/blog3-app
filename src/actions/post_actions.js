import { db } from '../firebase';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";

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

export const removePost = id => {
  return {
    type: REMOVE_POST,
    id
  };
};

export const createPost = post => dispatch => {
    return (
      db.doCreatePost(post)
        .then(() => dispatch(receivePost(post))
        )
    );
};

export const getAllPosts = () => dispatch => {
  return (
    db.getAllPosts()
      .then((posts) => dispatch(receiveAllPosts(posts)))
  );
};

export const deletePost = id => dispatch => {
  return (
    db.removePost(id)
      .then(() => {
        debugger;
        dispatch(removePost(id));
      })
  );
};
