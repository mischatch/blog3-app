import { db, posts, images } from './firebase';
import * as firebase from 'firebase';



export const doCreateUser = (id, username, email) => {
  return (
    db.ref(`users/${id}`).set({
      username,
      email,
      images: {},
    })
  );
};


// export const onceGetUsers = () =>
//   db.ref('users').once('value');

export const newKey = () => {
  return posts.push().key;
};


export const doCreatePost = ({ title, body }) => {
  return posts.push({
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    title,
    body
  })
    .then((res) => {
      return  { post: {title, body}, key: res.key };
      });
};


export const getPostById = (id) => {
    return posts.child(`${id}`).once('value')
      .then(snap => {
        const post = snap.val();
        return { post, key: id};
      });
};

export const getAllPosts = () => {
  return db.ref('posts').once('value')
    .then(res => {
      return res.val();
    });
  };

export const removePost = (id) => {
  return posts.child(id).remove()
    .then(id => id);
};

export const postEdit = (post, id) => {
  debugger
  return posts.child(id).update(post)
    .then(() => {
      return getPostById(id);
    });
};



// ------------ images ---------------

export const createImages = (images, postID) => {
  debugger
  return db.ref('images/' + postID).set({ images })
          .then(res => {
            debugger
            return res;
          })
};
