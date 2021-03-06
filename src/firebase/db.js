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
      debugger
      return res.val();
    })
    .catch(err => {
      console.log(err);
    });
  };

export const removePost = (id) => {
  return posts.child(id).remove()
    .then(id => id);
};

export const postEdit = (post, id) => {
  return posts.child(id).update(post)
    .then((res) => {
      debugger
      return { post, key: id };
    })
};



// ------------ images ---------------

export const createImages = (images, postID) => {
  return db.ref('images/' + postID).set({ images })
          .then(res => {
            return res;
          });
};


export const getAllImages = () => {
  return db.ref('images').once('value')
    .then(res => {
      return res.val();
    })
    .catch(err => {
      console.log(err);
    });
};

export const getPostImagesById = (id) => {
    return images.child(`${id}`).once('value')
      .then(snap => {
        const images = snap.val();
        return { images, key: id};
      });
};
