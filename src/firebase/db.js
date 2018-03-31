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
  return posts.push().set({ title, body })
    .then(() => {
      debugger
      return getLastPost();
    });
};

export const getLastPost = () => {
    return posts.limitToLast(2).on('child_added', (snap) => {
      debugger
      return { post: snap.val(), key: snap.key };
    });
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
