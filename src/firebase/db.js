import { db, posts } from './firebase';

export const doCreateUser = (id, username, email) => {
  return (
    db.ref(`users/${id}`).set({
      username,
      email,
    })

  );
};


export const onceGetUsers = () =>
  db.ref('users').once('value');


export const doCreatePost = ({ title, body }) => {
  return posts.push({ title, body })
    .then((res) => {
      return  { post: {title, body}, key: res.key };
      });
  // return getLastPost();
};

export const getLastPost = () => {
    // let postNew = {};
    return posts.limitToLast(1).on('child_added', (snap) => {
       return { post: snap.val(), key: snap.key };
    });
    // return postNew;
};

export const getAllPosts = () => {
  return db.ref('posts').once('value')
    .then(res => {
      return res.val();
    });
  };

  export const removePost = (id) => {
    debugger
    return posts.child(id).remove()
      .then(id => id);
  };
